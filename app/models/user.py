from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(200), nullable=False)
    last_name = db.Column(db.String(200), nullable=False)
    profile_pic = db.Column(db.String(500))
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    bookings = db.relationship('Booking',
                            back_populates = 'reservations',
                            lazy=False,
                            cascade="all, delete")

    reviews = db.relationship('Review',
                            back_populates = 'reviewer',
                            lazy=False,
                            cascade="all, delete")
    listings = db.relationship('Spot',
                            back_populates = 'owners',
                            lazy=False,
                            cascade="all, delete")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'firstName': self.first_name,
            'lastName': self.last_name,
            'email': self.email,
            'profilePic': self.profile_pic

        }
