<template>

  <Nav></Nav>

    <div class="container">
      <h1>Pokedex VueJs</h1>
      <p>Développé par n0upi (BRUCHE Louis), étudiant en BUT 2 informatique spécialité développement d'applications communiquantes et sécurisées</p>
      <h2>Contexte</h2>
      <p>Ce projet à été réalisé dans le cadre du cours de VueJS animé par Antoine OFFROY</p>
      <h2>L'utilisation d'une API</h2>
      <p>L'API utilisé lors de ce projet est <a  href="https://pokebuildapi.fr/api/v1">Pokebuild</a>.</p>
      <h2>Structure du projet</h2>
      <img src="../assets/arborecense.png" alt="">
      <h2>Notes</h2>
      <p>Pour résoudre le problème de la liste des types de pokemons (Ils s'affichent pour toute la génération de pokémon lorsqu'elle est séléctionné) il faudrait gérer la liste des types dans Pokedex.vue directement. Or la consigne demandait de respecter le fait qu'il faille le faire dans le fichier ListeTypesPokemon.vue</p>
    </div>

    <Footer :firstName="userFirstName" :lastName="userLastName" :tp="userTp" />

  </template>
  
  <script>
  import Nav from './Nav.vue';
  import Footer from './Footer.vue';
  

  export default {
    data() {
      return {
        userFirstName: 'Louis',
      userLastName: 'Bruche',
      userTp: 'TPC',
      };
    },
    components: {Nav, Footer},
  };
  </script>
  
  <style>
  /* Ajoutez des styles CSS spécifiques au composant About.vue si nécessaire */
  </style>
  