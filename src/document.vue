<template>
  <div id="app" :style="{height:height}">
    <transition name="fade">
      <v-loading @loadend="loadend=true;height='auto'" v-if="!loadend"></v-loading>
    </transition>
    <v-header class="fixedheader"
     :transparent="false" :navigations="header" :active="1"></v-header>
    <main>
      <v-main :msg="msg" :template="template" @next="changeIndex" :index="index"></v-main>
      <v-nav :msg="msg" :i="i" :j="j" @setIndex="setIndex"></v-nav>
<!--       <iframe :src="src" height="5000px" scrolling="no" frameborder="0"></iframe> -->
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
      template : [],
      src : "",
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
    axios.get("./data/template.xml").then(function(response){
      let request = loadXML(response.request.response);
      let template = request.getElementsByClassName('content');
      let maintitle = request.getElementsByTagName('h2');
      let titles = [], sub = [];
      let index = 0;

      for(let i=0;i<maintitle.length;i++){
          let subtitle = request.getElementsByTagName('main')[i].getElementsByTagName('h3');
          let array = [];
          sub = [];
          titles[i] = {};
          titles[i].maintitle = maintitle[i].innerHTML;
          
          for(let j=0;j<subtitle.length;j++){
            sub.push(subtitle[j].innerHTML);
            array.push(template[index]);
            index++;
          }
          _this.template.push(array);
          titles[i].subtitles = sub;
      }

      _this.msg = titles;
      console.log(response.request.response);

    });
   
    /*$.ajaxPrefilter( function (options) {
      if (options.crossDomain && jQuery.support.cors) {
        var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
        options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
        //options.url = "http://cors.corsproxy.io/url=" + options.url;
      }
    });
   var musicCode;          
   var share_link="http://mp.weixin.qq.com/s/QoR_2jy94pMbXgCqBAmI0w";//微信文章地址

   $.get(
     share_link,
      function (response) {
          console.log("> ", response); 
          var html = response;
          html=html.replace(/data-src/g, "src"); 

          var begin = html.indexOf("voice_encode_fileid") + 21; 
          musicCode = html.substring(begin,begin + 28);

          html=html.replace(/\/cgi-bin/g, "https://mp.weixin.qq.com/cgi-bin");
          var html_src = 'data:text/html;charset=utf-8,' + html;
          $("iframe").attr("src" , html_src);
          $("<audio autoplay src=\'http://res.wx.qq.com/voice/getvoice?mediaid=" + musicCode + "\'/>").appendTo($("body"));
  });*/
  
  //http://res.wx.qq.com/voice/getvoice?mediaid=MzIyOTE4NjcxNl8yNjU0NDU0Njc2
   /*axios.get(
        "http://cors-anywhere.herokuapp.com/http://mp.weixin.qq.com/s?timestamp=1492953376&src=3&ver=1&signature=hzvwxkrn2Ax8yggRkJOZAUVbeka5MjxD*1k98H-kRyobQIm06WV4czCddSWlfTs4s79qdRoG43LNJkK4LxGkqY8s6MhhwBgNmFtleoBGEMj*BLXkitgwSV7kOBJs5wA*Zi4PkOoDQD3YQsIpthG5agJdFBx5CWtPjc12IYWF2vE="
    ).then(function(response){
      var html = response.request.response;
      html=html.replace(/data-src/g, "src");
      var html_src = 'data:text/html;charset=utf-8,' + html;
      _this.src = html_src;
    });*/
  },
  methods : {
    changeIndex : function(index){
      for(var i = 0;index >= this.msg[i].subtitles.length;i++){
        index -= this.msg[i].subtitles.length;
      }
      this.i = i;
      this.j = index;

    },
    setIndex : function(array){
      this.index = 0;
      this.i = array[0];
      this.j = array[1];
      for(var index = 0;index < this.i;index++){
        this.index += this.msg[index].subtitles.length;
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
  font-family: Times New Roman;
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
  display: inline-block;
  width: 100%;
  max-width: 1400px;
  
}

iframe{
  overflow: visible;
  width: 100%;

  &::-webkit-scrollbar{
     width: 0px; 
  }
}
</style>
