document.addEventListener("DOMContentLoaded", () => {
  const vueApp = {
    data() {
      return {
        counter: 0,
        name: "luffy",
        items: [],
      };
    },
    methods: {
      incrementCounter() {
        this.counter += 1;
      },
      decrementCounter() {
        this.counter -= 1;
      },
      addNumber() {
        this.items.push(10);
      },
    },
  };

  Vue.createApp(vueApp).mount("#vue_root");
});
