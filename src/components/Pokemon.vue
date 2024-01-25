<!-- Pokemon.vue -->

<!--Ce fichier permet de créer un pokemon en appleant l'api https://pokebuildapi.fr/api/v1-->

<template>

  <!--Affichage d'un pokémon avec en background-color, la couleur associé à son type-->
  <div @click="naviguerVers(selected.name)" class="pokemon" :style="{ backgroundColor: getTypeColor(selected.apiTypes[0].name) }">
    
    <!--Affichage du nom du pokemon-->
    <h2>{{ selected.name }}</h2>

    <!--Affichage de l'id du pokémo)n (Affiché en background sur l'interface)-->
    <p class="pokemon-p-id">{{ formatPokemonId(selected.id) }}</p>

        <!--Affichage de l'image du pokemon-->
        <img :src="selected.image" alt="Pokemon Image">
    </div>
  </template>

<script>
export default {
  name: 'pokemon',
  props: ['selected'],
    methods: {

        naviguerVers:function(name) {
          // Fonction permettant d'afficher les détails du pokémon (dans uen nouvelle route)
            console.log("name");
            this.$router.push({name:'DetailsPokemon', params:{name: name}});
        },
        
        getTypeColor(type) {
          // Fonction permettant de récupérer la couleur d'un type
            const typeColors = {
                Feu: "#FF4D4D",  // Rouge
                Eau: "#4DA6FF",  // Bleu
                Plante: "#6B8E23",  // Vert olive
                Insecte: "#A8B820",  // Vert
                Vol: "#A890F0",  // Violet
                Normal: "#A8A878",  // Gris
                Poison: "#A040A0",  // Violet foncé
                Fée: "#EE99AC",  // Rose
                Électrik: "#FFD700",  // Or
                Roche: "#B8A038",  // Jaune
                Sol: "#DEB887",  // Brun clair
                Combat: "#C03028",  // Rouge foncé
                Psy: "#F85888",  // Rose vif
                Spectre: "#705898",  // Violet foncé
                Acier: "#B8B8D0",  // Gris clair
                Glace: "#98D8D8",  // Cyan
                Dragon: "#7038F8",  // Indigo
                Ténèbres: "#705848",  // Marron
                Vol: "#A890F0",  // Violet (utilisé à nouveau pour Vol)
                
            };
            console.log("Type:", type); // Ajoutez cette ligne pour déboguer
            return typeColors[type];
        },
        formatPokemonId(id) {
            return id.toString().padStart(3, '0');
        }
    },
  }
</script>

<style>
</style>