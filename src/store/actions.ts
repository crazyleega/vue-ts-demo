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
  },

  async getPostList({ state, commit}){
    const res: HttpAxios.HttpResponse = await axios.get('/postList').then((res) => res.data).catch((error: string) => console.error(error));
    if(res && res.code == 200){
      commit(TYPES.SET_POSTLIST, res.result.postList);
    }
  },
}
export default actions;