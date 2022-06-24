<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-2">
      <q-list>
        <q-item-label header>Menu</q-item-label>
        <drawer-menu-item name="Home" to="/"></drawer-menu-item>
        <drawer-menu-item name="Creatures" to="/creatures"></drawer-menu-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import DrawerMenuItem from "@/components/DrawerMenuItem.vue";

export default {
  name: "LayoutDefault",

  components: {
    DrawerMenuItem,
  },

  setup() {
    return {
      leftDrawerOpen: ref(false),
    };
  },
};
</script>
