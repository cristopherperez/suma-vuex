import { createStore } from "vuex";

export default createStore({
  state: {
    age: 23,
    year: 2020,
  },
  mutations: {
    CHANGE_YEAR: (state, value) => {
      state.year += value;
    },
    CHANGE_AGE: (state) => {
      state.age += 1;
    }
  },
  actions: {
    addFiveYears: ({commit}) => {
      commit('CHANGE_YEAR', 5);
    },
    addAge: ({commit}) => {
      commit('CHANGE_AGE');
    }
  },
  getters: {
    getAge: (state) => {
      return state.age + 3;
    },
    getYear: (state) => {
      return state.year;
    }
  },
});
