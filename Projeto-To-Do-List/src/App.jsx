import './App.css'
import { useState } from 'react'
import CardAdicionar from './Components/CardAdicionar'

function App() {

  const [taskList, setTaskList] = useState([
    {id: 1, task: "Tarefa 1", finished: false}
  ]) 

  return (
    <>
    <CardAdicionar />
    </>
  )
}

export default App
