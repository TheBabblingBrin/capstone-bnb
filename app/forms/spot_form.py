from flask_wtf import FlaskForm
from wtforms import StringField, DecimalField
from app.models import Spot
from wtforms.validators import DataRequired, Length, Email, ValidationError, NumberRange

class SpotForm(FlaskForm):
    name = StringField('Name', validators=[Length(min= 1, max=255, message='Please enter a name under 255 characters.'),DataRequired()])
    address = StringField('Address', validators=[Length(min= 1, max=255, message='Please enter an address under 255 characters.'),Length(min= 1, max=255, message='Please enter an e-mail under 255 characters.'),DataRequired()])
    city = StringField('City', validators=[Length(min= 1, max=255, message='Please enter a city under 255 characters.'),DataRequired()])
    state = StringField('State', validators=[Length(min= 1, max=255, message='Please enter a state under 255 characters.'),Length(min= 1, max=255, message='Please enter an e-mail under 255 characters.'),Length(min= 1, max=255, message='Please enter an e-mail under 255 characters.'),DataRequired()])
    country = StringField('Country', validators=[Length(min= 1, max=255, message='Please enter a country under 255 characters.'),Length(min= 1, max=255, message='Please enter an e-mail under 255 characters.'),DataRequired()])
    description = StringField('Description', validators=[Length(min= 1, max=255, message='Please enter a description under 255 characters.'),DataRequired()])
    price = DecimalField('Price', validators=[DataRequired(), NumberRange(min=None, max=100000, message='Please enter a reasonable price.')])
