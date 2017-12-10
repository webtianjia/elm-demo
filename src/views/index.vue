<style scoped lang="less" rel="stylesheet/less">
.tab{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    .tab-item{
        flex:1;
        a{
            display: block;
            text-align: center;
            &.active{
                color: #f01414;
            }
        }
    }
}
</style>
<template>
    <div>
       <v-header :seller="seller"></v-header>
        <div class="tab">
            <div class="tab-item">
                <router-link to="/goods">商品</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/ratings">评论</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/seller">商家</router-link>
            </div>
        </div>
        <keep-alive>
            <router-view :seller="seller"></router-view>
        </keep-alive>
    </div>
</template>
<script>
    import header from "../components/header/header.vue"
    export default {
        data(){
          return {
              seller:{}
          }
        },
        methods: {
            handleStart() {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });
            }
        },
        created(){
          this.Util.ajax("/static/data.json").then((response)=>{
            this.seller=response.data.seller
          })
        },
        components:{
            "v-header":header
        }
    };
</script>