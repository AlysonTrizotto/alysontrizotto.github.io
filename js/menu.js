const botaoMenu = document.querySelector('.menu_pontilhado')
const menu = document.querySelector('.menu_lateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu_lateral--ativo') 
})

