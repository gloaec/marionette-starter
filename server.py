from flask import Flask, url_for, json, jsonify, g, request, Response, render_template, make_response, send_from_directory
from util import make_json_response, make_error_response, bad_id_response

app = Flask(__name__)

@app.errorhandler(404)
def not_found(error=None):
    message = {
        'status': 404,
        'message': 'Not Found: ' + request.url
    }
    resp = jsonify(message)
    resp.status_code = 404
    return resp

'''
INDEX ---------------------------------------------------------------
'''
@app.route('/')
def api_root():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True, port=5000, host='0.0.0.0')
