<template lang="html">
  <div class="main">
    <div class="clickLSite" @click="playershow()">
      <div class="album_pic">
      </div>
      <div class="song_info">
        <p>歌名</p>
        <p>歌手</p>
      </div>
    </div>
    <div class="song_play" @click="play()">
      <span class="icon-play gr"></span>
    </div>
  </div>
</template>

<script>
export default {
  name:'playBtn',
  methods: {
    playershow: function(){
      $(".musicPlayer").show();
    },
    play: function(){
      const player= $("#audioPlayer")[0];

    }
  }
}
</script>

<style lang="less" scoped>
@gr:#31C37C;
.main{
  position: fixed;
  top:0.14*667/18.75rem+27.5rem;
  width:20rem;
  height: 3.15rem;
  background-color: #fff;
  border-top:1/420*20rem solid #F2F2F2;
  z-index:999;
  .clickLSite{
    width:46/420*20rem + (3.15-46/420*20)/2rem + 244/420*20rem;
    height:3.15rem;
    .album_pic{
      position:absolute;
      top:(3.15-46/420*20)/2rem;
      left:(3.15-46/420*20)/2rem;
      width:46/420*20rem;
      height:46/420*20rem;
      border-radius: 50%;
      background:url("../../static/pics/beautiful.png") no-repeat;
      background-size:46/420*20rem;
      background-position:center;
      z-index:9999;
      /* animation:.6s animate1; */
    }
    .song_info{
      position: absolute;
      top:0;
      left:3.225rem;
      width:244/420*20rem;
      height:3.15rem;
      p{
        text-align: left;
        font-size:14/744*667/18.75rem;
        height:3.15/2rem;
        width:244/420*20rem;
        line-height:3.15/2rem;
        letter-spacing:2/400*20rem;
        background-color: #fff;
      }
      p:nth-child(2){
        color:#939393;
      }
    }
  }
  .song_play{
    position: absolute;
    left:15.7rem;
    top:1.35/2rem;
    width:36/420*20rem;
    height:36/420*20rem;
    box-sizing: border-box;
    border:20*2/420rem solid @gr;
    border-radius: 50%;
    display:flex;
    justify-content:center;
    align-items:center;
    span{
      margin-top:1/18.75rem;
      margin-left:4/18.75rem;
    }
  }
  @keyframes animate1{
    0%{
      /* transform:translate(-2.37714rem,-160/21rem); */
      left:187/21rem;
      top:-349/21rem;
      transform:scale(3);
    }
    10%{
      transform:scale(1.5);
    }
    100%{
      top:(3.15-46/420*20)/2rem;
      left:(3.15-46/420*20)/2rem;
      transform:scale(1);
    }
  }
  .gr{
    color:@gr;
  }
}
</style>
