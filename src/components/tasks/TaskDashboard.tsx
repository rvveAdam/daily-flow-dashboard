import { useState, useEffect } from 'react'
import type { Task } from '../../types/index'
import TaskItem from './TaskItem'
import AddTaskForm from './AddTaskForm'

function TaskDashboard() {
const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks')

    if (savedTasks != null){
        return JSON.parse(savedTasks)
    }else{
        return []
    }
})


  const handleToggle = (id: string) => {
    setTasks(tasks.map((task) => {
        if (task.id === id) {
        return { ...task, done: !task.done }
        }
        return task
    }))
  }

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const handleAddTask = (task: Task) => {
        setTasks([...tasks, task])
    }

  return (
    <div>
      <h2>Moje Zadania</h2>
        {
            tasks.map((task) => {
                return <TaskItem key={task.id} task={task} onToggle={handleToggle} ></TaskItem>
            })
        }
        <AddTaskForm onAddTask={handleAddTask}></AddTaskForm>
    </div>
  )
}

export default TaskDashboard
