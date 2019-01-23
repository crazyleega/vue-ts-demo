<template>
  <div>
    <div v-for="post in postList" :key="post._id">
      <div class="title">
        <!-- <a :href="'detail/'+post._id">{{post.title}}</a>       -->
        <a @click="goDetail(post._id)">{{post.title}}</a>    
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Action, State, Getter } from 'vuex-class';

@Component
export default class Main extends Vue {
  @State count: Number;
  @State postList: StoreState.post[];
  @Action incrementCount: () => void;
  @Action getPostList: () => void;

  // @Getter getCount: Number;

  // get isCount(): Number{
  //   return this.count;
  // }
  mounted(){
    this.getPostList();
  }
  setCount(): void{
    this.incrementCount();
  }
  
  goDetail(id: string): void {
    this.$router.push({ name: 'detail', params: { pid: id } });
  }
}

</script>


// import { mapActions } from 'vuex'
// export default{
//   computed: {
//       count () {
//         return this.$store.state.count
//       }
//   },
//   methods: {
//     ...mapActions([
//       'incrementCount'
//     ]),
//     setCount () {
//       this.incrementCount();
//     }
//   }
// }


<style lang="sass" scoped>
  .title 
    font-size: 18px;
    line-height: 1.5;
    font-weight: bold; 
    text-align: left !important;

</style>

