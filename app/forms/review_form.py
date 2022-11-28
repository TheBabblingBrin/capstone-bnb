from flask_wtf import FlaskForm
from wtforms import StringField, DecimalField, DateField,IntegerField
from app.models import Review
from wtforms.validators import DataRequired

class ReviewForm(FlaskForm):
    body= StringField('Review', validators=[DataRequired()])
    rating = IntegerField('Rating', validators=[DataRequired()])
