<template>
  <section>
    <h1>Pokemon {{ id }}</h1>

    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
    />
  </section>
  <RouterLink :to="{ name: 'Pokemon', params: { id: id + 1 } }">Next </RouterLink>
</template>

<script lang="ts" setup>
interface Props {
  id: number;
}

const props = defineProps<Props>();

console.log({ id: props.id });
</script>
