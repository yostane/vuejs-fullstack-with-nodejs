<template>
  <q-item :to="to" exact>
    <q-item-section avatar>
      <q-icon name="school" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ name }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<style></style>

<script>
export default {
  name: "DrawerMenuItem",
  props: { name: String, to: String },
};
</script>
