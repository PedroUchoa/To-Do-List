'use strict'
let coisasAFazer = []


const adicionar = (tarefa, status, index) =>{
    const listItem = document.createElement("li")
    listItem.className = "list-item"
    listItem.innerHTML = `
        <input type="checkbox" name="clear" id="clear" class= "input-list" ${status} data-index=${index}>
        <p class="input-paragraph" data-index = "0">${tarefa}</p>
        <button class="list-button" id = "list-button" data-index=${index}>X</button >
    `
    const list = document.createElement("ul")
    list.id= "list"
    document.getElementById('list-principal').appendChild(list).appendChild(listItem)
}

const limparTarefas = () =>{
    const listPrincipal = document.getElementById('list-principal')
    while(listPrincipal.firstChild){
        listPrincipal.removeChild(listPrincipal.lastChild)
    }
}

const render = () =>{
    limparTarefas()
    coisasAFazer.forEach((element, index) => {
        adicionar(element.tarefa, element.status, index)
    });
}

const adicionarItem = (event) => { 
    const tecla = event.key
    if (tecla === "Enter") {
        if (event.target.value != ""){
        coisasAFazer.push({ tarefa: event.target.value, status: "" })
        render()
        event.target.value = ""
    }else{
        alert("Digite um valor")
    }
}
}

const removerItem = (index) =>{
    coisasAFazer.splice(index,1)
    render()
}


const clickItem = (event) =>{
    const element = event.target
    const index = element.dataset.index
    if (element.type === 'submit') {
        removerItem(index)
    }
}
document.getElementById('input').addEventListener('keypress', adicionarItem)
document.getElementById('button').addEventListener("click", ()=>{
    const input = document.getElementById('input')
    if (input.value != "") {
        coisasAFazer.push({ tarefa: input.value, status: "" })
        render()
        input.value = ""
    }else{
        alert("Digite um valor")
    }
     
})
document.getElementById("list-principal").addEventListener("click", clickItem)
render()