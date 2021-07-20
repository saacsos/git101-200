<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name (En)</th>
          <th>Name (Jp)</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(poke, index) in pokemons" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ poke.name.english }}</td>
          <td>{{ poke.name.japanese }}</td>
          <td>{{ poke.type }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import PokemonStore from '@/store/Pokemon'
export default {
  data() {
    return {
      pokemons: []
    }
  },
  created() {
    this.fetchPokemon()
  },
  methods: {
    fetchPokemon() {
      // เรียก actions จาก Store ด้วย ชื่อStore.dispatch('ชื่อ action')
      PokemonStore.dispatch('fetchPokemon')
      this.pokemons = PokemonStore.getters.pokemons
    }
  }
}
</script>

<style>

</style>