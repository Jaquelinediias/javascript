var menuItem = document.querySelectorAll('.item-menu')
// Guardou todos os elementosque possui uma class item-menu.

function select(){
    menuItem.forEach((item)=>
      item.classList.remove('ativo') // remove uma class de um item

    )
}
