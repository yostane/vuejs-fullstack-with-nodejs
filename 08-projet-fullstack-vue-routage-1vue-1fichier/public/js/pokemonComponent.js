const pokemonsComponent = {
  template: `
  <p>
            Pokemons {{ pokemons }}
            <button v-on:click="fetchPokemons">Récupérer les pokemons depuis le serveur</button>
            <button v-on:click="postPokemon">Ajouter un pokémon</button>
        </p>
        <div>
            <p>Saisir un nom: <input v-model="pokemonToAdd.name" /></p>
            <p>Saisir les hp: <input v-model="pokemonToAdd.hp" /></p>
            <p>Le pokémon à ajouter aura comme valeur: {{ pokemonToAdd }}</p>
        </div>
        <ul id="pokemonList">
            <li v-for="pokemon in pokemons">
                {{ pokemon.name }}: {{ pokemon.hp }} HP
            </li>
        </ul>
`,
  data() {
    return {
      pokemons: [],
      pokemonToAdd: {
        name: "toto",
        hp: 100,
      },
    };
  },
  methods: {
    async fetchPokemons() {
      const res = await fetch("/pokemons");
      const pokemons = await res.json();
      this.pokemons = pokemons;
    },
    async postPokemon() {
      await fetch("/pokemon", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(this.pokemonToAdd),
      });
      // récupération de le nouvelle liste
      await this.fetchPokemons();
    },
  },
};
