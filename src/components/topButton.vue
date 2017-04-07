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
  		function animate (time) {
        requestAnimationFrame(animate)
        TWEEN.update(time)
      }
	  new TWEEN.Tween({ tweeningNumber: document.body.scrollTop })
	    .easing(TWEEN.Easing.Quadratic.InOut)
	    .to({ tweeningNumber: 0 }, 500)
	    .onUpdate(function () {
	      document.body.scrollTop = this.tweeningNumber.toFixed(0)
	    })
	    .start()
	  animate();
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
  height: 1.8em;
  width: 1.8em;
  line-height: 1.8em;

  &:hover{
  	background:rgba(200,200,200,.6);
  }

  @media all and (min-width:1201px) {
  	font-size: 1.8em;
  }

  @media all and (min-width:769px) and (max-width:1200px){
  	font-size: 1.5em;
  }

  @media all and (max-width:768px) {
  	
  	font-size: 1em;
  }
}
</style>