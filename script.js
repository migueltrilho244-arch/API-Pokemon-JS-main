
const btn = document.querySelector("#BTN");
const res = document.querySelector(".res");


btn.addEventListener("click", garçom);


function garçom() {
    
    let random = Math.floor(Math.random() * 1025) + 1;
    
    
    let url = `https://pokeapi.co/api/v2/pokemon/${random}`;

    fetch(url)
        .then((response) => response.json()) 
        .then((data) => {
      
            gerarPokémon(data);
        })
        .catch((error) => console.error("Erro ao buscar Pokémon:", error));
}


function gerarPokémon(data) {
    
    let nome = data.name;
    let id = data.id;
    let tipo = data.types[0].type.name;
    
  
    let img = data.sprites.front_default;


    res.innerHTML = `
        <div class="card"> 
            <img src="${img}" alt="${nome}">
            <div class="container">
                <div class="title">
                    <h1>${nome.charAt(0).toUpperCase() + nome.slice(1)}</h1>
                    <p>#${id}</p>
                </div>
                <p id="poison">${tipo.toUpperCase()}</p>
            </div>
        </div>
    `;
}