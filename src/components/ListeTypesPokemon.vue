<template>
  <div class="liste-types">
    <h3>List of pokemon types</h3>
    <ul>
      <li v-for="(count, type) in typesCount" :key="type">
        <img :src="type" alt="">  {{ count }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      default: () => [],
    },
  },
  computed: {

    // Fonction permettant de compter la somme de chaque types de pokemons
    typesCount() {
      const typesCount = {};

      this.pokemons.forEach((pokemon) => {
        // Ajoutez une vérification pour s'assurer que pokemon.apiTypes[0].name est défini
        if (pokemon.apiTypes && pokemon.apiTypes.length > 0) {
          const primaryType = pokemon.apiTypes[0].image;
          typesCount[primaryType] = (typesCount[primaryType] || 0) + 1;
        }
      });

      return typesCount;
    },
  },
};
</script>

<style>
</style>
