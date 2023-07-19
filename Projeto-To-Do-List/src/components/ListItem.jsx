// Ex.5 Crie um componente para exibir as informações de cada tarefa. Ele deve ser chamado de ListItem. Ele deve receber como props a tarefa a ser exibida.
// Nele adicione um useState para guardar o estado da tarefa que está sendo recebida como props (O valor de finalizado).
// Em seguida crie uma função para finalizar a tarefa e um botão para chamar essa função.

import { useState } from "react";

function ListItem(props) {
    
    const [done, setDone] = useState(props.done)

        return (
                <div class="container">
                    <input type="checkbox" checked={done} />
                    <h4 style= {done && {textDecoration:"line-through"}}>{props.textTask}</h4>
                    <button class="btn btn-done" onClick={() => setDone(!done)}>DONE!</button>
                    <button class="btn btn-del" onClick={() => props.deleteTask(props.id)}>DELETE!</button>
                </div>
                )
    
}

export default ListItem
