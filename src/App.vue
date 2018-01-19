<template>
  <div id="app">
    <search-header></search-header>
    <div class="routerState">
      <transition :name="transitionName">
         <router-view class="Router"/>
       </transition>
    </div>
    <v-touch @swipeleft="changeViewTo" @swiperight="changeViewBack"  @panmove="move($event)" @panend="addDistance($event)" class="touchClass"></v-touch>
    <div class="playBtn">
      <div class="clickLSite" ref="clickLSite" @click="playershow($event)">
        <div class="album_pic">
        </div>
        <div class="song_info">
          <p>歌名</p>
          <p>歌手</p>
        </div>
      </div>
      <div class="song_play"  @click="play()">
        <span class="icon-play gr" :class="{'mrleft4': !playerState.isPlay, 'icon-play': !playerState.isPlay, 'icon-pause': playerState.isPlay}"></span>
      </div>
    </div>
    <div class="musicPlayer hide" ref="musicPlayer">
      <div class="behindBackground"></div>
      <div class="background"></div>
      <div class="coverBackground"></div>
      <div class="playerTop">
        <div class=playerInfo>
          <span class="icon-angle-down" @click="playerhide($event)"></span>
          <span class="songName">Beautiful (Explicit)</span>
          <span class="songDetail icon-reorder"></span>
        </div>
        <div class="songSinger"><p>— Eminem —</p></div>
        <div class="musicPlayerBtn">
          <span>标准<span class="icon-angle-down"></span></span>
          <span>MV</span>
          <span @click="player">音效</span>
        </div>
      </div>
      <div class="playerCenter">
        <div class="albumCoverShadow"></div>
        <div class="albumCover" :class="{'playRotate': playerState.isPlay, 'playRotateP': !playerState.isPlay}" ref="albumCover"></div>
        <div class="songName1 gr"><p>Beautiful (Explicit) - Eminem</p></div>
      </div>
      <div class="playerBottom">
        <div class="playerProgress">
          <p>00:00</p>
          <div class="progressBar"></div>
          <p>01:20</p>
        </div>
        <div class="playerBtn">
          <span class="icon-random"></span>
          <div><span class="icon-step-backward gr"></span></div>
          <div><span class="gr" :class="{'mrleft-6':!playerState.isPlay, 'icon-play':!playerState.isPlay, 'icon-pause':playerState.isPlay}" @click="play()"></span></div>
          <div><span class="icon-step-forward gr"></span></div>
          <span class="icon-list-ul"></span>
        </div>
        <div class="playerBtn1">
          <span class="icon-heart-empty"></span>
          <span class="icon-download-alt"></span>
          <span class="icon-external-link"></span>
          <span class="icon-comments-alt"></span>
        </div>
      </div>
    </div>
    <audio :src="playerState.musicSrc" ref="audioPlayer" class="hide"></audio>
  </div>
</template>



