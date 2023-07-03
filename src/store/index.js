import { createStore } from 'vuex';
const dataServer = "https://tomlga.github.io/EompServerVue/data.json";
export default createStore({
  state: {
    Testermonals: ""
  },
  mutations: {
    setTestermonals(state, Testermonals) {
      state.Testermonals = Testermonals;
    }
  },
  actions: {
    async fetchTestermonals(context) {
      try {
        let statements = await fetch(dataServer);
        let { Testermonals } = await statements.json();
        if (Testermonals) {
          context.commit('setTestermonals', Testermonals);
        } else {
          alert('Fetching data... Please wait.');
        }
      } catch (e) {
        console.log(e.message);
      }
    }
  },
  modules: {}
});





















