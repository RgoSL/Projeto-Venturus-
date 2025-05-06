import { useState } from 'react'
import './App.css'
import { VanillaTiltComponent } from './components/VanillaTilt/VanillaTilt' 
import { Banner, Footer , Comentarios, Vantagens} from './components'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
          <Banner />
          <Comentarios/>
          <Vantagens/>
          <Footer/>
    </>
  )
}

export { App };
