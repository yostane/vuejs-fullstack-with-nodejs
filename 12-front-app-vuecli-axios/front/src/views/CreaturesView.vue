<template>
  <div class="about">
    <h1 v-if="isLoading">Chargement</h1>
    <h1>Ajout d'une creature</h1>
    <div>
      <input type="text" name="name" v-model="newCreature.name" />
      <input type="number" name="hp" v-model="newCreature.hp" />
      <button v-on:click="postCreature">Ajouter</button>
    </div>
    <h1>List des créatures avec :key="creature.id"</h1>
    <span v-for="creature in creatures" :key="creature.id">
      {{ creature.name }} - {{ creature.hp }} HP |
    </span>
    <h1>List des créatures avec :key="index"</h1>
    <span v-for="(creature, index) in creatures" :key="index">
      {{ creature.name }} - {{ creature.hp }} HP |
    </span>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CreaturesView",
  data() {
    return {
      creatures: [],
      newCreature: { name: "rat caillou", hp: 0 },
      isLoading: false,
    };
  },
  methods: {
    loadCreatures() {
      this.isLoading = true;
      axios
        .get("/api/creatures")
        .then((creatures) => {
          this.creatures = creatures.data;
        })
        .catch((error) => console.error(error))
        .finally(() => (this.isLoading = false));
    },
    async postCreature() {
      this.isLoading = true;
      try {
        await axios.post("/api/creatures", this.newCreature);
        this.loadCreatures();
      } catch (error) {
        console.error(error);
      }
      this.isLoading = false;
    },
  },
  mounted() {
    this.loadCreatures();
  },
};
</script>
