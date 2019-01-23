import Vue from 'vue';
import Vuex, { ActionTree, MutationTree } from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

interface State{
  isLogin: Boolean,
  count: Number,
  postList: StoreState.post[],
}

let state: State = {
  isLogin: false,
  count: 1,
  postList:[],
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})