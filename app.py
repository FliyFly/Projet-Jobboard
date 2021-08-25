from flask import Flask, session, make_response
from flask_restful import Api
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from Routes.advertisements import advertisements
from Routes.sectors import sectors
from Routes.wages import wages
from Routes.companies import companies
from Routes.applications import applications
from Routes.emails import emails
from Routes.domains import domains
from Routes.users import users
from Routes.roles import roles


app = Flask(__name__)
app.secret_key = "$2b$10$hMc9cGtxUb8VVqbvPW6XjOg3Z/BdHAVfQ4O8AQXmaqzhoYuhW.9zW"
bcrypt = Bcrypt(app)
CORS(app)
api = Api(app)
app.register_blueprint(advertisements)
app.register_blueprint(sectors)
app.register_blueprint(wages)
app.register_blueprint(companies)
app.register_blueprint(applications)
app.register_blueprint(emails)
app.register_blueprint(domains)
app.register_blueprint(users)
app.register_blueprint(roles)


if __name__ == '__main__':
    app.run(port=8080, debug=True)
