document.addEventListener("DOMContentLoaded", () => {
  const vueApp = {
    data() {
      return {
        pokemons: [],
        pokemonToAdd: {
          name: "",
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

  Vue.createApp(vueApp).mount("#vue_root");
});
