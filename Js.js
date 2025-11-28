let surl = "https://raw.githubusercontent.com/s0rti/shoes-shop/main/db.json";

fetch(surl)
    .then(async res => {
        let data = await res.json();
        console.log(data);
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
                    </div>
                </div>
            </div>
        `;
        shows_card.appendChild(card);
    });
}
