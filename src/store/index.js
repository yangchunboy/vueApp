import Vuex from 'vuex';
import Vue from 'vue';

import state from './defaultState.js';
import mutations from './mutation.js';
import actions from './actions.js';

Vue.use(Vuex);
const store = new Vuex.Store({
  state,
  mutations,
  actions
});

export default store;
