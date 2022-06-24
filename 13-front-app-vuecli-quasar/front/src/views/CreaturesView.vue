<template>
  <div class="about">
    <h1 v-if="isLoading">Chargement</h1>
    <button v-on:click="toggleLoading">change is loading</button>
    <q-card bordered class="my-card" style="max-width: 300px">
      <q-card-section>
        <div class="text-h6">Ajout d'une creature</div>
        <div class="text-subtitle2">Veuillez remplir</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>
        <div class="q-pa-md">
          <div class="q-gutter-md">
            <q-input
              type="text"
              name="name"
              label="name"
              v-model="newCreature.name"
            />
            <q-input
              type="number"
              name="hp"
              label="Initial HP"
              v-model="newCreature.hp"
            />
            <q-btn color="primary" v-on:click="postCreature">Ajouter</q-btn>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <div class="q-pa-md q-gutter-md">
      <q-list bordered padding class="rounded-borders" style="max-width: 350px">
        <q-item-label header>Créatures</q-item-label>
        <q-item
          clickable
          v-ripple
          v-for="creature in creatures"
          :key="creature.id"
        >
          <q-item-section avatar top>
            <q-avatar icon="folder" color="primary" text-color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">{{ creature.name }}</q-item-label>
            <q-item-label caption>{{ creature.hp }} HP</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="info" :color="getIconName(creature)" />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
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
    getIconName(creature) {
      if (creature.hp <= 0) {
        return "red";
      } else if (creature.hp < 10) {
        return "orange";
      } else {
        return "green";
      }
    },
    toggleLoading() {
      this.isLoading = !this.isLoading;
    },
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
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.loadCreatures();
  },
};
</script>
