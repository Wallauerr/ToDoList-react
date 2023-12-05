import { Header } from "./components/Header";

export function App() {
  return (
    <div>
      <Header />
      <div>
        <main>
          <form>
            <input
              className="w-[638px] h-14 p-4 bg-neutral-800 rounded-lg border border-stone-950 justify-start items-center inline-flex text-zinc-500 text-base font-normal"
              placeholder="Adicione uma nova tarefa" 
              type="text" 
            />
          </form>
        </main>
      </div>
    </div>
  )
}