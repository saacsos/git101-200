import Vue from "vue"
import Vuex from "vuex"
import Axios from 'axios'

let api_endpoint = process.env.POKEDEX_ENDPOINT || "http://localhost:1337"

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
    add(state, payload) {
      state.data.push(payload)
    },
    edit(state, index, data) {
      state.data[index] = data
    },
  },

  // actions เหมือน public methods ใน oop
  // ให้ภายนอก (component อื่น) เรียกใช้
  // หรือดึงค่าจากภายนอก เช่น API, server
  actions: {
    async editPokemon({ commit }, payload) {
      console.log('payload', payload)

      // payload.pokemon_types = ["Fire", "Flying"] 
      // ["name_in=Fire", "name_in=Flying"]
      // "name_in=Fire&name_in=Flying"
      let qs = payload.pokemon_types.map(it => "name_in=" + it)
                      .join('&')
      let res_types = await Axios.get(api_endpoint + "/types?" + qs)


      let url = api_endpoint + "/monsters/" + payload.id
      let body = {
        name: payload.name,
        name_jp: payload.name_jp,
        pokemon_types: res_types.data.map((it) => it.id),
      }
      let res = await Axios.put(url, body)
      console.log(res)
      if (res.status === 200) {
        console.log("commit('edit')", payload.index, res.data)
        commit("edit", payload.index, res.data)
      } 
    },

    // commit เป็น keyword ไว้เรียก mutation
    async fetchPokemon({ commit }) {
      let res = await Axios.get(api_endpoint + "/monsters")
      commit("fetch", { res })
    },

    async addPokemon ({ commit }, payload) {
      // payload.pokemon_types = ["Fire", "Flying"] 
      // ["name_in=Fire", "name_in=Flying"]
      // "name_in=Fire&name_in=Flying"
      let qs = payload.pokemon_types.map(it => "name_in=" + it)
                      .join('&')
      let res_types = await Axios.get(api_endpoint + "/types?" + qs)

      let url = api_endpoint + "/monsters"
      let body = {
        name: payload.name,
        name_jp: payload.name_jp,
        pokemon_types: res_types.data.map(it => it.id)
      }

      let res = await Axios.post(url, body)
      if (res.status === 200) {
        commit("add", res.data)
      } else {
        console.error(res)
      } 
    },
  },

  modules: {},
})
