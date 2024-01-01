import { CheckCircle, Circle, Trash } from '@phosphor-icons/react'
import { useState } from 'react'

interface TaskProps {
  content: string
  onDeleteTask: (tasks: string) => void
  onCompleteTask: () => void
}

export function Tasks({ content, onDeleteTask, onCompleteTask }: TaskProps) {
  const [isCompleted, setIsCompleted] = useState(true)

  // const [taskCompleted, setTaskCompleted] = useState(0)

  function handleDeleteTask() {
    onDeleteTask(content)
  }

  function handleCompleteTask() {
    setIsCompleted(!isCompleted)
    onCompleteTask()

    // console.log(isCompleted)
    // setTaskCompleted(taskCompleted + (isCompleted ? -1 : 1))
    // console.log(taskCompleted)
  }

  return (
    <div>
      <div className="w-[46rem] h-20 p-4 bg-neutral-800 rounded-lg shadow border border-zinc-800 justify-start items-center gap-3 inline-flex">
        <button
          className={`rounded-full items-center ${
            isCompleted
              ? 'text-blue-400 hover:bg-blue-400/10'
              : 'text-indigo-400 outline-indigo-400 hover:bg-indigo-400/10'
          }`}
          title="Marcar a task"
          onClick={handleCompleteTask}
        >
          {isCompleted ? <Circle size={18} /> : <CheckCircle size={18} />}
        </button>
        <div>
          <p
            className={`w-[40rem] font-Inter text-sm font-normal leading-tight ${
              isCompleted ? 'text-zinc-100' : ' text-zinc-500  line-through'
            }`}
          >
            {content}
          </p>
        </div>
        <button
          className="rounded text-zinc-300 hover:text-red-400 hover:bg-zinc-500/40 transition duration-200"
          title="Deletar"
          onClick={handleDeleteTask}
        >
          <Trash />
        </button>
      </div>
    </div>
  )
}
