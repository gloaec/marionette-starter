import json
from flask import make_response, request

def make_json_response(body, status_code=200):
    if request.method != 'GET':
        try:
            commit_database()
        except Exception, err:
            # FIXME traceback is bad in production mode
            import traceback
            traceback.print_exc()
            rollback_database()
            return make_error_response(str(err), 500)
    resp = make_response(json.dumps(body))
    resp.status_code = status_code
    resp.mimetype = 'application/json'
    return resp

def make_error_response(msg, status_code=400):
    resp = make_response(msg)
    resp.status_code = status_code
    resp.mimetype = 'text/plain'
    return resp

def bad_id_response():
    return make_error_response("Invalid ID", 404)

