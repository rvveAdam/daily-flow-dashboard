import type { Task } from '../../types/index'

interface TaskItemProps {
  task: Task
  onToggle: (id: string) => void
}

function TaskItem({ task, onToggle }: TaskItemProps) {
  return (
    <div>
        <input type="checkbox" checked={task.done} onChange={() => onToggle(task.id) }/>
        <span>{task.title}</span>
        <span> 🔥 {task.streak}</span>
    </div>
  )
}

export default TaskItem