<script>
import searchHeader from '@/components/searchHeader'
import homePage from '@/page/homePage'
export default {
  name: 'app',
  components:{searchHeader},
  data(){
    return {
        transitionName: 'slide-right',
        divDeltaNow:0,
        playerState:{
          musicSrc:"../static/music/Justin Bieber - What Do You Mean.mp3",
          lyricSrc:"",
          isPlay:false,
          playType:"defalut",
          volume:50,
          canPlay:false
        },
        songInfo:{
          isLike:false,
          isDownload:false
        },
    }
  },
  mounted() {
    const player = this.$refs.audioPlayer;
  },
  methods: {
    changeViewTo: function(){
      this.$router.push({path:'musicHall'});
      this.transitionName = 'slide-left';
    },
    changeViewBack: function(){
      this.$router.push({path:'./'});
      this.transitionName = 'slide-right';
    },
    move: function(e){
      if(e.additionalEvent != "panup" && e.additionalEvent != "pandown"){
        return ;
      }
      let distance = this.divDeltaNow + parseInt(e.deltaY);
      let moveElement = e.target.previousElementSibling.childNodes[0];
      let touchElementHeight = e.target.offsetHeight;
      let maxHeight = moveElement.offsetHeight - touchElementHeight;
      if(distance > 0){
        this.divDeltaNow = 0;
        moveElement.style.transform = "translateY(0px)";
      }else{
          if(Math.abs(distance) < maxHeight){
            moveElement.style.transform = "translateY("+ distance +"px)";
          }else{
            maxHeight = distance > 0 ? maxHeight : -maxHeight;
            moveElement.style.transform = "translateY("+ maxHeight +"px)";
            this.divDeltaNow = maxHeight;
          }
      }
    },
    addDistance: function(e){
      this.divDeltaNow += parseInt(e.deltaY);
    },
    playerhide: function(e){
      this.$refs.musicPlayer.style.display = "none";
    },
    playershow: function(e){
      if(this.playerState.isPlay){
        this.$refs.albumCover.style.animation = ".2s animate3,playRotate 60s linear infinite";
      }else{
        this.$refs.albumCover.style.animation = ".2s animate3";
      }
      this.$refs.musicPlayer.style.display = "block";
    },
    //播放器控制
    play: function(){
      let isPlay = this.playerState.isPlay;
      const player = this.$refs.audioPlayer;
      if(isPlay){
        player.pause();
      }else{
          if(player.readyState ===4){
            player.play();
        }
      }
      this.playerState.isPlay = !isPlay;
    },
    canPlay: function(){
      const player = this.$refs.audioPlayer;
      if(player.readyState === 4){
        return true;
      }else{
        return false;
      }
    },
    player: function(){
        const player = {
          musicSrc: this.playerState.musicSrc,
          lyricSrc: this.playerState.lyricSrc,
          isPlay: this.playerState.isPlay,
          playType: this.playerState.playType,
          volume: this.playerState.volume
        }
        player.aa = function(){
          alert(1);
        }
        alert(1);
        return player;

    }

  },
}
</script>

<style lang="less">
@gr:#31C37C;
#app {
  width:20rem;
  font-family: 'Microsoft YaHei';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #F3F3F3;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
}
html,body,ul,li,p{
  margin:0;
  padding:0;
  font-family: 'Microsoft YaHei';
}
html{
  background-color: #F3F3F3;
}
@media screen and (width:320px){
    html{
        font-size:320/20px;
    }
}
@media screen and (width:360px){
    html{
        font-size:360/20px;
    }
}
@media screen and (width:375px){
    html{
        font-size:375/20px;
    }
}
@media screen and (width:414px){
    html{
        font-size:414/20px;
    }
}
@media screen and (width:412px){
    html{
        font-size:412/20px;
    }
}
.Router{
  position: absolute;
  transition: all .2s ease;
  width:100%;
}
.slide-left-enter,
.slide-right-leave-active{
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
}

