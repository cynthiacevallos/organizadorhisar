
import { defineStore } from 'pinia'
import axios from 'axios';
export const RUTA_SERVIDOR = import.meta.env.VITE_APP_RUTA_HISAR;
export const USUARIO_HISAR = import.meta.env.VITE_APP_HISAR_USERNAME;
export const PASSWORD_HJSAR = import.meta.env.VITE_APP_HISAR_PASSWORD;
export const RUTA_LOCAL = import.meta.env.VITE_APP_RUTA_LOCAL

export const useCounterStore = defineStore({
  id: 'countStore',
  state: () => ({
    count: 0,
    operation: null,
    things: []
  }),
  getters: {
    // lastOperation: (state) => state.operation,
    getThings: (state) => state.things
    
  },
  actions: {
    async getRqs() {
      const res = await axios.post(RUTA_SERVIDOR + "apiloc/api/token/", {
        username: USUARIO_HISAR,
        password: PASSWORD_HJSAR,
      })
      const rpta = await axios.get(RUTA_SERVIDOR + "apiloc/modeloSolicitudMa/", {
        headers: { Authorization: "Bearer " + res.data.access },
      })
      this.things = rpta.data
    },
    async postRq(nombre, desc) {
      const res = await axios.post(RUTA_SERVIDOR + "apiloc/api/token/", {
        username: USUARIO_HISAR,
        password: PASSWORD_HJSAR,
      })
      const rpta = await axios.post(RUTA_SERVIDOR + "apiloc/modeloSolicitudMa/", {
        nombre: nombre,
        descripcion: desc,
        categoriaMa: "http://10.0.54.105:8000/categoriaMa/2/"

      }, { headers: { Authorization: "Bearer " + res.data.access }, })
      // await getRqs()
      console.log(rpta.status)
      // console.log/rpta.status)
    },



    add() {
      this.count++;
      this.operation = 'add';
    },
    remove() {
      this.count--;
      this.operation = 'remove'
    },

  }
})
export default useCounterStore