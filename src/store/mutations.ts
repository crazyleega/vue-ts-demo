import TYPES from './types';
import { MutationTree } from 'vuex';
import { Stats } from 'fs';

const mutationtree: MutationTree<any> = {
  [TYPES.COUNT](state): void{
    state.count ++;
  },
  [TYPES.LOGIN](state, isLogin): void{
    state.isLogin = isLogin;
  },
  [TYPES.SET_POSTLIST](state, postList): void{
    state.postList = postList;
  }
}
export default mutationtree