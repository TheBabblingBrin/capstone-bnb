from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Booking, db, User
from app.forms import BookingForm
from .auth_routes import validation_errors_to_error_messages

booking_routes = Blueprint('bookings', __name__)

##GET all bookings
@booking_routes.route('')
def getAllBookings():
    """
    Query for all user and sends users bookings
    """
    user = User.query.get(current_user.id).bookings
    # return bookings.to_dict()
    return {'bookings': [booking.to_dict() for booking in user]}

##GET booking
@booking_routes.route('/<int:bookingId>', methods=['GET'])
def getOnebooking(bookingId):
  booking = Booking.query.get_or_404(bookingId)
  return {'booking': booking.to_dict()}

##POST booking
@booking_routes.route('', methods=['POST'])
@login_required
def create_booking():
  form = BookingForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():
    data = form.data
    spot = request.json['spotId']
    new_booking = Booking(
          userId = current_user.id,
          spotId = spot,
          start_date = data['start_date'],
          end_date = data['end_date']
        )
    db.session.add(new_booking)
    db.session.commit()
    return {'booking': new_booking.to_dict()}
  return {'errors': validation_errors_to_error_messages(form.errors)}

##UPDATE booking

@booking_routes.route('/<int:bookingId>', methods=['PUT'])
@login_required
def update_booking(bookingId):
  form = BookingForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  booking = Booking.query.get_or_404(bookingId)
  if booking.userId != current_user.id:
    return{{'errors': 'You must own a booking to update it.'}}
  if form.validate_on_submit():
      data = form.data
      print('IM UPDATING MYSELF', data)
      booking.start_date = data['start_date']
      booking.end_date = data['end_date']

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
