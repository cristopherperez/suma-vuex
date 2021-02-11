<template>
  <div>
      <h1>Prueba de Vuex</h1>
        <h2>{{`Year: ${getYearComponent}`}}</h2>
      <h2>{{`Edad: ${getAgeComponent}`}}</h2>
      <h2>{{`Edad pero desde el state: ${edad}`}}</h2>
      <button @click="customAddYears">Sumar Años</button>
      <button @click="addYearsToAge">Incrementar Edad</button>
  </div>
</template>

<script>
import {mapGetters, mapState 
}from 'vuex'

export default {
    name: "Home",
    methods: {
      customAddYears() {
        this.$store.dispatch('addFiveYears');
      },
      addYearsToAge() {
        this.$store.dispatch('addAge');
      }
    },

    computed: {
      ...mapState({
        edad: state => state.age + 3,
      }),
      ...mapGetters({
        getAgeComponent: 'getAge',
        getYearComponent: 'getYear'
      })
    }
}
</script>