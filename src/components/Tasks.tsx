import clipBoardIcon from '../assets/Clipboard.svg'

export function Tasks() {
  return (
    <section>
      <div className="w-[46rem] justify-between items-center inline-flex">
        <div className="flex items-center justify-center gap-4">
          <p className="text-blue-400 text-sm font-bold font-Inter">
            Tarefas criadas
          </p>
          <span className="w-6 h-5 px-2 py-0.5 bg-neutral-800 rounded-full justify-center items-center inline-flex text-zinc-300 text-xs font-bold font-Inter">
            0
          </span>
        </div>

        <div className="flex items-center justify-center gap-4">
          <p className="text-indigo-400 text-sm font-bold font-Inter">
            Concluídas
          </p>
          <span className="w-6 h-5 px-2 py-0.5 bg-neutral-800 rounded-full justify-center items-center inline-flex text-zinc-300 text-xs font-bold font-Inter">
            0
          </span>
        </div>
      </div>

      <div className="w-[46rem] mt-6 px-6 py-16 rounded-lg border-t border-zinc-700/95 flex flex-col justify-center items-center">
        <img className="mb-4" src={clipBoardIcon} alt="Icone clip board" />
        <p className="text-zinc-500 text-base font-bold font-Inter leading-snug">
          Você ainda não tem tarefas cadastradas
        </p>
        <p className="text-zinc-500 text-base font-normal font-Inter leading-snug">
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </section>
  )
}
