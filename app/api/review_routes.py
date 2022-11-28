from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Review, db, User
from app.forms import ReviewForm
from .auth_routes import validation_errors_to_error_messages

review_routes = Blueprint('reviews', __name__)

##GET all reviews
@review_routes.route('')
def getAllReviews():
    """
    Query for all user and sends users reviews
    """
    user = User.query.get(current_user.id).reviews
    # return reviews.to_dict()
    return {'reviews': [review.to_dict() for review in user]}

##GET review
@review_routes.route('/<int:reviewId>', methods=['GET'])
def getOneReview(reviewId):
  review = Review.query.get_or_404(reviewId)
  return {'review': review.to_dict()}

##POST review
@review_routes.route('', methods=['POST'])
@login_required
def create_review():
  form = ReviewForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():
    data = form.data
    spot = request.json['spotId']
    new_review = Review(
          userId = current_user.id,
          spotId = spot,
          body = data['body'],
          rating = data['rating']
        )
    db.session.add(new_review)
    db.session.commit()
    return {'review': new_review.to_dict()}
  return {'errors': validation_errors_to_error_messages(form.errors)}

##UPDATE review

@review_routes.route('/<int:reviewId>', methods=['PUT'])
@login_required
def update_review(reviewId):
  form = ReviewForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  review = Review.query.get_or_404(reviewId)
  if review.userId != current_user.id:
    return{{'errors': 'You must own a review to update it.'}}
  if form.validate_on_submit():
      data = form.data
      review.body = data['body']
      review.rating = data['rating']

      db.session.commit()
      return {'review': review.to_dict()}
  return {'errors': validation_errors_to_error_messages(form.errors)}

@review_routes.route('/<int:reviewId>', methods=['DELETE'])
@login_required
def delete_review(reviewId):
    """
    Delete a review
    """
    review = Review.query.get_or_404(reviewId)
    if review:
        db.session.delete(review)
        db.session.commit()
        return {"message": "review was successfully deleted"}
    return {"error": "review does not exist"}, 404
