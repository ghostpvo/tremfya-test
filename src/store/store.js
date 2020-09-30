import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    describedBeneficiaries: []
  },
  mutations: {
    PUSH_BENEFICIARY: (state, data) => {
      state.describedBeneficiaries.push(data)
    },
    REMOVE_BENEFICIARY: (state, index) => {
      state.describedBeneficiaries.splice(index, 1)
    }
  }
})
