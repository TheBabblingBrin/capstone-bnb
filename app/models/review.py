from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.schema import Column, ForeignKey, Table
from sqlalchemy.orm import relationship
from .db import add_prefix_for_prod
import datetime
import json




Base = declarative_base()

class Review(db.Model):
    __tablename__ = 'reviews'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    createdAt = db.Column(db.DateTime, default=datetime.datetime.now)
    updatedAt = db.Column(db.DateTime, default=datetime.datetime.now, onupdate=datetime.datetime.now)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    spotId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('spots.id')), nullable=False)
    body = db.Column(db.String(500), nullable=False)
    rating = db.Column(db.Integer, nullable=False )

    review_spot = db.relationship('Spot',
                            back_populates = 'reviews',
                            lazy=False)

    reviewer = db.relationship('User',
                            back_populates = 'reviews',
                            lazy=False)

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'spotId': self.spotId,
            'body': self.body,
            'rating': self.rating,
            'createdAt': json.dumps(self.createdAt, default=str),
            'updatedAt': json.dumps(self.updatedAt, default=str)
        }
