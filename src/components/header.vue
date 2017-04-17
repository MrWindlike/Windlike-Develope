<template>
	<div class="header" :style="{background:background}">
		<div class="list" @click="toggle"></div>
		<div class="title">Windlike</div><!-- 
	 --><div class="navWrap" :style="{height:navHeight}">
			<a 
			:href="i.url" 
			:class="{nav:true, active:active===index}" 
			v-for="(i,index) of navigations">{{i.name}}</a>
			<div
			class="border"
			:style="{width:borderWidth,
					left:borderLeft, 
					transitionDuration:borderTransition}">
			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'header',
  props : {
  	navigations : {
  		type : Array
  	},
  	active : {
  		type : Number,
  		default : 0
  	},
  	transparent : {
  		type : Boolean,
  		default : true
  	}
  },
  data () {
    return {
    	/*default*/
    	borderWidth : 0,
    	borderLeft : 0,
    	borderTransition : '0s',
    	navHeight : 0,
    	num : 0,
    	background : 'auto'
    };
  },
  mounted : function(){
  	var _this = this;
  	this.navs = this.$el.getElementsByClassName('nav');
  	this.border = this.$el.getElementsByClassName('border')[0];
  	this.num = this.navs.length;
  	for(var i = 0;i < this.navs.length; i++){
	  	this.navs[i].addEventListener('mouseenter', function(event){
	  		_this.borderTransition = '.3s';
	  		_this.borderChange(event.target);
	  		
	  	});
	  	this.navs[i].addEventListener('mouseout', function(event){
	  		_this.borderChange(_this.$el.getElementsByClassName('active')[0]);
	  		
	  	});
    }

   	window.addEventListener('resize', function(){
   		_this.borderChange(_this.$el.getElementsByClassName('active')[0]);
   	});
   	if(this.transparent === true)
	   	document.addEventListener('scroll', function(event){
	   		if(document.body.scrollWidth > 768){
		   		if(document.body.scrollTop > 60)
		   			_this.background = '#3A3C3E';
		   		else{
		   			_this.background = _this.$el.style.background.replace(/rgb/,'rgba').replace(/\)/, ', 0.5)');
		   		}
		   	}
		   	else
		   		_this.background = '#3A3C3E';
	   	});
   else
   		this.background = '#3A3C3E';

   setTimeout(function(){
   		_this.borderChange(_this.$el.getElementsByClassName('active')[0]
   	)},1);
  },
  methods : {
  	borderChange : function(target){
  		var left = 0;
  		var interval = 0;

  		if(target !== this.navs[0]){
  			interval = parseInt(getComputedStyle(this.navs[1], false)['paddingLeft']);
  			left += interval;
  		}
  		for(var i = 0;this.navs[i] !== target; i++){
  			left += this.navs[i].offsetWidth;
  		}
  		this.borderWidth = 'calc(' + (target.offsetWidth - interval) + 'px + 1em)';
  		this.borderLeft = 'calc(' + left + 'px - .5em)';
  	},
  	toggle : function(){
  		if(this.navHeight === 0)
	  		this.navHeight = this.$el.offsetHeight*this.num + 'px';
	  	else
	  		this.navHeight = 0;
  	}
  }
};
</script>

<style lang="scss" scoped>
@import "~../style/Windlike";

a{
  color:white;
  text-decoration: none;
}

.no-transparent{
	background:#3A3C3E;
}

@mixin header($big_background:#3A3C3E, $small_background:$big_background){
	z-index:99;
	width: 100%;
	@include clearfix;
	transition:background .3s ease;

	.title{
		color: white;
		vertical-align: top;
		display: inline-block;
		font-family: BrushScriptStd;
		font-size: 2em;
		line-height: 55px;
		padding-top: 5px
	}

	.navWrap{
		position: relative;
		transition: all .3s ease;
		font-family: Candara;
		.nav{
			line-height: 60px;
			color: rgb(200,200,200);
			text-decoration: none;

			&:hover{
				color:white;
			}
		}

		.active{
			color: white;
		}
	}

	@media all and (min-width: 1201px) , (min-width:769px) and (max-width:1200px){
		&{
			background:$big_background;
		}

		.list{
			display: none;
		}

		.title{
			float: left;
			margin-left: 1em;
			
		}
		
		.navWrap{
			margin-right: 5%;
			display: inline-block;
			float: right;
			text-align: center;
			height: auto !important;
		}

		.nav{
			display: inline-block;
			font-size: 1.5em;

			&:nth-of-type(1)~a{
				padding-left:1em;
			}
		}

		.border{
			height: 3px;
			position: absolute;
			bottom: 0;
			background: white;
			transition: all ease;
		}
	}

	@media all and (min-width:769px) and (max-width:1200px){

		.title{
			font-size:1.8em;	
		}

		.nav{
			font-size: 1.2em;
		}

	}

	@media all and (max-width: 768px){
		&{
			text-align: center;
			background:$small_background;
		}

		.list{
			display: inline-block;
			position: absolute;
			left: 1em;

			&:before{
				content:"\e026";
				color: white;
				line-height: 60px;
				font-size: 1.5em;
				font-family: 'icomoon';
			}
		}

		.title{
			font-size: 1.5em;
		}

		.navWrap{
			overflow: hidden;
			height: 0;
		}

		.nav{
			font-size: 1em;
			display: block;
		}

		.border{
			display: none;
		}
	}
}

.header{
	@include header(rgba(#3A3C3E,0.5), #3A3C3E);
}
</style>