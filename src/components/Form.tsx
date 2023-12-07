import { PlusCircle } from '@phosphor-icons/react'

export function Form() {
  return (
    <form className="flex justify-center items-center gap-2 -mt-7">
      <input
        className="w-[40rem] p-4 bg-neutral-800 rounded-lg border border-stone-950 justify-start items-center inline-flex text-zinc-500 text-base"
        placeholder="Adicione uma nova tarefa"
        type="text"
      />
      <button
        className="w-24 h-14 p-4 bg-blue-400/80 rounded-lg justify-center items-center gap-2 inline-flex text-zinc-100 text-sm font-bold"
        type="submit"
      >
        <p>Criar</p>
        <PlusCircle size={32} />
      </button>
    </form>
  )
}
