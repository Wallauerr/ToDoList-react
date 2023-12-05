import rocketLogo from '../assets/rocket.svg'

export function Header() {
  return (
    <div className="h-48 w-full bg-stone-950 flex justify-center items-center">
      <img
        className='h-9 mt-3 mr-3' 
        src={rocketLogo} 
        alt="Logotipo da aplicação" 
      />
      <span className="text-blue-400 text-4xl font-black">to</span>
      <span className="text-indigo-500 text-4xl font-black">do</span>
    </div>
  )
}