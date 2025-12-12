// localStorage.clear()

let surl = "https://raw.githubusercontent.com/s0rti/shoes-shop/main/db.json";
let btncard = document.getElementById('cart_products');
let productsArray = [];
let cart = []

loadCartFromStorage();

fetch(surl)
    .then(async res => {
        let data = await res.json();
        console.log(data);
        productsArray = data;
        drawCard(data);



    });

function drawCard(data) {
    const shows_card = document.getElementById("shows_card");
    shows_card.innerHTML = "";

    const shoes = Array.isArray(data) ? data : data.shoes;

    shoes.forEach(shoe => {
        const card = document.createElement('div');
        card.classList.add('person-card');
        card.innerHTML = `
            <div id="card">
                <div id="card-bg">
                    <img src="${shoe.picture}" class="width-photo">
                    <div id="info-shoes">
                        <p id="text-card-style">boots: ${shoe.boots}</p>
                        <p id="text-card-style">price: ${shoe.price}</p>
                        <p id="text-card-style">color: ${shoe.color}</p>
                        <button id="${shoe.id}" onclick="addProductToCart('${shoe.id}')"> add cart</button>
                    </div>
                </div>
            </div>
        `;
        shows_card.appendChild(card);
    });
}

function addProductToCart(id) {
    let product = productsArray.find(function (p) {
        return p.id == id;
    });
    cart.push(product);
    drawCartProducts();
    saveCartToStorage();

}

function openCard() {
    if (btncard) {
        btncard.classList.toggle('hide');
    } else {
        // Опционально: вывести сообщение, если элемент не найден
        console.error("Элемент с ID 'cart-products' не найден в DOM.");
    }
}


function drawCartProducts() {
    if (cart.length === 0) return btncard.innerHTML = 'Cart is empty';
    btncard.innerHTML = null;
    let sum = 0;
    cart.forEach(function (p) {
        btncard.innerHTML += `
        <div class="style_card">
        
        <p style="display:flex; align-items:center; justify-content:center;" ><img src="${p.picture}" width="50"> ${p.name} | ${p.price}$</p>
        </div>
         
        `;
        sum += p.price;
    });
    btncard.innerHTML += `
            <p class="ppCart">Total Price: ${sum}$</p>
            <button onclick="buyAll()" class="buttonCart">Buy All</button>
            <button onclick="deletecart()" class="buttonCartt">Delete All</button>
        `;
}


function saveCartToStorage() {

    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}


function loadCartFromStorage() {
    const savedCart = localStorage.getItem('shoppingCart');
    if (savedCart) {

        cart = JSON.parse(savedCart);

        drawCartProducts();
    }

}

function deletecart() {
    location.reload()
    localStorage.clear();
    drawCartProducts();
}

