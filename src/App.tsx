import { Form } from './components/Form'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

export function App() {
  return (
    <div>
      <Header />
      <div>
        <main className="flex flex-col justify-center items-center gap-16">
          <Form />
          <Tasks />
        </main>
      </div>
    </div>
  )
}
