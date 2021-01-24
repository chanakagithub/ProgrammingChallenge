from flask import Flask
from flask_cors import CORS
from .routes import bp_routes
from .extensions import api


def create_app():
    app = Flask(__name__)
    
    cors = CORS(app, resource={r"/*": {"origin": "*"}})

    api.init_app(app)

    app.register_blueprint(bp_routes)

    return app
