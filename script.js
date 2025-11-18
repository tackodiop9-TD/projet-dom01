// Get Buttons
let PlusButton = document.querySelectorAll('.btnPlus');
let deleteButton = document.querySelectorAll('.btn-outline-danger');
let heartIcons = document.querySelectorAll('.fa-heart');
let article = document.querySelectorAll('.article');
let qty = document.querySelectorAll('.quantite');
let total = document.querySelectorAll('.total');
let price = document.querySelectorAll('.prix');
let mns = document.querySelectorAll('.btn-outline-warning');
let sum = document.querySelector('.Prixtotal');


// Calculate total of all
function CalculateTotal() {
    let totalPrice = 0;

    for (let i = 0; i < article.length; i++) {

        let itemPrice = parseInt(price[i].innerHTML);
        let itemQty = parseInt(qty[i].value);

        let itemTotal = itemPrice * itemQty;   // CORRECTION ICI !

        total[i].innerHTML = itemTotal;
        totalPrice += itemTotal;
    }

    
        sum.value = totalPrice;
    
}


// Plus Button
for (let i = 0; i < PlusButton.length; i++) {
    PlusButton[i].addEventListener('click', function () {
        qty[i].value++;
        CalculateTotal();
    });
}


// Minus Button
for (let i = 0; i < mns.length; i++) {
    mns[i].addEventListener('click', function () {
        if (qty[i].value > 1) {
            qty[i].value--;
            CalculateTotal();
        }
    });
}


// Delete Button
for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener('click', function () {

        article[i].remove();
        CalculateTotal();
    });
}


// Heart Icon
heartIcons.forEach((icon) => {
    icon.addEventListener('click', function () {
        icon.classList.toggle('liked'); 
    });
});

CalculateTotal();