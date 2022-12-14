from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.schema import Column, ForeignKey, Table
from sqlalchemy.orm import relationship
from .db import add_prefix_for_prod
import datetime
import json




Base = declarative_base()

class Booking(db.Model):
    __tablename__ = 'bookings'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    start_date = db.Column(db.DateTime, nullable=False)
    end_date = db.Column(db.DateTime, nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.datetime.now)
    updatedAt = db.Column(db.DateTime, default=datetime.datetime.now, onupdate=datetime.datetime.now)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    spotId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('spots.id')), nullable=False)

    spots = db.relationship('Spot',
                            back_populates = 'bookings',
                            lazy=False)

    reservations = db.relationship('User',
                            back_populates = 'bookings',
                            lazy=False)

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'spotId': self.spotId,
            'start_date': self.start_date,
            'end_date': self.end_date,
            'createdAt': json.dumps(self.createdAt, default=str),
            'updatedAt': json.dumps(self.updatedAt, default=str)
        }
