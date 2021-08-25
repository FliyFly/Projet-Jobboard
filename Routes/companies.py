from flask import Flask, request, jsonify, Blueprint
from ConnectDb import ConnectDb
from Models.Companies import Companies


companies = Blueprint('companies', __name__)


@companies.route('/api/companies', methods=['GET'])
def get_all_companies():
    try:
        query = Companies().get_all()
        data = jsonify(query)
        data.status_code = 200
        return data
    except Exception as e:
        print(e)
    return 'Something goes wrong'


@companies.route('/api/company/<int:id_company>', methods=['GET'])
def get_company_by_id(id_company):
    try:
        query = Companies().get_by_id(id_company)
        data = jsonify(query)
        data.status_code = 200
        return data
    except Exception as e:
        return e


@companies.route('/api/companie', methods=['POST'])
def post_companie():
    try:
        req = request.get_json()
        print(req)
        nameCompanie = req['companieName']
        about = req['about']
        linkedin_link = req['linkedin_link']
        twitter_link = req['twitter_link']
        website_link = req['website_link']
        id_domain = req.get('id_domain', None)
        query = Companies().post_companie(nameCompanie, about, linkedin_link, twitter_link, website_link, id_domain)
        data = jsonify(query)
        data.status_code = 201
        return data
    except Exception as e:
        print(e)
    return 'Something goes wrong'


@companies.route('/api/company/<int:id_company>', methods=['PATCH'])
def patch_users(id_company):
    try:
        req = request.get_json()
        print(req)
        nameCompanie = req['companieName']
        about = req['about']
        linkedin_link = req['linkedin_link']
        twitter_link = req['twitter_link']
        website_link = req['website_link']
        id_domain = req.get('id_domain', None)
        query = Companies().patch_company(nameCompanie, about, linkedin_link, twitter_link, website_link, id_domain, id_company)
        data = jsonify(query)
        data.status_code = 201
        return data
    except Exception as e:
        print(e)
    return 'Something goes wrong'


@companies.route('/api/companie/<int:id_companies>', methods=['DELETE'])
def delete_advertisement_by_id(id_companies):
    try:
        query = Companies().delete_by_id(id_companies)
        data = jsonify(query)
        data.status_codes = 200
        return "Object deleted successfully"
    except Exception as e:
        print(e)
    return 'Something goes wrong'

