import React, { useState, useEffect } from 'react'

function TaskList() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:5000/api/tasks')
      .then(response => response.json())
      .then(data => {
        setTasks(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching tasks:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div>Loading tasks...</div>
  }

  return (
    <div>
      <h1>Task List</h1>
      <div>
        {tasks.map(task => (
          <div 
            key={task.id}
            style={{
              padding: '10px',
              margin: '5px 0',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: task.status === 'completed' ? 'lightgreen' : 'white'
            }}
          >
            <h3>{task.task_name}</h3>
            <p>Status: {task.status}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskList