import { useState } from 'react'
import './App.css'
import Buttons from './assets/components/buttons';
import Card from './assets/components/card';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Buttons />
      <Card />
    </>

  )
}

export default App
