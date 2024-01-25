/**Ce fichier contient la création du routeur. Il permet de définir des routes afin de naviguer à travers les pages */

// Importation de la bibliothèque permettant l'utilisation de routes
import { createRouter, createWebHistory } from 'vue-router';

// Définition de toutes les routes
const routes = [

  // Route par défaut (pokedex)
  {
    path: '/',
    name: 'Pokedex',
    component: () => import('./components/Pokedex.vue')
  },

  // DétailsPokemon prenant en paramètre le nom du pokemon.
  {
    path: '/DetailsPokemon/:name',
    name: 'DetailsPokemon',
    component: () => import('./components/DetailsPokemon.vue')
  },

  // Page about, regrouppant les informations du projet.
  {
    path: '/About',
    name: 'About',
    component: () => import('./components/About.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
