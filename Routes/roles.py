from flask import Flask, request, jsonify, Blueprint
from ConnectDb import ConnectDb
from Models.Roles import Roles


roles = Blueprint('roles', __name__)

@roles.route('/api/role', methods=['POST'])
def role():
    try:
        req = request.get_json()
        role = req['role']
        query = Roles().post_role(role)
        data = jsonify(query)
        data.status_code = 201
        return data
    except Exception as e:
        print(e)
    return 'Something goes wrong'


@roles.route('/api/role/<int:id_role>', methods=['DELETE'])
def delete_role_by_id(id_role):
    try:
        query = Roles().delete_by_id(id_role)
        data = jsonify(query)
        data.status_codes = 200
        return "Object deleted successfully"
    except Exception as e:
        print(e)
    return 'Something goes wrong'


@roles.route('/api/roles', methods=['GET'])
def get_all_roles():
    try:
        query = Roles().get_all()
        data = jsonify(query)
        data.status_code = 200
        return data
    except Exception as e:
        print(e)
    return 'Something goes wrong'


@roles.route('/api/role/<int:id_role>', methods=['GET'])
def get_role_by_id(id_role):
    try:
        query = Roles().get_by_id(id_role)
        data = jsonify(query)
        data.status_code = 200
        return data
    except Exception as e:
        print(e)
    return 'Something goes wrong'


@roles.route('/api/role/<int:id_role>', methods=['PATCH'])
def patch_role(id_role):
    try:
        req = request.get_json()
        role = req['role']
        query = Roles().patch_role(role, id_role)
        data = jsonify(query)
        data.status_code = 201
        return data
    except Exception as e:
        print(e)
    return 'Something goes wrong'



