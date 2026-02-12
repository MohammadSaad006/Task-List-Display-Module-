# Remote Task Tracker

A full-stack web application for tracking and managing employee tasks with a Python Flask backend and React frontend.

## 🚀 Features

- **Task Management**: View assigned tasks with their current status
- **Real-time Data**: Fetch tasks from backend API
- **Visual Status Indicators**: Completed tasks highlighted in green
- **Responsive Design**: Works on desktop and mobile devices
- **CORS Enabled**: Secure cross-origin resource sharing

## 🏗️ Architecture

```
Project Structure
├── backend/
│   ├── app.py              # Flask application with API endpoints
│   └── requirements.txt    # Python dependencies
└── frontend/
    └── task-tracker/
        ├── src/
        │   ├── TaskList.js # Main React component
        │   └── App.js      # Application entry point
        └── package.json    # Node.js dependencies
```

## 🛠️ Tech Stack

### Backend
- **Python 3.12+**
- **Flask 2.3.3** - Web framework
- **Flask-CORS 4.0.0** - Cross-origin resource sharing

### Frontend
- **React 18+** - JavaScript library for UI
- **Create React App** - Build tool
- **Fetch API** - HTTP client for data fetching

## 📋 Prerequisites

- Python 3.12 or higher
- Node.js 16 or higher
- npm (comes with Node.js)

## 🔧 Installation

### 1. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install Python dependencies
pip install -r requirements.txt

# Start the Flask server
python app.py
```

The backend server will start on `http://localhost:5000`

### 2. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend/task-tracker

# Install Node.js dependencies
npm install

# Start the React development server
npm start
```

The frontend server will start on `http://localhost:3000`

## 🎯 API Endpoints

### GET /api/tasks

Returns all tasks in JSON format.

**Response:**
```json
[
  {
    "id": 1,
    "task_name": "Complete project proposal",
    "status": "completed"
  },
  {
    "id": 2,
    "task_name": "Review code changes",
    "status": "pending"
  }
]
```

**Status Values:**
- `completed` - Task finished successfully
- `pending` - Task not started yet
- `in progress` - Task currently being worked on

## 📊 Data Structure

### Task Object
```javascript
{
  id: Number,        // Unique identifier
  task_name: String, // Task description
  status: String     // Task status (completed/pending/in progress)
}
```

## 🎨 Component Structure

### TaskList Component
**Location:** `frontend/task-tracker/src/TaskList.js`

**Props:** None

**State:**
- `tasks` - Array of task objects
- `loading` - Boolean for loading state

**Features:**
- Fetches data from `/api/tasks`
- Displays loading indicator while fetching
- Renders tasks in list format
- Applies green background to completed tasks
- Error handling for API failures

## 🌐 Development Workflow

1. **Start Backend First**: Run Flask server on port 5000
2. **Start Frontend**: Run React development server on port 3000
3. **View Application**: Open `http://localhost:3000` in browser
4. **Development**: Changes auto-refresh with hot reloading

## 🔒 Security Considerations

- CORS enabled for localhost development
- No authentication required (development mode)
- Production deployment requires proper security measures

## 🐛 Troubleshooting

### Common Issues

**Backend not starting:**
- Ensure Python 3.12+ is installed
- Check if port 5000 is available
- Verify all dependencies are installed

**Frontend not loading:**
- Ensure Node.js 16+ is installed
- Check if port 3000 is available
- Run `npm install` if node_modules missing

**API connection failed:**
- Verify backend server is running
- Check if CORS is properly configured
- Ensure both servers are on localhost

### Debug Commands

```bash
# Test backend API directly
curl http://localhost:5000/api/tasks

# Check backend server status
python backend/app.py

# Check frontend build
npm run build
```

## 📈 Future Enhancements

- [ ] User authentication and authorization
- [ ] Task creation, editing, and deletion
- [ ] Task filtering and sorting
- [ ] Due dates and reminders
- [ ] User assignment to tasks
- [ ] Task categories and priorities
- [ ] Database integration (SQLite/PostgreSQL)
- [ ] Real-time updates with WebSockets
- [ ] Mobile app version
- [ ] Admin dashboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for educational purposes. Feel free to use and modify for learning.

## 📞 Support

For issues and questions:
- Check the Troubleshooting section
- Review the project documentation
- Open an issue on the repository

---

**Happy Coding!** 🚀
