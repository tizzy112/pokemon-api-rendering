const  pokemonContainer = document.querySelector('.pokemonContainer');

let pokemons = [];

const fetchPokmon = async () => {
    await fetch ('https://pokeapi.co/api/v2/pokemon').then
    ((data) => data.json().then((data)=>{
        pokemons = data.results;
        if(pokemons.length)
            updatePokemonUi();
    }) .catch((err) => console.log(err))
);
};
fetchPokmon();

const updatePokemonUi =() =>{
    for (let pokemon of pokemons){
        const {name} = pokemon;
        const pokemonCard = document.createElement('div');
        pokemonCard.innerHTML =`
        <div style="
        border: solid orangered;
        height: 40px;
        width:150px;
        display: flex;
        align-items: center;
        justify-content: center;">

        ${name}
        </div>`;
        pokemonContainer.appendChild(pokemonCard);
    }
};