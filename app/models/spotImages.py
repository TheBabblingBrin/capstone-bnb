from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.schema import Column, ForeignKey, Table
from sqlalchemy.orm import relationship
from .db import add_prefix_for_prod
import datetime
import json


Base = declarative_base()

class SpotImage(db.Model):
    __tablename__ = 'spotimages'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(500))

    spotId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('spots.id')), nullable=False)



    def to_dict(self):
        return {
            'id': self.id,
            'spotId': self.spotId,
            'url': self.url

        }
