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
