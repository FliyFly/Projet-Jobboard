from flask import Flask, request, jsonify, Blueprint
from ConnectDb import ConnectDb
from Models.Sectors import Sectors


sectors = Blueprint('sectors', __name__)

@sectors.route('/api/sector', methods=['POST'])
def post_sector():
    try:
        req = request.get_json()
        sector = req['sector']
        query = Sectors().post_sector(sector)
        data = jsonify(query)
        data.status_code = 201
        return data
    except Exception as e:
        print(e)
    return 'Something goes wrong'


@sectors.route('/api/sector/<int:id_sector>', methods=['DELETE'])
def delete_sector_by_id(id_sector):
    try:
        query = Sectors().delete_by_id(id_sector)
        data = jsonify(query)
        data.status_codes = 200
        return "Object deleted successfully"
    except Exception as e:
        print(e)
    return 'Something goes wrong'


@sectors.route('/api/sectors', methods=['GET'])
def get_all_sectors():
    try:
        query = Sectors().get_all()
        data = jsonify(query)
        data.status_code = 200
        return data
    except Exception as e:
        print(e)
    return 'Something goes wrong'


@sectors.route('/api/sector/<int:id_sector>', methods=['GET'])
def get_sector_by_id(id_sector):
    try:
        query = Sectors().get_by_id(id_sector)
        data = jsonify(query)
        data.status_code = 200
        return data
    except Exception as e:
        print(e)
    return 'Something goes wrong'


@sectors.route('/api/sector/<int:id_sector>', methods=['PATCH'])
def patch_sector(id_sector):
    try:
        req = request.get_json()
        sector = req['sector']
        query = Sectors().patch_sector(sector, id_sector)
        data = jsonify(query)
        data.status_code = 201
        return data
    except Exception as e:
        print(e)
    return 'Something goes wrong'



