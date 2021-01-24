from .random import get_content, get_content_summary
from .extensions import api
from .config import Config
from flask import send_file, Blueprint
from flask_restx import Resource

bp_routes = Blueprint('bp_routes', __name__)

ns_report = api.namespace(
    'report', description='Random Object Generate operations')
ns_download = api.namespace('download', description='File download operations')

# base_uri = 'http://127.0.0.1:5000'
# file_path = '../files/random.txt'


@ns_report.route('/')
class Report(Resource):

    '''Shows a list of all todos, and lets you POST to add new tasks'''
    @ns_report.response(201, 'Random object file generated/stored successflly and return download link')
    def put(self):
        '''Generate four (4) types of printable random objects and store them in a single file'''
        content = get_content()

        with open(Config.file_path, 'w') as file:
            file.write(content)

        return {'link': Config.base_uri + '/download'}, 201

    @ns_report.response(200, 'Random object count summery successfuly')
    def get(self):
        '''Random object count summery'''
        with open(Config.file_path, "r") as file:
            return get_content_summary(file.read())


@ns_download.route('/')
class Download(Resource):
    @ns_report.response(200, 'Random object file')
    def get(self):
        '''Random object file download link'''
        return send_file('../'+Config.file_path, mimetype='.txt', cache_timeout=1, as_attachment=True)
