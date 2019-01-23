import { ActionTree } from 'vuex';
import axios from 'axios'; 
import TYPES from './types';
import getter from './getters';


const actions: ActionTree<any, any> = {
  async login({ state, commit}){
    //todo  login request
    commit(TYPES.LOGIN, true)
  },

  incrementCount({ state, commit}){
    console.log(state.count);
    commit(TYPES.COUNT, 1 );
  }
}
export default actions;