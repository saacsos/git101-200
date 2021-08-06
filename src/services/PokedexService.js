import Axios from 'axios'

const api_endpoint = process.env.VUE_APP_POKEDEX_ENDPOINT

export default {
  async getPokemonById (id) {
    let url = `${api_endpoint}/monsters/${id}`
    let res = await Axios.get(url)
    return res.data
  }
}