<template>
  <Nav></Nav>

  <div class="container">
    <h1 class="title-pokedex">Pokedex</h1>
    <h2 class="subtitle-pokedex">developed in VueJS by n0upi</h2>

    <div class="side-menu">
      <div class="custom-search">
        <h3 class="input-name">Limit</h3>
        <input v-model="limit" type="text" class="custom-search-input" placeholder="Enter your limit (default 20)">
      </div>
      <div class="generation-pokmemon">
        <h3 class="input-name">Generation</h3>
        <select v-model="selectedGeneration" name="generation" id="generation-select" class="select-style">
          <option value="">All pokemons</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
      </div>
      <button @click="fetchPokemonData" class="custom-search-button" type="submit">Go</button>
    </div>

    <div class="types-pokemon">
      <ListeTypesPokemon v-if="pokemons.length > 0" :pokemons="pokemons"></ListeTypesPokemon>
    </div>

    <div class="pokemon-grid">
      <Pokemon v-for="(item, index) in pokemons.slice(0, limit)" :key="item.id" :selected="item" :limit="limit"></Pokemon>
    </div>
  </div>

  <Footer :firstName="userFirstName" :lastName="userLastName" :tp="userTp" />
</template>

<script>
import axios from 'axios';
import ListeTypesPokemon from './ListeTypesPokemon.vue';
import Pokemon from './Pokemon.vue';
import Nav from './Nav.vue';
import Footer from './Footer.vue';

export default {
  name: 'Pokedex',
  components: { ListeTypesPokemon, Pokemon, Nav, Footer },
  data() {
    return {
      pokemons: [],
      selectedPokemon: null,
      limit: 20, // Limite par défaut
      userFirstName: 'Louis',
      userLastName: 'Bruche',
      userTp: 'TPC',
      selectedGeneration: '',
    };
  },
  created() {
    this.fetchPokemonData();
  },
  methods: {
    fetchPokemonData() {
      let apiUrl;

      if (this.selectedGeneration === '') {
        apiUrl = `https://pokebuildapi.fr/api/v1/pokemon/limit/${this.limit}`;
      } else {
        apiUrl = `https://pokebuildapi.fr/api/v1/pokemon/generation/${this.selectedGeneration}?limit=${this.limit}`;
      }

      axios
        .get(apiUrl)
        .then((response) => {
          console.log(response);
          this.pokemons = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    showPokemonDetails(pokemon) {
      this.selectedPokemon = pokemon;
    },
  },
};
</script>

<style>
/* Add your global styles if necessary */
</style>