import TYPES from './types';
import { MutationTree } from 'vuex';

const mutationtree: MutationTree<any> = {
  [TYPES.COUNT](state): void{
    state.count ++;
  },
  [TYPES.LOGIN](state, isLogin): void{
    state.isLogin = isLogin;
  }
}
export default mutationtree