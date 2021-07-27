<template>
  <div>
    Pokemon List
    <pokedex-create-form></pokedex-create-form>
    <pokedex-table></pokedex-table>
  </div>
</template>

<script>
import PokedexCreateForm from '@/components/PokedexCreateForm'
import PokedexTable from '@/components/PokedexTable'
export default {
  components: {
    PokedexCreateForm,
    PokedexTable
  }
}
</script>

<style>

</style>