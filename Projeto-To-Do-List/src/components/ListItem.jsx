// Ex.5 Crie um componente para exibir as informações de cada tarefa. Ele deve ser chamado de ListItem. Ele deve receber como props a tarefa a ser exibida.
// Nele adicione um useState para guardar o estado da tarefa que está sendo recebida como props (O valor de finalizado).
// Em seguida crie uma função para finalizar a tarefa e um botão para chamar essa função.

import { useState } from "react";

function ListItem(props) {
    
    const [done, setDone] = useState(props.done)

        return (
                <div>
                    <h4>{props.textTask}</h4>
                    <input type="checkbox" checked={done} />
                    <button onClick={() => setDone(!done)}>Done!</button>
                    <button onClick={() => props.deleteTask(props.id)}>Delete</button>
                </div>
                )
    
}

export default ListItem
