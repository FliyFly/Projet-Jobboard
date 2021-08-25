from flask import Flask, request, jsonify, Blueprint
from ConnectDb import ConnectDb
from Models.Advertisements import Advertisements


advertisements = Blueprint('advertisements', __name__)


@advertisements.route('/api/advertisements', methods=['GET'])
def get_all_advertisements():
    try:
        query = Advertisements().get_advertisements()
        data = jsonify(query)
        data.status_code = 200
        return data
    except Exception as e:
        print(e)
    return 'Something goes wrong'


@advertisements.route('/api/advertisements/<int:id_advertisements>', methods=['GET'])
def get_advertisements_by_id(id_advertisements):
    try:
        query = Advertisements().get_by_id(id_advertisements)
        data = jsonify(query)
        data.status_code = 200
        return data
    except Exception as e:
        return e


@advertisements.route('/api/advertisements/<int:id_advertisements>', methods=['DELETE'])
def delete_advertisement_by_id(id_advertisements):
    try:
        query = Advertisements().delete_by_id(id_advertisements)
        data = jsonify(query)
        data.status_codes = 200
        return "Object deleted successfully"
    except Exception as e:
        print(e)
    return 'Something goes wrong'


@advertisements.route('/api/advertisements', methods=['POST'])
def post_advertisements():
    try:
        req = request.get_json()
        title = req['title']
        about = req['about']
        job_description = req['job_description']
        localisation = req['localisation']
        contract_type = req['contract_type']
        id_wage = req.get('id_wage', None)
        id_companie = req.get('id_companie', None)
        id_sector = req.get('id_sector', None)
        query = Advertisements().post_advertisements(title, about, job_description, localisation, contract_type, id_wage, id_companie, id_sector)
        data = jsonify(query)
        data.status_code = 201
        return data
    except Exception as e:
        print(e)
    return 'Something goes wrong'


@advertisements.route('/api/advertisement/<int:id_advertisement>', methods=['PATCH'])
def patch_advertisements(id_advertisement):
    try:
        req = request.get_json()
        print(req)
        print(id_advertisement)
        title = req['title']
        about = req['about']
        job_description = req['job_description']
        localisation = req['localisation']
        contract_type = req['contract_type']
        id_wage = req.get('id_wage', None)
        id_companie = req.get('id_companie', None)
        id_sector = req.get('id_sector', None)
        query = Advertisements().patch_advertisements(title, about, job_description, localisation, contract_type, id_wage, id_companie, id_sector, id_advertisement)
        data = jsonify(query)
        data.status_code = 201
        return data
    except Exception as e:
        print(e)
    return 'Something goes wrong'

