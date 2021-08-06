import Axios from "axios"

const auth_key = "auth-pokedex"
let auth = JSON.parse(localStorage.getItem(auth_key))
const user = auth ? auth.user : ""
const jwt = auth ? auth.jwt : ""

const api_endpoint =
  process.env.VUE_APP_POKEDEX_ENDPOINT || "http://localhost:1337"

export default {
  isAuthen() {
    return user !== "" && jwt !== ""
  },

  getApiHeader() {
    if (jwt !== "") {
      return {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    }
    return {}
  },

  isRoleAuthenticated() {
    return this.isAuthen() && user.role.name === "Authenticated"
  },

  getUser() {
    return user
  },

  getJwt() {
    return jwt
  },

  async login({ email, password }) {
    // call POST /auth/local
    try {
      // let url = api_endpoint + '/auth/local'
      let url = `${api_endpoint}/auth/local`
      let body = {
        identifier: email,
        password: password,
      }
      let res = await Axios.post(url, body)
      if (res.status === 200) {
        localStorage.setItem(auth_key, JSON.stringify(res.data))
        return {
          success: true,
          user: res.data.user,
          jwt: res.data.jwt,
        }
      } else {
        console.log(res)
        return {
          success: false,
          message: "Unknown status code " + res.status,
        }
      }
    } catch (e) {
      if (e.response.status === 400) {
        // console.error(e.response.data.message[0].messages[0].message)
        return {
          success: false,
          message: e.response.data.message[0].messages[0].message,
        }
      } else {
        console.error(e.response)
        return {
          success: false,
          message: "Unknown error: " + e.response,
        }
      }
    }
  },

  logout() {
    localStorage.removeItem(auth_key)
  },

  async register({ username, email, password }) {
    // call POST /auth/local/register
    try {
      let url = `${api_endpoint}/auth/local/register`
      let body = {
        username: username,
        email: email,
        password: password
      }
      let res = await Axios.post(url, body)
      if (res.status === 200) {
        localStorage.setItem(auth_key, JSON.stringify(res.data))
        return {
          success: true,
          user: res.data.user,
          jwt: res.data.jwt,
        }
      } else {
        console.log(res)
        return {
          success: false,
          message: "Unknown status code " + res.status,
        }
      }
    } catch (e) {
      if (e.response.status === 400) {
        // console.error(e.response.data.message[0].messages[0].message)
        return {
          success: false,
          message: e.response.data.message[0].messages[0].message,
        }
      } else {
        console.error(e.response)
        return {
          success: false,
          message: "Unknown error: " + e.response,
        }
      }
    }
  },
}
