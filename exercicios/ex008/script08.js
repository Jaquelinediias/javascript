var menuItem = document.querySelectorAll('.item-menu')
// Guardar todos os elementos que possui uma class item-menu.

function select(){
    menuItem.forEach((item)=>
      item.classList.remove('ativo') // remove uma class de um item.
    )
    this.classList.add('ativo')
}
menuItem.forEach((item) =>
   item.addEventListener('click', select)
)

// expandir o menu

var btnExp = document.getElementById('btn-expandir')
var navMenu = document.querySelector('.menu_lateral')

btnExp.addEventListener('click',function(){
  navMenu.classList.toggle('expandir')
})
