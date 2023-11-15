
import { defineStore } from 'pinia'

export const useCounterStore = defineStore({  
  id: 'countStore',
  state: () => (
    { count: 0, operation: null }
  ),
  getters: {
    lastOperation: (state) => state.operation
  },
  actions: {
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