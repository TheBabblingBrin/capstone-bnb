from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.schema import Column, ForeignKey, Table
from sqlalchemy.orm import relationship
from .db import add_prefix_for_prod
import datetime
import json




Base = declarative_base()

class Spot(db.Model):
    __tablename__ = 'spots'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    city = db.Column(db.String(255), nullable=False)
    state = db.Column(db.String(255), nullable=False)
    country = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    price = db.Column(db.Float, nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.datetime.now)
    updatedAt = db.Column(db.DateTime, default=datetime.datetime.now, onupdate=datetime.datetime.now)

    ownerId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)

    bookings = db.relationship('Booking',
                            back_populates = 'spots',
                            lazy=False,
                            cascade="all, delete")

    images = db.relationship('SpotImage',
                            back_populates = 'spot',
                            lazy=False,
                            cascade="all, delete")

    owners = db.relationship('User',
                            back_populates= 'listings',
                            lazy='joined')




    def to_dict(self):
        return {
            'id': self.id,
            'ownerId': self.ownerId,
            'name': self.name,
            'address': self.address,
            'city': self.city,
            'state': self.state,
            'country': self.country,
            'description': self.description,
            'price': self.price,
            'images': sorted([image.to_dict() for image in self.images], key=lambda x: x['order']),
            'createdAt': json.dumps(self.createdAt, default=str),
            'updatedAt': json.dumps(self.updatedAt, default=str)
        }
