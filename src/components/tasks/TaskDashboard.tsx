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

  const taskRano = tasks.filter((task) => task.timeOfDay === 'morning')
  const taskDzien = tasks.filter((task) => task.timeOfDay === 'afternoon')
  const taskWieczor = tasks.filter((task) => task.timeOfDay === 'evening')

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
    <div className="card">
      <h2>Moje Zadania</h2>

      <h3>Rano</h3>
        {
          taskRano.map((task) =>{
            return <TaskItem key={task.id} task={task} onToggle={handleToggle} ></TaskItem>
          })
        }
      
      <h3>Dzień</h3>
        {
          taskDzien.map((task) =>{
            return <TaskItem key={task.id} task={task} onToggle={handleToggle} ></TaskItem>
          })
        }

      <h3>Wieczór</h3>
        {
          taskWieczor.map((task) =>{
            return <TaskItem key={task.id} task={task} onToggle={handleToggle} ></TaskItem>
          })
        }

        <AddTaskForm onAddTask={handleAddTask}></AddTaskForm>
    </div>
  )
}

export default TaskDashboard