.slide-left-leave-active,
.slide-right-enter {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
}
.routerState{
  position:absolute;
  width:100%;
  height:27.5rem;
  overflow:hidden;
}
.touchClass{
  position:absolute;
  width: 100%;
  height:27.5rem;
  z-index:10000;
}
.gr{
  color:@gr;
}
.hide{
  display:none;
}
@keyframes animate1{
  0%{
     transform:translateY(-100%);
  }
  70%{
     transform:translateY(10%);
  }
  100%{
     transform:translateY(0%);
  }
}
@keyframes animate2{
  0%{
     transform:translateY(100%);
  }
  70%{
     transform:translateY(-8%);
  }
  100%{
     transform:translateY(0%);
  }
}
@keyframes animate3{
  0%{
    opacity:0;
    transform:translate(-1.5em,1.5em);
  }
  100%{
    opacity:1;
    transform:translate(0,0);
  }
}
@keyframes playRotate{
  0%{
    transform:rotateZ(0deg);
  }
  100%{
    transform:rotateZ(360deg);
  }
}
.playBtn{
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
      background:url("../static/pics/beautiful.png") no-repeat;
      background-size:46/420*20rem;
      background-position:center;
      z-index:9999;
      /* animation:.6s animate4; */
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
    .mrleft4{
      margin-top:1/18.75rem;
      margin-left:4/18.75rem;
    }
  }
  @keyframes animate4{
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
}
.musicPlayer{
  position:absolute;
  top:0;
  left:0;
  width:420/21rem;
  height:27.5rem + 0.14*667/18.75rem + 3.15rem;
  overflow:hidden;
  color:rgba(255,255,255,0.6);
  z-index:100000;
  .behindBackground{
    position:absolute;
    top:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,1);
  }
  .background{
    position:absolute;
    top:-15px;
    left:-15px;
    width:450/21rem;
    height:27.5rem + 0.14*667/18.75rem + 3.15rem+1.6rem;
    background:url("../static/pics/beautiful.png") no-repeat;
    background-position:center;
    background-size:180%;
    filter: blur(15px);
  }
  .coverBackground{
    position:absolute;
    top:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.4);
  }
  .playerTop{
      position:absolute;
      top:0;
      height:150/21rem;
      width:100%;
      animation:.4s animate1;
      .playerInfo{
        position:absolute;
        top:20/21rem;
        width:100%;
        height:2rem;
        display: -webkit-flex;
        display: flex;
        justify-content:space-around;
        align-items:center;
        span:first-child{
          font-size:26/18.75rem;
        }
      }
      .songSinger{
        margin-top:70/21rem;
        font-size:16/21rem;
      }
      .musicPlayerBtn{
        margin-top:20/21rem;
        font-size:16/21rem;
        span:first-child{
          padding-right:2/21rem;
        }
        span{
          padding:0 6/21rem 0 6/21rem;
          height:20/21rem;
          line-height:20/21rem;
          display:inline-block;
          border:1px solid rgba(255,255,255,0.6);
          border-radius:0.2rem;
          span{
            border:0;
          }
        }
      }
  }
  .playerCenter{
    position:absolute;
    top:150/21rem;
    height:380/21rem;
    width:100%;
    .albumCoverShadow{
      position:absolute;
      top:2px;
      left:52.5/21rem;
      width:315/21rem;
      height:315/21rem;
      border-radius:50%;
      background-color:rgba(47,32,15,0.4);
      animation:.2s animate3;
    }
    .albumCover{
      position:absolute;
      top:10/21rem;
      left:60/21rem;
      width:300/21rem;
      height:300/21rem;
      border-radius:50%;
      background:url("../static/pics/beautiful.png") no-repeat;
      background-position:center;
    }
    .albumCoverIn{
      animation:.2s animate3;
    }
    .playRotate{
      animation:playRotate 60s linear infinite !important;
    }
    .playRotateP{
      animation:playRotate 60s linear infinite paused !important;
    }
    .songName1{
      position:absolute;
      left:12.5%;
      width:75%;
      text-align:center;
      top:345/21rem;
      font-size:18/21rem;
    }
  }
  .playerBottom{
      position:absolute;
      width:100%;
      top:530/21rem;
      height:214/21rem;
        animation:.4s animate2;
      .playerProgress{
        margin-top:10/21rem;
        margin-left:2.5%;
        width:95%;
        display:flex;
        justify-content:space-around;
        align-items:center;
        p{
          display:inline-block;
          font-size:14/21rem;
        }
        .progressBar{
          height:2px;
          width:221/21rem;
          background-color:rgba(255,255,255,0.6);
        }
      }
      .playerBtn,.playerBtn1{
        display:flex;
        justify-content:space-around;
        align-items:center;
      }
      .playerBtn{
        margin-top:15/21rem;
        margin-left:5%;
        width:90%;
        height:93/21rem;
        span{
          font-size:1rem;
        }
        div:nth-child(2),div:nth-child(3),div:nth-child(4){
          display:flex;
          justify-content:space-around;
          align-items:center;
          width:46/21rem;
          height:46/21rem;
          border:2px solid @gr;
          border-radius:50%;
        }
        div:nth-child(3){
          width:72/21rem;
          height:72/21rem;
        }
        div:nth-child(3) span{
          font-size:35/21rem;
        }
        div:nth-child(2) span{
          font-size:24/21rem;
        }
        div:nth-child(4) span{
          font-size:24/21rem;
        }
      }
      .playerBtn1{
        width:90%;
        height:2rem;
        margin-left:5%;
        margin-top:16/21rem;
        span{
          font-size:26/21rem;
        }
      }
  }
  .mrleft-6{
    margin-left:6/18.75rem;
  }
}

</style>
