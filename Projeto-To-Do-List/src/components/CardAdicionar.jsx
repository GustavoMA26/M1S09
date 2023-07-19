// Ex.2 Vamos criar um componente para criar uma tarefa. Ele deve ser chamado de CardAdicionar. Siga os passos do checklist abaixo para finalizar a tarefa.
// 1 - Crie um useState para guardar o texto da tarefa;
// 2 - Crie um input do tipo text que será usado para receber o texto da tarefa a ser criada;
// 3 - crie um botão para chamar a função de adicionar a tarefa;
// 4 - faça o botão chamar a função de adicionar tarefa
// Este componente deve receber como prop a função para criar a tarefa e adicionar a lista de tarefas.
import { useState } from "react";
import "./style.css"

function CardAdicionar(props) {

    const [task, setTask] = useState("")

    const handleAddTask = () => {
        props.addTask(task)
        setTask("")
    }

    return (
        <div>
            <h1>Task List</h1>
                <label htmlFor="task">Task: </label>
                <input 
                    type= "text" 
                    value= {task}
                    placeholder= "Write here your new task"
                    onChange= {(e) => setTask(e.target.value)} 
                />
                <div>
                <br></br>
                    <button class="btn-add" onClick={() => handleAddTask()}>Add New Task!</button>
                </div>
        </div>
    )

}

export default CardAdicionar