from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from sqlalchemy.orm import joinedload
from app.models import Spot, db, User, SpotImage
from app.forms import SpotForm
from .auth_routes import validation_errors_to_error_messages

image_routes = Blueprint('images', __name__)

@image_routes.route('/<int:imageId>', methods=['DELETE'])
def remove_spot_image(imageId):
  image = SpotImage.query.get_or_404(imageId)
  if image:
    db.session.delete(image)
    db.session.commit()
    return {"message": "Image was successfully deleted"}
  return {"error": "Image does not exist"}, 404
