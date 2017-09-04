var modalWindow = document.getElementById('modalWindow'),
	openButton = document.getElementById('openButton'),
	closeButton = document.getElementById('closeButton'),
	form = document.getElementById('pizza_calculator'),
	calculateButton = document.getElementById('calculateButton'),
	calcWrapper = document.getElementById('calc_wrapper'),
	submitResult = document.getElementById('submitResult');

var pizza = {
size: 'medium',
cheese: true,
ingredients: [false, 'tomatoes', false, false],
delivery: false,
total: 12
};

var selectedIngredients = pizza.ingredients[1],
	selectedCheese = 'yes', 
	selectedDelivery = 'no';


openButton.addEventListener('click', showModal);
closeButton.addEventListener('click', closeModal);
//calculateButton.addEventListener('click', showModal);


function showModal() {
	modalWindow.style.display = 'block';

}

function closeModal() {
	modalWindow.style.display = 'none';
  submitResult.innerHTML = " ";
}



//Создать просмотр сообщения текущих значений и суммы.

calcWrapper.innerHTML = "<h3>" + "Your Pizza:" + "</h3>" + "<p><strong>" + "Size: </strong>" +  pizza.size + "</p>" + "<p><strong>" + "Additional cheese: </strong>" +  selectedCheese + "</p>" + "<p><strong>" + "Selected ingredients: </strong>" + selectedIngredients + "</p>" + "<p><strong>" + "Delivery: </strong>" +  selectedDelivery + "</p>" + "<hr/>" + "<h3>" + "Total Price: " + pizza.total + " rub" + "</h3>";


form.onchange = function() {

var totalPrice = 0;	

//размер пиццы

for (var i = 0; i < 3; i++) {
		if (form.elements.size[i].checked) {
    	pizza.size = form.elements.size[i].value;
    	} 
    }

switch (pizza.size) {
  case 'small':
    totalPrice += 7;
    break;
  case 'medium':
    totalPrice += 9;
    break;
  case 'large':
    totalPrice += 11;
    break;
}    

//добавление сыра

for (var i = 0; i < 2; i++) {
		if (form.elements.cheese[i].checked) {
    	pizza.cheese = form.elements.cheese[i].value;
    	 }
    }

if (pizza.cheese == 'true') {
	totalPrice += 2;
	selectedCheese = 'yes';
		} else {
				selectedCheese = 'no';
			}


//выбор дополнительных ингредиентов

selectedIngredients = '';

for (var i = 0; i < 4; i++) {
		if (form.elements.ingredients[i].checked) {
    	pizza.ingredients[i] = form.elements.ingredients[i].value;
    	selectedIngredients = selectedIngredients + pizza.ingredients[i] + ', ';
    	switch (i) {
 			case 0:
    		totalPrice += 1;
   			break;
  			case 1:
    		totalPrice += 1;
   			break;
  			case 2:
    		totalPrice += 2;
    		break;
  			case 3:
    		totalPrice += 3;
    		break;
}  
    	} else {
    	    	pizza.ingredients[i] = false;
    		}
	}
selectedIngredients = selectedIngredients.slice(0,-2); //Удаление последней запятой и пробела

//доставка

pizza.delivery = form.elements.delivery.checked;
if (pizza.delivery) {
	totalPrice += 5;
	selectedDelivery = 'yes';
} else {
		selectedDelivery = 'no';
	}

// Вывод суммы
pizza.total = totalPrice;

calcWrapper.innerHTML = "<h3>" + "Your Pizza:" + "</h3>" + "<p><strong>" + "Size: </strong>" +  pizza.size + "</p>" + "<p><strong>" + "Additional cheese: </strong>" +  selectedCheese + "</p>" + "<p><strong>" + "Selected ingredients: </strong>" + selectedIngredients + "</p>" + "<p><strong>" + "Delivery: </strong>" +  selectedDelivery + "</p>" + "<hr/>" + "<h3>" + "Total Price: " + pizza.total + " rub" + "</h3>";


return pizza.total; 
};

form.onsubmit = function(event) {
  localStorage.setItem('pizza_size', pizza.size);
  localStorage.setItem('pizza_cheese', pizza.cheese);
  localStorage.setItem('pizza_ingredients', pizza.ingredients);
  localStorage.setItem('pizza_delivery', pizza.delivery);
  localStorage.setItem('pizza_price', pizza.total);
  submitResult.innerHTML = "<p>Result save to the Local Storage</p>";
  event.preventDefault(); //чтобы страница не обновилась - отмена действия браузера по умолчанию
};