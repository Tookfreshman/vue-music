<template lang="html">
  <div class="mainContent">
    <content-menu></content-menu>
    <radio-list></radio-list>
    <song-list></song-list>
  </div>
</template>

<script>
import contentMenu from '@/components/contentMenu'
import radioList from '@/components/radioList'
import songList from '@/components/songList'
export default {
  name:'homePage',
  components:{contentMenu,radioList,songList}
}
</script>

<style lang="css" scoped>

</style>
