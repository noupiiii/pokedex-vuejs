<template>
  <div>
    <Nav></Nav>
    <div class="container container-details">
      <button @click="naviguerVers" class="back-button" type="submit">Menu</button>
      <div class="round-container">
        <div class="round" :style="{ backgroundColor: getTypeColor(pokemonData ? pokemonData.apiTypes[0].name : '') }"></div>
      </div>
      <div class="container-datas-pokemon">
        <h1>{{ $route.params.name }}</h1>
        <div class="types-pokemon-details">
          <img v-for="element in getPokemonTypes" :key="element" class="teteteteet" :src="element" alt="">
        </div>
      <!--ICI-->
        <img v-if="pokemonData" :src="pokemonData.image" alt="">
        <p class="id-pokemon-details" :style="{ backgroundColor: getTypeColor(pokemonData ? pokemonData.apiTypes[0].name : '') }">{{ formatPokemonId(pokemonData ? pokemonData.id : null) }}</p>
        <div class="pokemonDatas">
          <div v-for="(value, stat) in getPokemonStats" :key="stat" class="stat-row">
            <div class="stat-name">{{ stat.replace('_', ' ') }}</div>
            <div class="stat-value">{{ value || 'Loading...' }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer :firstName="userFirstName" :lastName="userLastName" :tp="userTp" />
</template>

<script>
import axios from 'axios';
import Nav from './Nav.vue';
import Footer from './Footer.vue';

export default {
  components: { Nav, Footer },
  data() {
    return {
      pokemonData: null,
      userFirstName: 'Louis',
      userLastName: 'Bruche',
      userTp: 'TPC',
    };
  },
  computed: {
    getPokemonTypes() {
      var images = []
      if (this.pokemonData != null) {
        for(var element in this.pokemonData.apiTypes) {
          images.push(this.pokemonData.apiTypes[element]["image"])
        }
        console.log(images);
      }
      return images
  },
    getPokemonStats() {
      return this.pokemonData && this.pokemonData.stats ? this.pokemonData.stats : {};
    },
  },
  methods: {
    formatPokemonId(id) {
      return id ? id.toString().padStart(3, '0') : 'Loading...';
    },
    getTypeColor(type) {
      const typeColors = {
        Feu: "#FF4D4D",  // Rouge
                Eau: "#4DA6FF",  // Bleu
                Plante: "#6B8E23",  // Vert olive
                Insecte: "#A8B820",  // Vert
                Vol: "#A890F0",  // Violet
                Normal: "#808080",  // Gris
                Poison: "#A040A0",  // Violet foncé
                Fée: "#EE99AC",  // Rose
                Électrik: "#FFD700",  // Or
                Roche: "#B8A038",  // Jaune
                Sol: "#DEB887",  // Brun clair
                Combat: "#C03028",  // Rouge foncé
                Psy: "#F85888",  // Rose vif
                Spectre: "#705898",  // Violet foncé
                Acier: "#808080",  // Gris clair
                Glace: "#98D8D8",  // Cyan
                Dragon: "#7038F8",  // Indigo
                Ténèbres: "#705848",  // Marron
                Vol: "#A890F0",  // Violet (utilisé à nouveau pour Vol)
                
      };
      console.log("Type:", type); // Ajoutez cette ligne pour déboguer
      return typeColors[type];
    },
    fetchPokemonData() {
      const apiUrl = `https://pokebuildapi.fr/api/v1/pokemon/${this.$route.params.name}`;

      axios
        .get(apiUrl)
        .then((response) => {
          console.log(response);
          this.pokemonData = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    naviguerVers() {
      this.$router.push({ name: 'Pokedex' });
    },
  },
  mounted() {
    this.fetchPokemonData();
  },
};
</script>
