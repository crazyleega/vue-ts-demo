<template>
  <div>
    <div v-if="postDetail">
      <div class="title">{{postDetail.title}}</div>
      <div v-html="postDetail.content"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { State, Action } from 'vuex-class';

@Component
export default class Detail extends Vue{
  @State postList: StoreState.post[];
  @Action getPostList: () => void;

  postDetail: StoreState.post = {
      _id: '',
      title: '',
      content: '',
      cover_imgs: [],
      from: '',
      type: 0,
      from_type: 0,
      status: 0,
      createdAt: '',
      updatedAt: '' ,
  };

  async mounted(){
    if (this.$route.params.pid) {
      const pid = this.$route.params.pid;
      this.getPostDetail(pid);
    }else{
      console.log('Post is is not found');
    }
  
  }

  async getPostDetail(pid: string){
    if(this.postList.length === 0){
      await this.getPostList();
    }
    for(let i = 0 ;i< this.postList.length; i++){
      if(this.postList[i]._id === pid){
        this.postDetail = this.postList[i];
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  .title
    font-size: 24px;
    line-height: 1.5;
    font-weight: bold;
</style>


