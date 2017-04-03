<template>
	<div class="fullScreenBox">
		<div class="contentBox">
			<div class="title">Welcome To Windlike !</div>
			<div class="moreContent"><i>You can learn how to build responsive websites faster here with Vue and Sass.Vue is the progressive JavaScript framework.Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.</i></div>
			<div class="lessContent"><i>You can learn how to build responsive websites faster here with Vue and Sass.</i></div>
			<a href="" class="borderButton"><i>Get Started >></i></a>
		</div>	
	</div>
</template>

<script>
export default {

  name: 'fullScreen',

  data () {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>
@import "~../../style/glass-shine";
@include glass-shine

@mixin fullScreenBox($big_imgUrl,$small_imgUrl,$color:white){
	position: relative;
	margin:0 auto;
	color: $color; 
	height: 100vh;

	&:before{
		content: "";
		position:absolute;
		top:0; left:0;
		width: 100%;
		height: 100%;
		background:radial-gradient(at 50% 50%,rgba(#333,.3) 0, rgba(#333,.8) 70%);

	}
	.contentBox{
		position:absolute;
		left: 50%; top:50%;
		transform: translate(-50%,-50%);
		text-align: center;
		
		.title{
			white-space: pre;
		}
		.moreContent{
			line-height: 1.2em;
		}
		.borderButton{
			padding:.5em;
			display: inline-block;
			border:1px white solid;
			cursor:pointer;
			background-color:rgba(255,255,255,.1);

			&:hover{
				animation: glassShine 1s ease infinite;
			}
		}
	}

	@media screen and (min-width:1201px){
		&{
			width:100%;
			min-height: 700px;
			background:url($big_imgUrl) 0 / cover;
			background-position:0 75%;
		}

		.title{
			font-size: 3em;
		}
		
		.lessContent{
			display: none;
		}

		.moreContent{
			font-size: 2em;
		}

		.borderButton{
			margin:1em;
			font-size: 2.2em;
		}
	}

	@media screen and (min-width:769px) and (max-width:1200px){
		&{
			width:100%;
			min-height: 800px;
			background:url($big_imgUrl) 0 / cover;
			background-size:auto 100%;
			background-position:50% 75%;
		}

		.title{
			font-size: 2.5em;
		}

		.moreContent{
			font-size: 1.5em;
		}

		.lessContent{
			display: none;
		}

		.borderButton{
			margin:1em;
			font-size: 1.8em;
		}
	}

	@media screen and (max-width:768px){
		&{
			background:url($small_imgUrl) 0 / cover;
			background-position:55% 0;
		}

		.title{
			font-size: 2em;
		}

		.moreContent{
			display: none;
		}

		.borderButton{
			font-size: 1.2em;
			margin:.5em;
		}
	}
}

.fullScreenBox{
	@include fullScreenBox(
		$big_imgUrl:'../../resource/img/camera-journal-travel@1600x1200.jpg',
		$small_imgUrl:'../../resource/img/camera-journal-travel@800x600.jpg');
	font-family: Candara, Open Sans;

	.title{
		font-family: BrushScriptStd;
	}
}
</style>