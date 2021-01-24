from flask import Flask
from .routes import bp_routes
from .extensions import api


def create_app():
    app = Flask(__name__)
    api.init_app(app)

    app.register_blueprint(bp_routes)

    return app
