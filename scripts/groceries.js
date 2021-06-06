// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		LactoseIntol: true,
		AllergicNuts: true,
		both:true,
		price: 1.25
	},
	{
		name: "1Lb of oranges",
		LactoseIntol: true,
		AllergicNuts: true,
		both:true,
		price: 1.33
	},
	{
		name: "Trail Mix",
		LactoseIntol: true,
		AllergicNuts: false,
		both: false,
		price: 1.87
	},
	{
		name: "1L of Milk",
		LactoseIntol: false,
		AllergicNuts: true,
		both: false,
		price: 1.99
	},
	{
		name: "1Lb of Peanut Butter Pancake/General Batter",
		LactoseIntol: false,
		AllergicNuts: false,
		both: false,
		price: 2.10
	},
	{
		name: "1 Stick of Butter",
		LactoseIntol: false,
		AllergicNuts: true,
		both: false,
		price: 2.29
	},
	{
		name: "1Lb of Strawberries",
		LactoseIntol: true,
		AllergicNuts: true,
		both:true,
		price: 3.00
	},
	{
		name: "0.25Lb of blueberries",
		LactoseIntol: true,
		AllergicNuts: true,
		both:true,
		price: 3.99
	},
	{
		name: "1Lb of Almonds",
		LactoseIntol: true,
		AllergicNuts: false,
		both: false,
		price: 4.99
	},
	{
		name: "Coriander",
		LactoseIntol: true,
		AllergicNuts: true,
		both:true,
		price: 6.00
	},
	{
		name: "Cardamon",
		LactoseIntol: true,
		AllergicNuts: true,
		both:true,
		price: 5.00
	},
	{
		name: "Whole Chicken",
		LactoseIntol: true,
		AllergicNuts: true,
		both:true,
		price: 8.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "LactoseIntol") && (prods[i].LactoseIntol == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "AllergicNuts") && (prods[i].AllergicNuts == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "both") && (prods[i].both == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}