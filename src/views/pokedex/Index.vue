<template>
  <div>
    <h1>Pokemon List</h1>

    <router-link v-if="isAuthen()" to="/pokedex/create">Add New Pokemon</router-link>
    <pokedex-table></pokedex-table>
  </div>
</template>

<script>
import AuthUser from "@/store/AuthUser"
import PokedexTable from '@/components/PokedexTable'

export default {
  components: {
    PokedexTable
  },
  methods: {
    isAuthen() {
      return AuthUser.getters.isAuthen
    }
  }
}
</script>

<style>

</style>