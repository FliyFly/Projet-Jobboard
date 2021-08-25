from flask import Flask, request, jsonify, Blueprint
from flask_restful import Resource, Api
from Models.Wages import Wages


wages = Blueprint('wages', __name__)


@wages.route('/api/wages', methods=['POST'])
def post_wages():
    try:
        req = request.get_json()
        wage = req['wage']
        query = Wages().post_wage(wage)
        data = jsonify(query)
        data.status_code = 201
        return data
    except Exception as e:
        print(e)
    return 'Something goes wrong'


@wages.route('/api/wage/<int:id_wage>', methods=['DELETE'])
def delete_wage_by_id(id_wage):
    try:
        query = Wages().delete_by_id(id_wage)
        data = jsonify(query)
        data.status_codes = 200
        return "Object deleted successfully"
    except Exception as e:
        print(e)
    return 'Something goes wrong'


@wages.route('/api/wages', methods=['GET'])
def get_all_wages():
    try:
        query = Wages().get_all()
        data = jsonify(query)
        data.status_code = 200
        return data
    except Exception as e:
        print(e)
    return 'Something goes wrong'


@wages.route('/api/wage/<int:id_wage>', methods=['GET'])
def get_wage_by_id(id_wage):
    try:
        query = Wages().get_by_id(id_wage)
        data = jsonify(query)
        data.status_code = 200
        return data
    except Exception as e:
        return e

@wages.route('/api/wage/<int:id_wage>', methods=['PATCH'])
def patch_wage(id_wage):
    try:
        req = request.get_json()
        wage = req['wage']
        query = Wages().patch_wage(wage, id_wage)
        data = jsonify(query)
        data.status_code = 201
        return data
    except Exception as e:
        print(e)
    return 'Something goes wrong'

