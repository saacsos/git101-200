<template>
  <div>
    <pokedex-create-form></pokedex-create-form>
  </div>
</template>

<script>
import AuthUser from "@/store/AuthUser"
import PokedexCreateForm from "@/components/PokedexCreateForm"

export default {
  components: {
    PokedexCreateForm,
  },
  created() {
    if (!this.isAuthen()) {
      this.$swal("Restricted Area", "You have no permission", "warning")
      this.$router.push("/pokedex")
    }
  },
  methods: {
    isAuthen() {
      return AuthUser.getters.isAuthen
    }
  }
}
</script>

<style></style>
