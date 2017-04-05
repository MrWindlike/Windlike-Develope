<template>
	<div class="loading">
		<div class="loadingWrap">
			<div class="loadingBox">
				<template v-for="i of 3">
					<div class="loadingSquare" v-for="i of 3"></div>
				</template>
			</div>
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
    	time : '',
    	width : '',
    	num : 0
    };
  },
  mounted : function(){
  	var _this = this;
  	this.time = Math.random() + 2.5 + 's';
  	setTimeout(function(){
  		_this.width = "100%";
  	},1);
  	function animate (time) {
        requestAnimationFrame(animate)
        TWEEN.update(time)
      }
	  new TWEEN.Tween({ tweeningNumber: 0 })
	    .easing(TWEEN.Easing.Quadratic.InOut)
	    .to({ tweeningNumber: 100 }, parseFloat(_this.time)*1000)
	    .onUpdate(function () {
	      _this.num = this.tweeningNumber.toFixed(0)
	    })
	    .start()
	  animate();
  	
  },
  methods : {
  	loadend : function(){
  		this.$emit('loadend');
  	}
  }
};
</script>

<style lang="scss" scoped>
.loading{
	z-index:100;
	position:absolute;
	top:0;
	left:0;
	background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
	width:100%;
	height:100vh;
	display:flex;
	transition:all .8s ease;

	.loadingWrap{
		width: 40%;
		margin:auto;

		.loadingBox{
			margin:auto;
			transform: rotate(45deg);
			width: 40px;
			height:40px;
			
			.loadingSquare{
				float: left;
				display: inline-block;
				width: 33.33%;
				height:33.33%;
				background:#555;
				animation: ease 1.5s infinite;

				&:nth-of-type(1){
					animation-name: scale-1;
				}
				&:nth-of-type(2){
					animation-name: scale-3;
				}
				&:nth-of-type(3){
					animation-name: scale-6;
				}
				&:nth-of-type(4){
					animation-name: scale-2;
				}
				&:nth-of-type(5){
					animation-name: scale-5;
				}
				&:nth-of-type(6){
					animation-name: scale-8;
				}
				&:nth-of-type(7){
					animation-name: scale-4;
				}
				&:nth-of-type(8){
					animation-name: scale-7;
				}
				&:nth-of-type(9){
					animation-name: scale-9;
				}
			}
			
			$num : 9;
			@for $i from $num through 1{
				@keyframes scale-#{$num - $i + 1}{
					#{($num - $i)*(100/($num + 1))}%  {transform:scale(0);}
					#{($num - $i + 1)*100/($num + 1)}% {transform:scale(1);}
					100% {transform:scale(1);}
				}
				}
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