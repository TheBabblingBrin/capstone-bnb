from flask import Blueprint
import os


map_routes = Blueprint('maps', __name__)

@map_routes.route('/key', methods=['POST'])
def getMapKey():
  googleMapsAPIKey = os.environ.get('MAP_KEY')
  return {'googleMapsAPIKey':googleMapsAPIKey}

# @map_routes.route('/location', methods=['POST'])
# def getLocation():
