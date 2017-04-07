<template>
	<div class="loading">
		<div class="loadingWrap">
			<!-- <div class="loadingBox">
				<template v-for="i of 3">
					<div class="squareLoading" v-for="i of 3"></div>
				</template>
			</div> -->
			<div class="loadingBox">
				<div class="halfCircle"></div>
				<div class="halfCircle"></div>
				<span class="ball"></span>
				<span class="ball"></span>
				<span class="ball"></span>
				<span class="ball"></span>
			</div>
			<div class="loadingBarWrap">
				<div 
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
  	var time = Math.random() + 2, BeginTime = new Date();
  	var barWrap = _this.$el.getElementsByClassName('loadingBarWrap')[0],
  		bar = _this.$el.getElementsByClassName('loadingBar')[0];

  	document.onreadystatechange = function(){
  		if(document.readyState == "interactive"){
  			var n = parseInt(Math.random()*10) + 90;
  			_this.width = n + '%';
  		}
  		else if(document.readyState == "complete"){
  			/*at least 2+s*/
  			var nowTime = new Date(), interval = nowTime - BeginTime;
  			if(interval > time*1000){
  				_this.time = '0.5s';
  				_this.width = '100%';
  			}
  			else{
  				setTimeout(function(){
  					_this.time = '0.5s';
  					_this.width = '100%';
  				},time*1000 - interval);
  			}
  		}
  	};
  	_this.timer = setInterval(function(){
  		_this.num = parseInt(bar.offsetWidth / barWrap.offsetWidth * 100);
  	}, 10);
  },
  watch : {
  	num : function(){
  		if(this.num === 100){
  			clearInterval(this.timer);
	  		this.$emit('loadend');
  		}
  	}
  }
};
</script>

<style lang="scss" scoped>
@import "~../../style/square-loading";
@import "~../../style/eatPeas-loading";
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
		
		.loadingBox{
			@include eatPeas-loading($time:0.25s);
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
					right:0;
					transform: translate(50%);
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