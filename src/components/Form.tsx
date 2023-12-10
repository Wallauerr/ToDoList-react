// import clipBoardIcon from '../assets/Clipboard.svg'
import { PlusCircle } from '@phosphor-icons/react'

import { ChangeEvent, useState } from 'react'
import { Tasks } from './Tasks'

export function Form() {
  const [task, setTask] = useState(['Teste!'])

  const [newTask, setNewTask] = useState('')

  function handleCreateNewTask() {
    event?.preventDefault()

    setTask([...task, newTask])
    setNewTask('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }

  function deleteTask(taskToDelete: string) {
    const taskWithOutDeletedOne = task.filter((task) => {
      return task !== taskToDelete
    })

    setTask(taskWithOutDeletedOne)
  }

  return (
    <section className="w-[46rem] flex flex-col gap-16">
      <form
        onSubmit={handleCreateNewTask}
        className="flex justify-center items-center gap-2 -mt-7"
      >
        <input
          className="w-[40rem] p-4 bg-neutral-800 rounded-lg border border-stone-950 justify-start items-center inline-flex text-zinc-100 text-base focus:outline outline-1 outline-blue-400"
          name="task"
          placeholder="Adicione uma nova tarefa"
          type="text"
          value={newTask}
          onChange={handleNewTaskChange}
          required
        />
        <button
          className="w-24 h-14 p-4 bg-blue-400/80 rounded-lg justify-center items-center gap-2 inline-flex text-zinc-100 text-sm font-bold focus:outline outline-1 outline-blue-400 hover:bg-blue-400 transition duration-200"
          type="submit"
          title="Criar"
        >
          <p>Criar</p>
          <PlusCircle size={32} />
        </button>
      </form>

      <div>
        <header className="w-full justify-between items-end inline-flex mb-6">
          <div className="flex items-center justify-center gap-4">
            <p className="text-blue-400 text-sm font-bold font-Inter">
              Tarefas criadas
            </p>

            <span className="w-auto px-2 py-0.5 bg-neutral-800 rounded-full justify-center items-center inline-flex text-zinc-300 text-xs font-bold font-Inter">
              5
            </span>
          </div>

          <div className="flex items-center justify-center gap-4">
            <p className="text-indigo-400 text-sm font-bold font-Inter">
              Concluídas
            </p>

            <span className="w-auto px-2 py-0.5 bg-zinc-800 rounded-full justify-center items-center flex text-zinc-300 text-xs font-bold font-Inter">
              2 de 10
            </span>
          </div>
        </header>
        <div className="flex flex-col space-y-3">
          {task.map((task) => {
            return <Tasks key={task} content={task} onDeleteTask={deleteTask} />
          })}
        </div>

        {/* <div className="w-full mt-6 px-6 py-16 rounded-lg border-t border-zinc-700/95 flex flex-col justify-center items-center">
          <img className="mb-4" src={clipBoardIcon} alt="Icone clip board" />

          <p className="text-zinc-500 text-base font-bold font-Inter leading-snug">
            Você ainda não tem tarefas cadastradas
          </p>

          <p className="text-zinc-500 text-base font-normal font-Inter leading-snug">
            Crie tarefas e organize seus itens a fazer
          </p>
        </div> */}
      </div>
    </section>
  )
}
