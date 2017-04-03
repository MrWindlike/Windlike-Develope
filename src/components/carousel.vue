<template>
	<div class="carouselWrap">
		<slot></slot>
		<div class="carousel" @mouseover="stop" @mouseout="start">
			<template v-for="(i,index) of num">
				<img 
				v-if="index===now"
				@touchstart="initPosition($event)"
				@touchmove="move($event)"
				@touchend="touchend($event)"
				@click="now=index"
				class="img middle"
				:src="'../../resource/img/' + index + '.jpg'">
				<img 
				v-else-if="index===((now + num - 1) % num)"
				@click="now=index"
				class="img left"
				:src="'../../resource/img/' + index + '.jpg'">
				<img 
				v-else-if="index===((now + num + 1) % num)"
				@click="now=index"
				class="img right"
				:src="'../../resource/img/' + index + '.jpg'">
				<img 
				v-else-if="index<((now + num - 1) % num)"
				@click="now=index"
				class="img left-hidden"
				:src="'../../resource/img/' + index + '.jpg'">
				<img 
				v-else-if="index>((now + num + 1) % num)"
				@click="now=index"		
				class="img right-hidden"
				:src="'../../resource/img/' + index + '.jpg'">
			</template>
			<div class="left-arrow" @click="now=(now===0?num-1:now-1)"></div>
			<div class="right-arrow" @click="now=(now+1)%num"></div>
			<div class="indexWrap">
				<template v-for="(i,index) of num">
					<div 
					@mouseover="now = index"
					:class="{index : true, activeIndex : index===now}" 
					v-if="way === 'hover'"></div>
					<div 
					@click="now = index"
					:class="{index : true, activeIndex : index===now}" 
					v-else></div>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'carousel',
  props : {
  	num : {
  		type : Number,
  		required: true
  	},
  	way : {
  		type : String,
  		default : 'hover'	/*can choice 'hover' or 'click' way to change*/
  	}
  },
  data () {
    return {
    	now : 0,
    	originX : 0,
    	startX : 0,
    	endX : 0,
    	moveX : 0, 
    	translateX : 0, 
    	startTime : 0, 
    	endTime : 0, 
    	allTime : 0,
    	timer : null,
    	interval : 3000
    };
  },
  watch : {
  	now : function(newValue, oldValue){
  		if(document.body.scrollWidth >= 1180){
  			this.imgs[oldValue].setAttribute('style', '');
  			this.imgs[this.now].setAttribute('style', 'z-index:2');
  		}
  		else{
  			this.imgs[oldValue].setAttribute('style', '');
  			this.imgs[this.now].setAttribute('style', 'z-index:2;transform:translate3d(0,0,0)');
  		}
  	}
  },
  methods : {
  	initPosition : function(event){
  		this.stop();
  		this.startX = this.originX = event.changedTouches[0].pageX;
  		this.startTime = new Date().getTime();
  	},
  	move : function(event){
  		if(document.documentElement.scrollWidth < 1180){
  			this.endX = event.changedTouches[0].pageX;
  			this.translateX = parseInt(event.target.style.transform.substring(12).split(',')[0]);
  			this.moveX = this.translateX + (this.endX - this.startX);
  				
  			event.target.setAttribute('style', "transition-duration:0s;transform:translate3d(" + this.moveX + "px,0px,0)");
  			this.imgs[(this.now+this.num-1)%this.num].setAttribute('style', "transition-duration:0s;transform:translate3d(calc(-100% + " + this.moveX + "px),0px,0)");
  			this.imgs[(this.now+this.num+1)%this.num].setAttribute('style', "transition-duration:0s;transform:translate3d(calc(100% + " + this.moveX + "px),0px,0)");

  			this.startX = this.endX;
  		}
  	},
  	touchend : function(event){
  		this.start();

  		if(document.documentElement.scrollWidth < 1180){
  			this.endTime = new Date().getTime();
  			this.allTime = this.endTime - this.startTime;
  			this.endX = event.changedTouches[0].pageX;
  			var lastmove = this.endX - this.originX;

  			if(this.allTime <= 300
  			 || Math.abs(lastmove / document.documentElement.scrollWidth) >= 0.5){
  			 	event.target.setAttribute('style', '');
  			 	this.imgs[(this.now+this.num-1)%this.num].setAttribute('style', '');
  			 	this.imgs[(this.now+this.num+1)%this.num].setAttribute('style', '');
  			 	if(lastmove < 0)
	  				this.now=(this.now+1)%this.num;
	  			else if(lastmove > 0)
	  				this.now=(this.now===0?this.num-1:this.now-1);
	  		}
  			else{
  				event.target.setAttribute('style', '');
  				this.imgs[(this.now+this.num-1)%this.num].setAttribute('style', '');
  				this.imgs[(this.now+this.num+1)%this.num].setAttribute('style', '');
  			}
  			
  		}
  	},
  	stop : function(){
  		clearInterval(this.timer);
  	},
  	start : function(){
  		
  		var _this = this;
		_this.timer = setInterval(function(){
			_this.now=(_this.now+1)%_this.num;
		},_this.interval);
  	}
  },
  mounted : function(){
  	var _this = this;
  	this.imgs = _this.$el.getElementsByTagName('img');
  	var img = _this.$el.getElementsByClassName('middle')[0];
  	if(document.body.scrollWidth >= 1180)
  		img.setAttribute('style', 'z-index:2');
  	else
  		img.setAttribute('style', 'z-index:2;transform:translate3d(0,0,0)');

  	window.addEventListener('resize', function(){
  		var img = _this.$el.getElementsByClassName('middle')[0];
  		console.log(document.body.scrollWidth);
  		if(document.body.scrollWidth >= 1180)
  			img.setAttribute('style', 'z-index:2');
  		else
  			img.setAttribute('style', 'z-index:2;transform:translate3d(0,0,0)');
  	});

  	this.timer = setInterval(function(){
  		_this.now=(_this.now+1)%_this.num;
  	},this.interval);
  }
};
</script>

