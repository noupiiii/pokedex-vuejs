<script setup>
import { ref, computed } from 'vue'

/**Importation des composants */

// Pokedex (Affiche tous les pokemons)
import Pokedex from './components/Pokedex.vue'

// DetailsPokemon (Affiche les informations d'un pokémon choisi dans le Pokedex)
import DetailsPokemon from './components/DetailsPokemon.vue'

// About (Page regrouppant les informations du projet)
import About from './components/About.vue';


// Définition des routes du projet (Pokedex par défaut)
const routes = {
  '/': Pokedex,
  '/DetailsPokemon/:name': DetailsPokemon,
  '/About' : About,
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>

  <!--Définition de la page par défaut à l'arrivée du site (Pokedex)-->
  <RouterView></RouterView>
</template>
