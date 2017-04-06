<template>
	<div class="loading">
		<div class="loadingWrap">
			<div class="loadingBox">
				<template v-for="i of 3">
					<div class="squareLoading" v-for="i of 3"></div>
				</template>
			</div>
			<!-- <div class="circleLoading"></div> -->
			<div class="loadingBarWrap">
				<div 
				@transitionend="loadend"
				class="loadingBar" 
				:style="{transitionDuration:time,width:width}">
					<div class="loadingNum">{{num}}%</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'loading',

  data () {
    return {
    	time : '10s',
    	width : '',
    	num : 0,
    	animateNum : 0,
    	timer : null
    };
  },
  mounted : function(){
  	var _this = this;
  	var barWrap = _this.$el.getElementsByClassName('loadingBarWrap')[0],
  		bar = _this.$el.getElementsByClassName('loadingBar')[0];

  	document.onreadystatechange = function(){
  		if(document.readyState == "interactive"){
  			_this.num = 99;
  			_this.width = '99%';
  		}
  		else if(document.readyState == "complete"){
  			_this.time = '0.5s';
  			_this.num = 100;
  			_this.width = '100%';
  		}
  	};
  	_this.timer = setInterval(function(){
  		_this.num = parseInt(bar.offsetWidth / barWrap.offsetWidth * 100);
  	}, 10);
  },
  methods : {
  	loadend : function(){
  		var _this = this;
  		if(this.num === 100){
  			clearInterval(_this.timer);
	  		this.$emit('loadend');
  		}
  	}
  }
};
</script>

<style lang="scss" scoped>
@import "~../../style/square-loading";
.loading{
	z-index:100;
	position:absolute;
	top:0;
	left:0;
	background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
	width:100%;
	height:100vh;
	display:flex;
	transition:all .6s ease;

	.loadingWrap{
		width: 40%;
		margin:auto;
		
		@keyframes rotateAndScale{
			0% {transform : rotate(0deg) scale(1);}
			50% {transform : rotate(180deg) scale(1.2);}
			100% {transform : rotate(360deg) scale(1);}
		}
		.circleLoading{
			margin:0 auto;
			border-radius:50%;
			border:3px #555 solid;
			border-bottom: 0;
			border-left: 0;
			width: 40px;
			height:40px;
			animation: rotateAndScale 1s infinite linear;
		}

		.loadingBox{
			@include square-loading;
		}

		.loadingBarWrap{
			border-radius: 3px;
			margin-top: 8em;
			width: 100%;
			height:5px;
			background:lighten(#DDE4EF, 8);

			.loadingBar{
				position:relative;
				transition: width ease-in-out;
				height:100%;
				width: 0%;
				background:#4FC1E9;

				.loadingNum{
					position: absolute;
					top: -1.5em;
					right:-1.5em;
					color:#999;
					
					@media all and (min-width:769px){
						font-size: 1.5em;
					}
				}
			}
		}
	}
}
</style>