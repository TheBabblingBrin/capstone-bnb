from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from sqlalchemy.orm import joinedload
from app.models import Spot, db, User, SpotImage
from app.forms import SpotForm
from .auth_routes import validation_errors_to_error_messages

spot_routes = Blueprint('spots', __name__)

##GET all spots
@spot_routes.route('')
def getAllSpots():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    spots = Spot.query.all()

    return {'spots': [spot.to_dict() for spot in spots]}

##GET Spot
@spot_routes.route('/<int:spotId>', methods=['GET'])
def getOneSpot(spotId):
  spot = Spot.query.get_or_404(spotId)
  return {'spot': spot.to_dict()}

##POST Spot
@spot_routes.route('', methods=['POST'])
@login_required
def create_spot():
  form = SpotForm()
  form['csrf_token'].data = request.cookies['csrf_token']



  if form.validate_on_submit():
    images = request.json['images']

    data = form.data
    new_spot = Spot(
          ownerId = current_user.id,
          name = data['name'],
          address = data['address'],
          city = data['city'],
          state = data['state'],
          country = data['country'],
          description= data['description'],
          price = data['price']
        )
    db.session.add(new_spot)
    db.session.commit()
    for i in range(len(images)):
      if len(images[i])>1:
        image = SpotImage(url=f'{images[i]}', spotId=new_spot.id, order=i+1)
        db.session.add(image)
    db.session.commit()
    return {'spot': new_spot.to_dict()}
  return {'errors': validation_errors_to_error_messages(form.errors)}

##UPDATE SPOT

@spot_routes.route('/<int:spotId>', methods=['PUT'])
@login_required
def update_spot(spotId):
  form = SpotForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  spot = Spot.query.get_or_404(spotId)
  images = request.json['images']
  if spot.ownerId != current_user.id:
    return{{'errors': 'You must own a spot to update it.'}}
  if form.validate_on_submit():
      data = form.data
      print('IM UPDATING MYSELF', data)
      spot.name = data['name']
      spot.address = data['address']
      spot.city = data['city']
      spot.state = data['state']
      spot.country = data['country']
      spot.description= data['description']
      spot.price = data['price']
      for i in range(len(images)):
        if len(images[i])>1:
          if spot.images[i]:
            spot.images[i].url = f'{images[i]}'
          else:
            image = SpotImage(url=f'{images[i]}', spotId=spotId, order=i+1)
            db.session.add(image)
      db.session.commit()
      return {'spot': spot.to_dict()}
  return {'errors': validation_errors_to_error_messages(form.errors)}

@spot_routes.route('/<int:spotId>', methods=['DELETE'])
@login_required
def delete_spot(spotId):
    """
    Delete a spot
    """
    spot = Spot.query.get_or_404(spotId)
    if spot:
        db.session.delete(spot)
        db.session.commit()
        return {"message": "Spot was successfully deleted"}
    return {"error": "Spot does not exist"}, 404
