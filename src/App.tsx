import { Form } from './components/Form'
import { Header } from './components/Header'

export function App() {
  return (
    <div>
      <Header />
      <main className="flex flex-col justify-center items-center gap-16">
        <Form />
      </main>
    </div>
  )
}
