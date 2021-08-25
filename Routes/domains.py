from flask import Flask, request, jsonify, Blueprint
from ConnectDb import ConnectDb
from Models.Domains import Domains

domains = Blueprint('domains', __name__)

@domains.route('/api/domain', methods=['POST'])
def post_domain():
    try:
        req = request.get_json()
        domain = req['domain']
        query = Domains().post_domain(domain)
        data = jsonify(query)
        data.status_code = 201
        return data
    except Exception as e:
        print(e)
    return 'Something goes wrong'


@domains.route('/api/domain/<int:id_domain>', methods=['DELETE'])
def delete_domain_by_id(id_domain):
    try:
        query = Domains().delete_by_id(id_domain)
        data = jsonify(query)
        data.status_codes = 200
        return "Object deleted successfully"
    except Exception as e:
        print(e)
    return 'Something goes wrong'


@domains.route('/api/domains', methods=['GET'])
def get_all_domains():
    try:
        query = Domains().get_all()
        data = jsonify(query)
        data.status_code = 200
        return data
    except Exception as e:
        print(e)
    return 'Something goes wrong'


@domains.route('/api/domain/<int:id_domain>', methods=['GET'])
def get_domain_by_id(id_domain):
    try:
        query = Domains().get_by_id(id_domain)
        data = jsonify(query)
        data.status_code = 200
        return data
    except Exception as e:
        return e


@domains.route('/api/domain/<int:id_domain>', methods=['PATCH'])
def patch_domain(id_domain):
    try:
        req = request.get_json()
        domain = req['domain']
        query = Domains().patch_domain(domain, id_domain)
        data = jsonify(query)
        data.status_code = 201
        return data
    except Exception as e:
        print(e)
    return 'Something goes wrong'

