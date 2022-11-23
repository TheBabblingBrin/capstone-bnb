from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Booking, db, User
from app.forms import bookingForm
from .auth_routes import validation_errors_to_error_messages

booking_routes = Blueprint('bookings', __name__)

##GET all bookings
@booking_routes.route('')
def getAllBookings():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    bookings = Booking.query.all()
    return {'bookings': [booking.to_dict() for booking in bookings]}

##GET booking
@booking_routes.route('/<int:bookingId>', methods=['GET'])
def getOnebooking(bookingId):
  booking = Booking.query.get_or_404(bookingId)
  return {'booking': booking.to_dict()}

##POST booking
@booking_routes.route('', methods=['POST'])
@login_required
def create_booking():
  pass
  form = BookingForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():
    data = form.data
    print('DATAAAAAAAAAA', data)
    new_booking = Booking(
          ownerId = current_user.id,
          name = data['name'],
          address = data['address'],
          city = data['city'],
          state = data['state'],
          country = data['country'],
          description= data['description'],
          price = data['price']
        )
    db.session.add(new_booking)
    db.session.commit()
    return {'booking': new_booking.to_dict()}
  return {'errors': validation_errors_to_error_messages(form.errors)}

##UPDATE booking

@booking_routes.route('/<int:bookingId>', methods=['PUT'])
@login_required
def update_booking(bookingId):
  pass
  form = BookingForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  booking = booking.query.get_or_404(bookingId)
  if booking.ownerId != current_user.id:
    return{{'errors': 'You must own a booking to update it.'}}
  if form.validate_on_submit():
      data = form.data
      print('IM UPDATING MYSELF', data)
      booking.name = data['name']
      booking.address = data['address']
      booking.city = data['city']
      booking.state = data['state']
      booking.country = data['country']
      booking.description= data['description']
      booking.price = data['price']
      db.session.commit()
      return {'booking': booking.to_dict()}
  return {'errors': validation_errors_to_error_messages(form.errors)}

@booking_routes.route('/<int:bookingId>', methods=['DELETE'])
@login_required
def delete_booking(bookingId):
    """
    Delete a booking
    """
    booking = Booking.query.get_or_404(bookingId)
    if booking:
        db.session.delete(booking)
        db.session.commit()
        return {"message": "booking was successfully deleted"}
    return {"error": "booking does not exist"}, 404
