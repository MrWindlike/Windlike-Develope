<template>
	<div class="trapezoidBox">
		<div class="right"></div>
		<div class="bg"></div>
	</div>
</template>

<script>
export default {

  name: 'trapezoidBox',

  data () {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>
.trapezoidBox{
	position:relative;
	margin:0 auto;
	width:90%;
	height:100vh;

	.right{
		z-index: 3;
		position: absolute;
		top: 0;
		left:0;
		height: 100%;
		width: 100%;
		background: linear-gradient(285deg,rgba(gray,.9) 0,rgba(gray,.9) 50%, transparent 0);
	}

	.bg{
		z-index: 2;
		position:absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: url(../../resource/img/technologe-screens-monitors@1600x1067.jpg) 0 / cover;
	}
}
</style>