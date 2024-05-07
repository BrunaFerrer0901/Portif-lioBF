var ItemMenu = document.querySelectorAll('.itens-menu')

function selectLink(){
	ItemMenu.forEach ((item)=>
	item.classList.remove('ativo')

	)
   this.classList.add('ativo')
}

ItemMenu.forEach((item)=>
	item.addEventListener('click', selectLink)

	)

//função expandir menu

var btnExpandir = document.querySelector('#btnExpandir')
var MenuLateral = document.querySelector('.menu-Lat')    

btnExpandir.addEventListener('click', function(){
	MenuLateral.classList.toggle('expandir')

})