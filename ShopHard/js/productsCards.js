'use strict'

const feturedItems = document.querySelector('.fetured-items');
const basket = document.querySelector('.bucket-img');
const totalPrice = document.querySelector('.price');
const items = document.querySelectorAll('.fetured-item'); 


function getProductMarkup(product){
	return`
				<div class="fetured-item">
					<a href="#" class="fetured-item__link">
						<img src="img/${product.image}" alt="${product.name}" class="item-image">
						<div class="fetured-item__link-discription">
							<h4 class="item-title">${product.name}</h4>
							<p class="item-prise">$${product.price}</p>
						</div>
					</a>
					<div class="fetured-item__box">
						<a href="#" data-productId="${product.id}" class="fetured-item__btn">
							<img src="img/bucket.svg" alt="bucket">
							<p class="fetured-item__btn-text">Add to Cart</p>
						</a>
					</div>	
				</div>
			`
}

function insertProductIntoPage (products, feturedItems) {
	let productsMarkup = '';
	for(let product of products){
		productsMarkup += getProductMarkup(product);
	}
	feturedItems.insertAdjacentHTML('afterbegin', productsMarkup)
}



function addEventListenerForAddButtons(){
	const addButtons = document.querySelectorAll('.fetured-item__btn');
	addButtons.forEach((addButton) => {
		addButton.addEventListener('click', addElemeneIntoBuscet);

	})
}


function addElemeneIntoBuscet(event){
	event.preventDefault();
	const idAddButton = event.currentTarget.getAttribute('data-productId');
	addProductIntoiBuscket(idAddButton);
}


insertProductIntoPage(products, feturedItems)
addEventListenerForAddButtons()