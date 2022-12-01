from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Booking, db, User, Spot
from app.forms import BookingForm
from .auth_routes import validation_errors_to_error_messages
from datetime import datetime, date, timedelta
from collections import namedtuple
booking_routes = Blueprint('bookings', __name__)

##GET all bookings
@booking_routes.route('')
def getAllBookings():
    """
    Query for all user and sends users bookings
    """
    user_bookings = User.query.get(current_user.id).bookings
    bookings = [booking.to_dict() for booking in user_bookings]
    for booking in bookings:
      spot = Spot.query.get(booking['spotId'])
      booking['spot'] = spot.to_dict()
    return {'bookings': bookings}

##GET booking
@booking_routes.route('/<int:bookingId>', methods=['GET'])
def getOnebooking(bookingId):
  booking = Booking.query.get_or_404(bookingId)
  return {'booking': booking.to_dict()}

##POST booking
@booking_routes.route('', methods=['POST'])
@login_required
def create_booking():
  spot = request.json['spotId']
  spotBookings = Spot.query.get_or_404(spot).to_dict()['bookings']
  spotBookings = [[date['start_date'],date['end_date']] for date in spotBookings]
  form = BookingForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():
    data = form.data

    dateErrors = {}

    for date in spotBookings:
      if (data['start_date'] <= date[1].date()) and (date[0].date() <= data['end_date']):
        dateErrors['Date'] = ['These dates are already taken. Please try again.']
    if data['start_date'] > data['end_date']:
      dateErrors['Dates'] = ['Please pick an end date occuring after your start date']
    if datetime.now().date() > data['start_date'] or datetime.now().date() > data['end_date']:
      dateErrors['Past Dates'] = ['Please pick dates in the future.']
    if bool(dateErrors):
      return {'errors': validation_errors_to_error_messages(dateErrors)}

    new_booking = Booking(
          userId = current_user.id,
          spotId = spot,
          start_date = data['start_date'],
          end_date = data['end_date']
        )
    db.session.add(new_booking)
    db.session.commit()
    booking = new_booking.to_dict()
    spot = Spot.query.get(booking['spotId'])
    booking['spot'] = spot.to_dict()
    return {'booking': booking}
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
      newbooking = booking.to_dict()
      spot = Spot.query.get(newbooking['spotId'])
      newbooking['spot'] = spot.to_dict()
      return {'booking': newbooking}

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
