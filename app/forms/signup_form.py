from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')





class SignUpForm(FlaskForm):
    email = StringField('email', validators=[Length(min= 1, max=255, message='Please enter an e-mail under 255 characters.'),Email(message='Please enter a valid e-mail address.'),DataRequired(message='Please enter an email'), user_exists])
    password = StringField('password', validators=[Length(min= 1, max=60, message='Please enter a password under 60 characters.'),DataRequired()])
    firstName = StringField('First Name', validators=[Length(min= 1, max=200, message='Please enter a first name under 200 characters.'),DataRequired()])
    lastName = StringField('Last Name', validators=[Length(min= 1, max=200, message='Please enter a last name under 200 characters.'),DataRequired()])
