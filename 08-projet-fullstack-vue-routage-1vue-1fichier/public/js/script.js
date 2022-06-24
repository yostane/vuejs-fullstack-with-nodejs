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
