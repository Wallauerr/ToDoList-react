import { Trash } from '@phosphor-icons/react'
import taskCheck from '../assets/Circle.svg'

export interface TaskProps {
  content: string
  onDeleteTask: (tasks: string) => void
  isCompleted: boolean
}

export function Tasks({ content, onDeleteTask }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(content)
  }

  return (
    <div>
      <div className="w-[46rem] h-20 p-4 bg-neutral-800 rounded-lg shadow border border-zinc-800 justify-start items-center gap-3 inline-flex">
        <button
          className="rounded-full focus:outline outline-1 outline-blue-400"
          title="Marcar como finalizado"
        >
          <img
            src={taskCheck}
            alt="Check circle icon"
            className="w-4 h-4 relative"
          />
        </button>
        <div>
          <p className="w-[40rem] text-zinc-100 text-sm font-normal font-Inter leading-tight">
            {content}
          </p>
        </div>
        <button
          className="rounded text-zinc-300 focus:outline focus:outline-1 focus:outline-red-400 hover:text-red-400 transition duration-200"
          title="Deletar"
          onClick={handleDeleteTask}
        >
          <Trash />
        </button>
      </div>
    </div>
  )
}
