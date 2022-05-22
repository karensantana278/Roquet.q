import Modal from './modal.js';

const modal = Modal();

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')


//pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')
checkButtons.forEach( button => { 
    button.addEventListener('click', handleClick)
})


//quando botão delete for clicado abre a modal
const deleteButton = document.querySelectorAll('.actions a.delete');
deleteButton.forEach( button => { 
    button.addEventListener('click', (event) => handleClick(event, false))
    })

function handleClick(event, check = true){
    event.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir"

    modalTitle.innerText = `${text} esta pergunta`
    modalDescription.innerText = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerText = `Sim, ${text.toLowerCase()}`
    check? modalButton.classList.remove('red'):modalButton.classList.add('red')
    //abrir modal
    modal.open()
}