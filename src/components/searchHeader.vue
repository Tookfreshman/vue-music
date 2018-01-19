<template lang="html">
  <div class="main">
    <div class="set_up icon-list-ul"></div>
    <div class="main_list">
      <ul>
        <li>我的</li>
        <li>音乐馆</li>
        <li>发现</li>
      </ul>
    </div>
    <div class="add_icon icon-plus"></div>
    <div class="search_btn">
      <span class="icon_search icon-search"></span>
      <span class="text_search">搜索</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'searchHeader'
}
</script>

<style lang="less" scoped>
@gr:#31C37C;
 .main{
   width: 20rem;
   height:0.14*667/18.75rem;
   background-color: @gr;
   color:#fff;
   z-index:999;
   .set_up{
     position:absolute;
     left:20/420*20rem;
     top:20/744*667/18.75rem;
   }
   .add_icon{
     position:absolute;
     top:20/744*667/18.75rem;
     right:20/420*20rem;
   }
   .main_list{
     padding-top:20/744*667/18.75rem;
     height:22/744*667/18.75rem;
     width:100%;
     ul{
       margin: 0 auto;
       height:22/744*667/18.75rem;
       line-height: 22/744*667/18.75rem;
       width:0.62*20rem;
       display: flex;
       justify-content:space-around;
       li{
         height:100%;
         list-style: none;
         letter-spacing: 3/420*20rem;
         background-color: @gr;
         font-size: 20/744*667/18.75rem;
         font-weight: 500;
         color:#fff;
       }
     }
   }
   .search_btn{
     height: 36/744*667/18.75rem;
     line-height: 36/744*667/18.75rem;
     width:0.96*20rem;
     background-color: #2DAF6F;
     margin:16/744*667/18.75rem auto;
     border-radius: 0.3rem;
     .text_search{
      font-weight: normal;
      letter-spacing: 2/420*20rem;
     }
   }

 }

</style>
