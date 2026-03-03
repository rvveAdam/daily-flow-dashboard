import type { Task } from '../../types/index'

interface TaskItemProps {
  task: Task
  onToggle: (id: string) => void
}

function TaskItem({ task, onToggle }: TaskItemProps) {
  return (
    <div className="task-list">
        <input className="task-list__checkbox" type="checkbox" checked={task.done} onChange={() => onToggle(task.id) }/>
        <span className="task-list__title">{task.title}</span>
        <span className="task-list__streak"> 🔥 {task.streak}</span>
    </div>
  )
}
export default TaskItem
