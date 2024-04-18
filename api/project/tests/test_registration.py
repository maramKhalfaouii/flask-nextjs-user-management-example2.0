from .base_test_case import BaseTestCase

class RegistrationTest(BaseTestCase):
    def test_create_user(self):
        rv = self.client.post('/api/v1/registrations', json={
                'firstName': 'userFirstName',
                'lastName': 'userLastName',
                'email': 'user@example.com',
                'password': 'testtest'
        })
        assert rv.status_code == 201
        #userId = rv.json['id']
        rv = self.client.post('/api/v1/registrations' , json={
                'firstName': 'userFirstName',
                'lastName': 'userLastName',
                'email': 'user@example.com',
                'password': 'testtest'
        }) 
        assert rv.status_code == 400
        #add the test of get by id once created 
        #add a control on the fields 
        

