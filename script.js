let productList = [];
let productContainer = document.getElementById('productContainer');


  // Get the input value
let inputName = document.getElementById('inputName');
let inputDescription = document.getElementById('inputDescription');
let inputPrice = document.getElementById('inputPrice');
let checkBtn = document.getElementById('checkStock');
let addButton = document.getElementById("addProduct");


// Add Product Function

addButton.addEventListener("click", function () {
  if(inputName.value === "" || inputDescription.value === "" ||  inputPrice.value === "" ) {
    alert("Please Complete All Fields");
  }
  else {
    productList.push({inputName: `${inputName.value}`, inputDescription : `${inputDescription.value}` ,inputPrice : +inputPrice.value})
  }

  console.log(productList);
  
   //Create products list card
let li = document.createElement('li');
li.classList.add('list-group-item', 'bg-primary');
productContainer.appendChild(li);

let card = document.createElement('div');
card.classList.add('card', 'text-dark', 'bg-warning', 'mb-3');   
li.appendChild(card);

let cardBody = document.createElement('div');
cardBody.classList.add('card-body', 'd-grid', 'gap-2', 'col-9', 'mx-auto');       
card.appendChild(cardBody);

let cardTitle = document.createElement('h5');
cardTitle.classList.add('card-title');       
cardBody.appendChild(cardTitle);

let cardText = document.createElement('p');
cardText.classList.add('card-text');       
cardBody.appendChild(cardText);

let price = document.createElement('h5');
price.classList.add('card-title');       
cardBody.appendChild(price);

let btnDiv = document.createElement('div');
btnDiv.classList.add('d-grid', 'gap-2', 'col-6', 'mx-auto');      
cardBody.appendChild(btnDiv);

let btnRemove = document.createElement('button');
btnRemove.classList.add('btn', 'btn-danger');    
btnRemove.setAttribute("type", "button");   
btnRemove.innerHTML = "Remove Product"; 
btnDiv.appendChild(btnRemove);

// Remove Product Function
btnRemove.addEventListener("click", function () {
  li.remove();
   })
  productList.map(function(item,index) {
    cardTitle.innerHTML = item.inputName;
    cardText.innerHTML = item.inputDescription;
    price.innerHTML = `${item.inputPrice} $`;
  })
  inputName.value ="";
  inputDescription.value= "";
  inputPrice.value = "";
})

//Display date on screen
let date = new Date();
document.getElementById("date").innerHTML = `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`;