const Home = {
  template: `
  <div>Home</div>
  <p>Homepage</p>
`,
};

const About = {
  template: `<div>About {{ $route.params.id }}</div>
  <h1>{{ name }}</h1>
  <h1>{{ username }}</h1>
  `,
  data() {
    return {
      name: this.$route.params.id,
    };
  },
  computed: {
    username() {
      // We will see what `params` is shortly
      return this.$route.params.id;
    },
  },
};

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

const routes = [
  { path: "/", component: Home },
  { path: "/about/:id", component: About },
  { path: "/pokemons", component: pokemonsComponent },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const vueApp = {};

const app = Vue.createApp(vueApp);
app.use(router);

window.addEventListener("DOMContentLoaded", () => {
  app.mount("#vue_root");
});
