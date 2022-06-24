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
      async fetchRandomNumbers() {
        const res = await fetch("/random");
        const numbers = await res.json();
        this.items.push(...numbers);
        // opératuer spread ...[1, 2] => 1, 2
      },
    },
  };

  Vue.createApp(vueApp).mount("#vue_root");
});
