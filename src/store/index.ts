import { defineStore } from "pinia"

export const useMainStore = defineStore({
  id: "main",
  state: () => ({
    count: 0,
    firstName: "紫",
    lastName: "珏"
  }),
  // 计算属性
  getters: {
    name: (state) => state.firstName + state.lastName
  },
  actions: {
    async addAmount(amount: number) {
      this.count += amount
    }
  }
})
