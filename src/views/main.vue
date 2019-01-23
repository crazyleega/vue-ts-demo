<template>
  <div>
    {{ count }}
    <button @click="setCount()" type="button">+</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Action, State, Getter } from 'vuex-class';

@Component
export default class Main extends Vue {
  @State count: Number;
  @Action incrementCount: () => void;
  // @Getter getCount: Number;

  // get isCount(): Number{
  //   return this.count;
  // }

  setCount(): void{
    this.incrementCount();
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


<style>

</style>

