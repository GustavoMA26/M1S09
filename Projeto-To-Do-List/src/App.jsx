import './App.css'
import { useState } from 'react'
import CardAdicionar from './Components/CardAdicionar'
import ListItem from './components/ListItem'

function App() {

  const [taskList, setTaskList] = useState([]) 

  const addTask = (text) => {
    if (text == "") {
      alert("Did you insert a new task?!")
      return
    }

    const newTask = {id: taskList.length +1, textTask: text, finished: false}

    setTaskList([...taskList, newTask])

  }
  const deleteTask = (id) => {
    const newList = taskList.filter (item => item.id != id)

    setTaskList(newList)
  }

  return (
    <>
    <CardAdicionar addTask={addTask}/>
    <div>{taskList.map(task => (
      <ListItem key={task.id} id={task.id} deleteTask={deleteTask} textTask={task.textTask} done={task.done}/>))}</div>
    </>
  )
}

export default App
