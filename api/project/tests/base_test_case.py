import unittest
from modules.users.models import Users 
from config import TestingConfig
from __init__ import create_app
from project.extensions import db


class BaseTestCase(unittest.TestCase):
    config = TestingConfig

    def setUp(self):
        self.app = create_app(self.config)  
        self.app_context = self.app.app_context()
        self.app_context.push()
        db.create_all()
        user = Users(first_name='test', last_name='user', password='foo', email='test@example.com')
        db.session.add(user)
        db.session.commit()
        self.client = self.app.test_client()

    def tearDown(self):
        db.session.close()
        db.drop_all()
        self.app_context.pop()
