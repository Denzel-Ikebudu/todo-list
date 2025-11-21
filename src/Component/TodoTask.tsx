import { FC } from 'react'
import { ITask } from '../interfaces'

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void
}
const TodoTask: FC<Props> = ({ task, completeTask }) => {
  return (
    <div className='task'>
        <div className="content">
            <span>{task.taskName}</span>
            <span>{String(task.deadline)}</span>
        </div>
        <button onClick={()=> {
            completeTask(task.taskName)
            }
            }>
            X
        </button>
       
    </div>
  )
}

export default TodoTask