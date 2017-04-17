<template>
  <div id="app" :style="{height:height}">
    <transition name="fade">
      <v-loading @loadend="loadend=true;height='auto'" v-if="!loadend"></v-loading>
    </transition>
    <v-header class="fixedheader"
     :transparent="false" :navigations="header" :active="1"></v-header>
    <main>
      <v-main :msg="msg" @next="changeIndex" :index="index"></v-main>
      <v-nav :msg="msg" :i="i" :j="j" @setIndex="setIndex"></v-nav>
    </main>
    <v-footer></v-footer>
    <v-topButton></v-topButton>
  </div>
</template>

<script>
import loading from './components/loading.vue'
import header from './components/header.vue'
import verticalNavigation from './components/verticalNavigation.vue'
import main from './components/main.vue'
import footer from './components/footer.vue'
import topButton from './components/topButton.vue'

export default {
  name: 'app',
  data () {
    return {
      msg : null,
      loadend : false,
      height : '100vh',
      i : 0,
      j : 0,
      index : 0,
      header : [
      	{
      		name : 'Home',
      		url : 'index.html'
      	},
      	{
      		name : 'Document',
      		url : 'document.html'
      	},
      	{
      		name : 'About',
      		url : ''
      	},
      	{
      		name : 'WebAPP',
      		url : 'http://www.wind1ike.info'
      	}
      ]
    }
  },
  components : {
    vLoading : loading,
    vHeader : header,
    vNav : verticalNavigation,
    vMain : main,
    vFooter : footer,
    vTopButton : topButton
  },
  mounted : function(){
    var _this = this;
    this.$http({
      url:"./data/document.json",
      method : "get"
    }).then(function(responce){
      _this.msg = responce.body;
    });
  },
  methods : {
    changeIndex : function(index){
      for(var i = 0;index >= this.msg[i].contents.length;i++){
        index -= this.msg[i].contents.length;
      }
      this.i = i;
      this.j = index;

    },
    setIndex : function(array){
      this.index = 0;
      this.i = array[0];
      this.j = array[1];
      for(var index = 0;index < this.i;index++){
        this.index += this.msg[index].contents.length;
        console.log(this.index);
      }
      this.index += this.j;
    }
  }
}
</script>

<style lang="scss">
@import "~./style/Windlike";

.fade-enter, .fade-leave-active{
  opacity:0;
}

::-webkit-scrollbar{
   width: 10px;
   background-color: #333; 
}

::-webkit-scrollbar-thumb  
{  
    border-radius: 10px;  
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);  
    background-color: #555; 
}  

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

html,body{
  font-size: 16px;
  width: 100%;
  height:100%;
}

#app{
  width: 100%;
  @include sticky-footer;
  overflow: hidden;
}

.fixedheader{
  position: fixed;
  top: 0;
  left:0;
}

main{
  position:relative;
  margin:60px auto 0;
  width:100%;
  max-width:1200px;
}
</style>
