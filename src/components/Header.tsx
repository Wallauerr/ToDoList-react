import rocketLogo from '../assets/rocket.svg'
import todoLogo from '../assets/todo.svg'

export function Header() {
  return (
    <div className="h-48 w-full bg-stone-950 flex justify-center items-center gap-3">
      <img className="mt-3" src={rocketLogo} alt="Logotipo da aplicação" />
      <img src={todoLogo} alt="ToDo logo" />
    </div>
  )
}
