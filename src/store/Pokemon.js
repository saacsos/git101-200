import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  // state เหมือน fields ใน oop
  state: {
    data: [],
  },

  getters: {
    pokemons: (state) => state.data,
  },

  // mutations เหมือน private setter ใน oop
  // เอาไว้เปลี่ยนแปลงค่าใน state
  mutations: {
    fetch(state, { res }) {
      state.data = res.data
    },
    add (state, { payload }) {
      state.data.push(payload)
    },
  },

  // actions เหมือน public methods ใน oop
  // ให้ภายนอก (component อื่น) เรียกใช้
  // หรือดึงค่าจากภายนอก เช่น API, server
  actions: {
    // commit เป็น keyword ไว้เรียก mutation
    fetchPokemon({ commit }) {
      // สมมติดึงข้อมูลจาก API
      let res = {
        data: [
          {
            name: {
              english: "Bulbasaur",
              japanese: "Fushikidane",
            },
            type: ["Grass", "Poison"],
          },
          {
            name: {
              english: "Bulbasaur 2",
              japanese: "Fushikidane 2",
            },
            type: ["Grass", "Poison"],
          },
        ],
      }

      commit("fetch", { res })
    },
  },

  modules: {},
})
