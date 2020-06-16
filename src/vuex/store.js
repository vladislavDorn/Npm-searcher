import Vue from "vue";
import Vuex from "vuex";
import Searcher from "./models/searcher";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Searcher,
  },
});
