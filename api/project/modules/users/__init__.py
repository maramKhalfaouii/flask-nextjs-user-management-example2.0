from http import HTTPStatus
from flask_restx import Resource, Namespace, fields
from .models import Users as UsersModel
from project.modules.utils import authenticate_restful, is_admin
from project.modules.utils import token_auth
from apifairy import authenticate, body, response
from project.extensions import db

api = Namespace("Users", description="Users related operation")


@api.route('/<int:id>')
class Users(Resource):
    # Authentication decorator updated
    @authenticate(token_auth)
    def get(self, id: int):
        """Get single user details"""
        response_object = {'status': 'fail', 'message': 'User does not exist'}
        try:
            user = UsersModel.query.filter_by(id=id).first()
            if not user:
                return response_object, HTTPStatus.NOT_FOUND
            else:
                response_object = {'status': 'success', 'data': user.to_json()}
                return response_object, HTTPStatus.OK
        except ValueError:
            return response_object, HTTPStatus.NOT_FOUND
        except Exception as e:
            response_object[
                'message'] = "There's an error while fetch user detail"
            api.logger.error(e)
            return response_object, HTTPStatus.INTERNAL_SERVER_ERROR


@api.route('')
class UsersList(Resource):
    @authenticate(token_auth)
    @api.doc(security="apikey")
    def get(self, current_user):
        """Get all users"""
        response_object = {
            'status': 'success',
            'users': [user.to_json() for user in UsersModel.query.all()]
        }
        return response_object, HTTPStatus.OK
