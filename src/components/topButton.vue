<template>
	<div class="topButton" @click="toTop">Top</div>
</template>

<script>
export default {

  name: 'component_name',

  data () {
    return {

    };
  },
  methods : {
  	toTop : function(){
      var start = new Date();
      var _run  = function(){
        var end = new Date();
    		var top = Tween.Expo.easeInOut(end - start, document.body.scrollTop, -document.body.scrollTop,600);
        document.body.scrollTop = top;
        if (end - start < 600) 
          requestAnimationFrame(_run);
      }
      _run();
    }
  }
};
</script>

<style lang="scss" scoped>
.topButton{
  position:fixed;
  right: 3%;
  bottom:5%;
  color: #333;
  text-align:center;
  cursor: pointer;
  border-radius:50%;
  background:rgba(200,200,200,.3);
  transition: background .3s ease;
  height: 2em;
  width: 2em;
  line-height: 2em;

  &:hover{
  	background:rgba(200,200,200,.6);
  }

  @media all and (min-width:1201px) {
  	font-size: 1.5em;
  }

  @media all and (min-width:769px) and (max-width:1200px){
  	font-size: 1.2em;
  }

  @media all and (max-width:768px) {
  	
  	font-size: 1em;
  }
}
</style>