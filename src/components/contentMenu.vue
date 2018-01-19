<template lang="html">
  <div class="main">
    <div class="main_list">
      <ul>
        <li>
          <span class='icon-music'></span>
          <p>本地歌曲</p>
        </li>
        <li>
          <span class='icon-download-alt download'></span>
          <p>下载音乐</p>
        </li>
        <li>
          <span class='icon-time'></span>
          <p>最近播放</p>
        </li>
        <li>
          <span class='icon-heart-empty'></span>
          <p>我喜欢</p>
        </li>
        <li>
          <span class='icon-film'></span>
          <p>下载MV</p>
        </li>
        <li>
          <span class='icon-ok-circle'></span>
          <p>已购音乐</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

</script>

<script>
export default {
  name:'contentMenu',

}
</script>

<style lang="less" scoped>
@gr:#31C37C;
.main{
  position:absolute;
  width:20rem;
  height:16.8rem;
  background-color:#fff;
  z-inex:10;
  .main_list{
    position: absolute;
    bottom:0;
    width:20rem;
    height: 222/744*667/18.75rem;
    ul{
      width:20rem;
      height: 222/744*667/18.75rem;
      display:flex;
      flex-wrap:wrap;
      li{
        list-style: none;
        width:20/3rem;
        height:111/744*667/18.75rem;
        span{
          display: inline-block;
          padding-top: 24/744*667/18.75rem;
          font-size:40/744*667/18.75rem;
          color:@gr;
        }
        p{
          font-size:18/744*667/18.75rem;
          padding-top: 10/744*667/18.75rem;
        }
      }
    }
  }
}
</style>
