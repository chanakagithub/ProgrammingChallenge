from flask_restx import Api

api = Api(version='1.0', prefix='/api/v1/', title='Random Object Generator API',
    description='This is a simple Flask (Python) API. Generate random .txt file with 2MB (2,097,152bytes) in size. Calculate random object count category wise.',
)