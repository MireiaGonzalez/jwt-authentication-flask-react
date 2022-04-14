"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException


from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity


api = Blueprint('api', __name__)

@api.route('/user/signup', methods=['POST'])
def register_user():
    body = request.get_json()
    new_user = User(email=body['email'], password=body['password'], is_active=True)
    db.session.add(new_user)
    db.session.commit()

    return jsonify(new_user.serialize()), 201

@api.route('/user/login', methods=['POST'])
def user_login():
    body = request.get_json()
    user = db.session.query(User).filter(User.email == body['email'])
    if user.password == body['password']:
        new_token = create_access_token(identity=user.id)
        return jsonify(new_token), 200
    else:
        return jsonify('Wrong password'), 401

@api.route('/user/validate', methods=['GET'])
@jwt_required()
def user_validation():
    token = get_jwt_identity()
    user = User.query.get(token)
    return jsonify(user.serialize()), 200