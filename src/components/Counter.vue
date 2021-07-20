<template>
  <div class="mb-20">
    Counter: {{ number }}
    <div>
      <label for="counter" v-bind:title="number">Counter: </label>
      <input type="text" v-model="number">
      <button v-on:click="increase">+</button>
      <button v-on:click="decrease">-</button>
      <button>+10</button>
      <button>x2</button>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 200
    }
  },
  methods: {
    increase() {
      this.number++
    },
    decrease() {
      this.number--
    }
  }
}
</script>

<style scoped lang="scss">
.mb-20 {
  margin-bottom: 20px;
}
</style>