from flask_wtf import FlaskForm
from wtforms import StringField, DecimalField
from app.models import Spot
from wtforms.validators import DataRequired, Email, ValidationError

class SpotForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    address = StringField('Address', validators=[DataRequired()])
    city = StringField('City', validators=[DataRequired()])
    state = StringField('State', validators=[DataRequired()])
    country = StringField('Country', validators=[DataRequired()])
    description = StringField('Description', validators=[DataRequired()])
    price = DecimalField('Price', validators=[DataRequired()])
