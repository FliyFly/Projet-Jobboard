from flask import Flask, request, jsonify, Blueprint
from ConnectDb import ConnectDb
from Models.Emails import Emails

emails = Blueprint('emails', __name__)


@emails.route('/api/email', methods=['POST'])
def post_email():
    try:
        req = request.get_json()
        obj = req['object']
        content = req['content']
        resume = req['resume']
        letter = req['letter']
        query = Emails().post_email(obj, content, resume, letter)
        data = jsonify(query)
        data.status_code = 201
        return data
    except Exception as e:
        print(e)
    return 'Something goes wrong'


@emails.route('/api/email/<int:id_email>', methods=['DELETE'])
def delete_email_by_id(id_email):
    try:
        query = Emails().delete_by_id(id_email)
        data = jsonify(query)
        data.status_codes = 200
        return "Object deleted successfully"
    except Exception as e:
        print(e)
    return 'Something goes wrong'


@emails.route('/api/emails', methods=['GET'])
def get_all_emails():
    try:
        query = Emails().get_all()
        data = jsonify(query)
        data.status_code = 200
        return data
    except Exception as e:
        print(e)
    return 'Something goes wrong'


@emails.route('/api/email/<int:id_email>', methods=['GET'])
def get_email_by_id(id_email):
    try:
        query = Emails().get_by_id(id_email)
        data = jsonify(query)
        data.status_code = 200
        return data
    except Exception as e:
        print(e)
    return 'Something goes wrong'


@emails.route('/api/email/<int:id_email>', methods=['PATCH'])
def patch_email(id_email):
    try:
        req = request.get_json()
        obj = req['object']
        content = req['content']
        resume = req['resume']
        letter = req['letter']
        query = Emails().patch_email(obj, content, resume, letter, id_email)
        data = jsonify(query)
        data.status_code = 201
        return data
    except Exception as e:
        print(e)
    return 'Something goes wrong'

