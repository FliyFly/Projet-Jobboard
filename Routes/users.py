from flask import request, jsonify, Blueprint, session, make_response, render_template
from Models.Users import Users
from flask_bcrypt import Bcrypt
import secrets

bcrypt = Bcrypt(app=None)
users = Blueprint('users', __name__)


@users.route('/api/users', methods=['GET'])
def get_all_users():
    try:
        query = Users().get_all()
        data = jsonify(query)
        data.status_code = 200
        return data
    except Exception as e:
        print(e)
    return 'Something goes wrong'


@users.route('/api/user/<int:id_users>', methods=['GET'])
def get_one_users_by_id(id_users):
    try:
        query = Users().get_by_id(id_users)
        data = jsonify(query)
        data.status_code = 200
        return data
    except Exception as e:
        print(e)
    return 'Something goes wrong'


@users.route('/api/users', methods=['POST'])
def post_users():
    try:
        req = request.get_json()
        print(req)
        first_name = req['first_name']
        last_name = req['last_name']
        email = req['email']
        birthday = req['birthday']
        gender = req['gender']
        id_company = req.get('id_company', None)
        phone = req['phone']
        token = secrets.token_hex(100)
        id_role = req.get('role', 4)
        password = req['password']
        password_hash = bcrypt.generate_password_hash(password, 10)
        query = Users().post_user(first_name, last_name, email, birthday, gender, id_company, phone, token, id_role, password_hash)
        data = jsonify(query)
        data.status_code = 201
        return data
    except Exception as e:
        print(e)
    return 'Something goes wrong'



@users.route('/api/user/login', methods=['POST'])
def check_password():
    req = request.get_json()
    email = req['email']
    password = req['password']
    query = Users().get_by_email(email)
    if query:
        if bcrypt.check_password_hash(query['password'], password):
            print(query['id_role'])
            return query
        else:
            return "Password incorect"
    else:
        return "Pas d'utilisateur"


@users.route('/api/user/<int:id_users>', methods=['DELETE'])
def delete_users_by_id(id_users):
    try:
        query = Users().delete_by_id(id_users)
        data = jsonify(query)
        data.status_codes = 200
        return "Object deleted successfully"
    except Exception as e:
        print(e)
    return "Something goes wrong"


@users.route('/api/user/logout')
def logout():
    if request.cookies.get('status'):
        res = make_response("Vous êtes déconnecté")
        res.set_cookie('status', 'connected', max_age=0)
        return res
    else:
        return "Opération impossible"


@users.route('/api/user/status/<status>', methods=['GET'])
def status(status):
    # res = make_response("Vous êtes connecté")
    # res.set_cookie('status', 'connected', max_age=60 * 60 * 24 * 365 * 2, domain='127.0.0.1:80')
    # return res
    if status == "status=connected":
        return "Connecté"
    else:
        return "Pas encore connecté"


@users.route('/api/user/<int:id_user>', methods=['PATCH'])
def patch_users(id_user):
    try:
        req = request.get_json()
        first_name = req['first_name']
        last_name = req['last_name']
        email = req['email']
        phone = req['phone']
        gender = req['gender']
        birthday = req['birthday']
        password = req['password']
        password_hash = bcrypt.generate_password_hash(password, 10)
        query = Users().patch_user(first_name, last_name, email, birthday, gender, phone, password_hash, id_user)
        data = jsonify(query)
        data.status_code = 201
        return data
    except Exception as e:
        print(e)
    return 'Something goes wrong'








