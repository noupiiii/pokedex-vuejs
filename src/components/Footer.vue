<template>
    <div class="footer">
        <h2>{{ fullName.toUpperCase() }}</h2>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      firstName: {
        type: String,
      },
      lastName: {
        type: String,
      },
      tp: {
        type: String,
      }
    },
    computed: {
      fullName() {
        return `${this.firstName} ${this.lastName} ${this.tp}`;
      },
    },
  };
  </script>
  
  <style>
  </style>
  