<style lang="scss" scoped>
@mixin carousel($arrowColor:black,$big_carouselWidth:100%,$middle_carouselWidth:90%,
				$middle_scale:0.4){


	@media all and (max-width: 768px){
		&{
			width: 100%;
		}

		.title{
			font-size:1.5em;
		}
	}

	.carousel{
		position: relative;
		overflow: hidden;

		&:hover .left-arrow{
			opacity: 1;
		}

		.left-arrow{
			position: absolute;
			left: 0;
			top: 50%;
			transform: translate(0, -50%);
			z-index: 3;
			opacity: 0;
			transition: opacity .3s ease;
			
			&:before{
				content:"\e908";
				font-family: 'icomoon';
				font-size: 2.5em;	
				color:$arrowColor;	
			}
		}
	
		&:hover .right-arrow{
			opacity: 1;
		}

		.right-arrow{
			position: absolute;
			right: 0;
			z-index: 3;
			top: 50%;
			transform: translate(0, -50%);
			opacity: 0;
			transition: opacity .3s ease;

			&:before{
				content:"\e909";
				font-family: 'icomoon';
				font-size: 2.5em;
				color:$arrowColor;
			}
		}
		.indexWrap{
			position:absolute;
			left:50%;
			transform:translateX(-50%);
			bottom:0px;
			z-index: 2;

			.index{
				display: inline-block;
				padding:5px 0;
				cursor: pointer;

				&:before{
					content:"";
					display: inline-block;
					height: 2.5px;
					background: rgba(0,0,0,.5);
				}	
			}

			.activeIndex{
				&:before{
					background: white;
				}
			}
		}

		@media all and (min-width: 1201px){
			&{
				margin:auto;
				width: $big_carouselWidth;
				height: 300px;
			}

			.img{
				position: absolute;
				top: 0;
				width: 751px;
				height: 300px;
				transition: all ease .4s;
			}

			.left-hidden{
				left:-50px;
				opacity: 0;
				transform:translate(-100%) scale(0.81);
			}

			.left{
				left:0px;
				transform: scale(0.81);
				opacity: 0.71;

				&:hover{
					opacity:0.81;
				}
			}

			.middle{
				left:50%;
				transform:translate(-50%);
				z-index: 2;
			}

			.right{
				right:0px;
				transform:scale(0.81);
				opacity: 0.71;

				&:hover{
					opacity:0.81;
				}
			}

			.right-hidden{
				right:-50px;
				opacity: 0;
				transform:translate(100%) scale(0.6);
			}

			.index{
				&:before{
					width:30px;
					margin:0 5px;
				}
			}
		}

		@media all and (max-width: 1200px) and (min-width: 767px){
			&{
				margin:0 auto;
				width: $middle_carouselWidth;
				padding-bottom:$middle_carouselWidth*$middle_scale;
			}

			.img{
				position: absolute;
				width: 100%;
				left: 0;
				top: 0;
				transition: transform ease .4s;
			}
			
			.left-hidden, .right-hidden{
				display: none;
			}

			.left{
				transform: translate(-100%);
			}

			.right{
				transform: translate(100%);
			}

			.index{
				&:before{
					width:20px;
					margin:0 3px;
				}
			}

		}

		@media all and (max-width: 768px){

			&{
				margin:auto;
				width: 100%;
				padding-bottom: 40%;
			}

			.img{
				position: absolute;
				width: 100%;
				left: 0;
				top: 0;
				transition: transform ease .4s;
			}

			.left-hidden, .right-hidden{
				display: none;
			}

			.left{
				transform: translate(-100%);
			}

			.middle{
				transform: translate(0,0);
			}

			.right{
				transform: translate(100%);
			}

			.index{
				&:before{
					width:20px;
					margin:0 2px;
				}
			}
		}
		
		
	}
}

.carouselWrap{
	@include carousel($middle_carouselWidth:100%);
}
</style>