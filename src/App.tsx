import { TextInput } from './components/TextInput'
import './styles/global.css'

export function App() {
  return (
    <>
      <div className='max-w-lg bg-black'>
        <h1 className="font-bold text-2xl text-white">Hello</h1>
      
        <TextInput/>
      </div>

    </>
  )
}