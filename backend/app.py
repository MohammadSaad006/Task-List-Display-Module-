from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

tasks = [
    {"id": 1, "task_name": "Complete project proposal", "status": "completed"},
    {"id": 2, "task_name": "Review code changes", "status": "pending"},
    {"id": 3, "task_name": "Update documentation", "status": "in progress"},
    {"id": 4, "task_name": "Fix bug in login module", "status": "completed"},
    {"id": 5, "task_name": "Prepare presentation slides", "status": "pending"}
]

@app.route('/api/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

if __name__ == '__main__':
    app.run(debug=True, port=5000)