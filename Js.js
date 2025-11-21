let url = "https://raw.githubusercontent.com/s0rti/shoes-shop/main/db.json";
let response;


fetch(url)
    .then(async function (res) {
        let data = await res.json();

        
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('there no such pokemon!');
        }
        return response.json();
    })
    .then(data => {
        drawPokemon(data);
    });

function drawPokemon(pokemon) {
    resultElement.innerHTML = `
        <center><button class="btn" onclick="drawList()">Go back</button></center>
        <div class = "pokemon">
        <h1>${pokemon[`name`]}</h1>
        <p>weight: ${pokemon.weight}</p>
        <p>height: ${pokemon.height}</p>
        <img src="${pokemon[`sprites`][`front_shiny`]}">
        <p>${pokemon.abilities.map(a => a.ability.name).join(',')}
        </div>
        `
}