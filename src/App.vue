<template>
  <div id="app" :style="{height:height}">
    <transition name="fade">
      <v-loading @loadend="loadend=true;height='auto'" v-show="!loadend"></v-loading>
    </transition>
    <main>
      <v-header class="fixedheader"></v-header>
      <v-box></v-box>
      <v-contentBox :types="features"></v-contentBox>
      <v-listBox :types="modules">
        <div class="title">Modules</div>
      </v-listBox>
      <!-- <v-carousel class="carousel" :num='6'></v-carousel> -->
    </main>
    <v-footer></v-footer>
    <v-topButton></v-topButton>
  </div>
</template>

<script>
import loading from './components/loading.vue'
import topButton from './components/topButton.vue'
import fullScreenBox from './components/fullScreenBox.vue'
import contentBox from './components/contentBox.vue'
import listBox from './components/listBox.vue'
import carousel from './components/carousel.vue'
import header from './components/header.vue'
import footer from './components/footer.vue'
    
export default {
  name: 'app',
  data () {
    return {
      modules : [
        {
          name : 'Animations',
          content :
          [
            'glass-shine',
            'jump',
            'scale-bonce',
            'slide-in',
            'rotate-in'
          ]
        },
        {
          name : 'Mixins',
          content :
          [
            'clearfix',
            'folded-corner',
            'sticky-footer',
            'trapezoid-nav',
            'gradient-line'
          ]
        },
        {
          name : 'Functions',
          content :
          [
            'requestAnimation',
            'slide'
          ]
        },
        {
          name : 'Components',
          content :
          [
            'header',
            'carousel',
            'fullScreenBox',
            'slideBox'
          ]
        }
      ],
      features : [
        {
          name : 'Responsive',
          content : 'You can build absolute RESPONSIVE websites with it.It can make websites adpapt PC and Mobile Phone with layout and touch event.'
        },
        {
          name : 'Beautiful',
          content : 'All Components and Mixins use the latest design in all over the wolrd.'
        },
        {
          name : 'Fast',
          content : 'This plugins is base on Vue, so it will be very fase to run your websites.'
        },
        {
          name : 'Flexible',
          content : 'You can design your Components and Mixins base on it on your way.'
        }
      ],
      loadend : false,
      height : '100vh'
    }
  },
  components : {
    vTopButton : topButton,
    vLoading : loading,
    vBox : fullScreenBox,
    vContentBox : contentBox,
    vListBox : listBox,
    vHeader : header,
    vCarousel : carousel,
    vFooter : footer
  }
}
</script>

<style lang="scss">
@import "~../style/sticky-footer";

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

a{
  color:white;
  text-decoration: none;
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
</style>
