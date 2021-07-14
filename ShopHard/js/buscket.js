'use strict'
const buscketProductItems = document.querySelector('.buscket-items');


function addProductIntoiBuscket(productId) {
	isNewBuscketItem(productId)

}

function changeProductBasket(productId){
	let buscketProductItem = `
		<div class="buscket-item" data-productId="${products[productId].id}">
			<img src="img/${products[productId].image}" alt="bucket-man.png" class="buscket-item-item-image">
			<div class="buscket-item-discription">
				<h4 class="buscket-item-title">${products[productId].name}</h4>
				<div class="buscket-item-stars">
					<img src="img/star.png" alt="star" class="buscket-item-star">
					<img src="img/star.png" alt="star" class="buscket-item-star">
					<img src="img/star.png" alt="star" class="buscket-item-star">
					<img src="img/star.png" alt="star" class="buscket-item-star">
					<img src="img/star.png" alt="star" class="buscket-item-star">
				</div>
				<p class="buscket-item-amount"><span class="numOfItem">1</span> x $${products[productId].price}</p>
			</div>
			<a href="#" class="buscket-item-delet">
				<img src="img/close.png" alt="delet" class="buscket-item-delet-img">
			</a>
		</div>`;
	buscketProductItems.insertAdjacentHTML('afterbegin', buscketProductItem)

}

function isNewBuscketItem(productId){
	let id = buscketProductItems.querySelector(`[data-productid ='${productId}']`)
	if (!id) {
		changeProductBasket(productId);
		changeBuscketTotalPrice(productId);
	}else{
		increaseBuscketItem (productId);
		changeBuscketTotalPrice(productId);
	}
}

function increaseBuscketItem (productId) {
	const numOfItem = document.querySelector('.numOfItem');
	numOfItem.textContent++
}

function changeBuscketTotalPrice(productId){
	let buscketItems = buscketProductItems.querySelectorAll('.buscket-item');
	buscketItems.forEach((buscketItem)=>{
		let countItem = parseInt(buscketItem.querySelector('.numOfItem').textContent);
		countTotalPrice (buscketItem, countItem)
	})

}

function countTotalPrice (productId,buscketItem, countItem) {
	console.log(products);
}