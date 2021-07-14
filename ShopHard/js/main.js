'use strict'


// const basket = document.querySelector('.bucket-img');
// const bascketItems = document.querySelector('.buscket-items');
// const totalPrice = document.querySelector('.price');
// const addButtons = document.querySelectorAll('.fetured-item__box');
// const items = document.querySelectorAll('.fetured-item'); 































/*

Доюавление элементов прямиком со страницы, но понял, что это бессмысленно, поотму решил переделать и сделать

// Добавление элементов в корзину
addButtons.forEach((addButton) => {
	addButton.addEventListener('click', addEl);

})

//Создание элемента

function addEl(event) {
	event.preventDefault();
	//Добавление элементов в корзину
	const parent = this.parentElement;
	const parentImage = parent.querySelector('.item-image').getAttribute('src');
	const parentTitle = parent.querySelector('.item-title').textContent;
	const parentPrice = parent.querySelector('.item-prise').textContent;

	//Колличесутво добавленных элементов
	// let amountElements = 0;
	// amountElements++;
	// console.log(amountElements);


	
	bascketItems.insertAdjacentHTML('beforeend', `
		<div class="buscket-item">
			<img src="${parentImage}" alt="bucket-man.png" class="buscket-item-item-image">
			<div class="buscket-item-discription">
				<h4 class="buscket-item-title">${parentTitle}</h4>
				<div class="buscket-item-stars">
					<img src="img/star.png" alt="star" class="buscket-item-star">
					<img src="img/star.png" alt="star" class="buscket-item-star">
					<img src="img/star.png" alt="star" class="buscket-item-star">
					<img src="img/star.png" alt="star" class="buscket-item-star">
					<img src="img/star.png" alt="star" class="buscket-item-star">
				</div>
				<p class="buscket-item-amount">1 x ${parentPrice}</p>
			</div>
			<a href="#" class="buscket-item-delet">
				<img src="img/close.png" alt="delet" class="buscket-item-delet-img">
			</a>
		</div>`)
}
*/