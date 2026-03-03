import { useState } from 'react'
import type { RepeatType, TimeOfDay, Task } from '../../types/index'

interface AddTaskFormProps {
  onAddTask: (task: Task) => void
}

function AddTaskForm({ onAddTask }: AddTaskFormProps) {
  const [title, setTitle] = useState('')
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>('morning')

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
        streak: 0,
        timeOfDay: timeOfDay,
    }

    onAddTask(task)
    setTitle('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Nowe zadanie..." />
        <select value={timeOfDay} onChange={(e) => setTimeOfDay(e.target.value as TimeOfDay)}>
          <option value="morning">🌅 Rano</option>
          <option value="afternoon">☀️ Dzień</option>
          <option value="evening">🌙 Wieczór</option>
        </select>
        <button type="submit">Dodaj</button>
    </form>
  )
}

export default AddTaskForm
