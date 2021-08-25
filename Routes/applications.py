from flask import Flask, request, jsonify, Blueprint
from ConnectDb import ConnectDb
from Models.Applications import Applications


applications = Blueprint('applications', __name__)


@applications.route('/api/application', methods=['POST'])
def post_application():
    try:
        req = request.get_json()
        id_user = req.get('id_user', None)
        id_advertisement = req['id_advertisement']
        id_email = req['id_email']
        query = Applications().post_application(id_user, id_advertisement, id_email)
        data = jsonify(query)
        data.status_code = 201
        return data
    except Exception as e:
        print(e)
    return 'Something goes wrong'

