<template>
  <div>
    Pokemon List
    <pokemon-create-form></pokemon-create-form>
    <pokemon-table></pokemon-table>
  </div>
</template>

<script>
import PokemonCreateForm from '@/components/PokemonCreateForm'
import PokemonTable from '@/components/PokemonTable'
export default {
  components: {
    PokemonCreateForm,
    PokemonTable
  }
}
</script>

<style>

</style>