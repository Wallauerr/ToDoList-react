import taskCheck from '../assets/Circle.svg'
import trash from '../assets/Trash.svg'

export function Tasks() {
  return (
    <div>
      <div className="w-[46rem] h-20 p-4 bg-neutral-800 rounded-lg shadow border border-zinc-800 justify-start items-center gap-3 inline-flex">
        <button>
          <img
            src={taskCheck}
            alt="Check circle icon"
            className="w-4 h-4 relative"
          />
        </button>
        <div>
          <p className="w-[40rem] text-zinc-100 text-sm font-normal font-Inter leading-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            eligendi in blanditiis voluptate ipsam perferendis.
          </p>
        </div>
        <button>
          <img src={trash} alt="Trash icon" className="w-4 h-4 relative" />
        </button>
      </div>
    </div>
  )
}
