'use strict'

class ProductDTO{
	/**
	 * @param {number} id уникальный id товара
	 * @param {string} image название картинки товара с расширением
	 * @param {string} имя товара
	 * @param {number} цена товара
*/
	constructor(id, image, name, price){
	this.id = id;		
	this.image = image; 
	this.name = name;
	this.price = price;
	}
}