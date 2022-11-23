from flask_wtf import FlaskForm
from wtforms import StringField, DecimalField, DateField
from app.models import Spot
from wtforms.validators import DataRequired, Email, ValidationError

class BookingForm(FlaskForm):
  ## ADD VALIDATOR FOR OVERLAPPING DATES
    start_date = DateField('Start Date', validators=[DataRequired()])
    end_date = DateField('End Date', validators=[DataRequired()])
