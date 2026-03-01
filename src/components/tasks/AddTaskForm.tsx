import { useState } from 'react'
import type { RepeatType, Task } from '../../types/index'

interface AddTaskFormProps {
  onAddTask: (task: Task) => void
}

function AddTaskForm({ onAddTask }: AddTaskFormProps) {
  const [title, setTitle] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if(title.trim() === ''){
        return
    }

    const task = {
        id: Date.now().toString(),
        title: title,
        done: false,
        repeatType: 'none' as RepeatType,
        repeatDays: [],
        streak: 0
    }

    onAddTask(task)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <button type="submit">Dodaj</button>
    </form>
  )
}

export default AddTaskForm
