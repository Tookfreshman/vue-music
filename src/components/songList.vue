<template lang="html">
  <div class="main">
    <div class="header">
      <p><span>自建歌单3</span><span> | </span><span>收藏歌单</span></p>
      <span></span>
      <span></span>
    </div>
    <div class="user_song_list">
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'songList',
}
</script>

<style lang="less" scoped>
.main{
  margin-top:4/744*667/18.75rem;
  background-color: #fff;
  .header{
    padding-top:12/744*667/18.75rem;
    p{
      height:30/744*667/18.75rem;
      line-height:30/744*667/18.75rem;
      font-size:17/744*667/18.75rem;
      span:nth-child(2){
        color:#6F6F6F;
      }
      span:nth-child(3){
        color:#8D8D8D;
      }
    }
  }
  .user_song_list{
    width:20rem;
    ul{
      width: 20rem;
      li{

      }
    }
  }
}
</style>
