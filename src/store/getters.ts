import { GetterTree } from 'vuex';

const getters: GetterTree<any, any> = {
  // getCount(state): Number {
  //   const { count } = state;
  //   return count;
  // },
  load(state): boolean {
    const { count, isLogin } = state;
    return true;
  }
};
export default getters;
