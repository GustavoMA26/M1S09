// Vamos criar um componente para criar uma tarefa. Ele deve ser chamado de CardAdicionar. Siga os passos do checklist abaixo para finalizar a tarefa.

// 1 - Crie um useState para guardar o texto da tarefa;
// 2 - Crie um input do tipo text que será usado para receber o texto da tarefa a ser criada;
// 3 - crie um botão para chamar a função de adicionar a tarefa;
// 4 - faça o botão chamar a função de adicionar tarefa
// Este componente deve receber como prop a função para criar a tarefa e adicionar a lista de tarefas.
import { useState } from "react";

function CardAdicionar() {

    const [task, setTask] = useState("")

    return (
        <div>
            <h1>Cadastro de Tarefa</h1>
            <form>
                <label htmlFor="task">Tarefa:</label>
                <input 
                    type= "text" 
                    value= {task}
                    placeholder= "Digite aqui a tarefa"
                    onChange= {(e) => setTask(e.target.value)} 
                />
                <div>
                    <button onClick={() => {}} type="submit" value="cadastrar">Adicionar</button>
                </div>
            </form>
        </div>
    )

}

export default CardAdicionar