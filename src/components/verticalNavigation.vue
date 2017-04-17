<template>
	<div class="navWrap">
		<div class="navs">
			<div class="nav" v-for="(item,firstIndex) of msg">
				<div 
				@click="setIndex(firstIndex,0)"
				:class="{firstNav:true,active:i===firstIndex}"
				v-show="show">{{item.maintitle}}</div>
				<div 
				@click="setIndex(firstIndex,secondIndex)"
				:class="{secondNav:true,active:i===firstIndex&&j===secondIndex}" 
				v-for="(content,secondIndex) of item.contents"
				v-show="firstIndex===i&&show">{{content.subtitle}}</div>
			</div>
			<div 
			@click="toggleNav"
			:class="{downArrow:downArrow,upArrow:!downArrow}"></div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'verticalNavs',
  props : {
  	navs : {
  		type : Object
  	},
  	msg : {
  		default : null
  	},
  	i : Number,
  	j : Number
  },
  data () {
    return {
    	downArrow : true,
    	show : true
    };
  },
  mounted : function(){
  	var _this = this;
  	if(document.body.offsetWidth > 768)
  		_this.downArrow = true;
  	else
  		_this.show = false;
  	window.addEventListener('resize', function(){
  		if(document.body.offsetWidth > 768){
  			_this.show = true;
  			_this.downArrow = true;
  		}
  		else
  			_this.show = false;
  	},false);
  },
  methods : {
  	setIndex : function(i ,j){
  		this.$emit('setIndex',[i,j]);
  	},
  	toggleNav : function(){
  		if(this.show === false){
  			this.downArrow = false;
  			this.show = true;
  		}
  		else{
  			this.downArrow = true;
  			this.show = false;
  		}
  	}
  }

};
</script>

<style lang="scss" scoped>
@import "~../style/Windlike";
.navWrap{
	float:left;
	width:25%;
	.navs{
		z-index: 3;
		max-height:100%;
		position:fixed;
		top:60px;
		&::-webkit-scrollbar{
		   width: 0px;
		}	

		.firstNav{
			font-size: 1.1em;
			color:#333;
			cursor: pointer;
			padding: .2em 0.8em;
			font-weight: 900;

			&:hover{
				color:black;
			}

		}

		.secondNav{
			color:#555;
			cursor: pointer;
			margin-left: .5em;
			padding: .1em 0.8em;

			&:hover{
				color:black;
			}
		}

		.active{
			color:black;	
		}
	}
	.downArrow,.upArrow{
		@include trapezoid-nav;
		height: 1.2em;
		position: absolute;
		bottom:0;
		left:50%;
		transform: rotateX(180deg) translate(-50%);
		transform-origin: bottom center; 
		cursor: pointer;
	}
	.downArrow:before{
		font-family: "icomoon";
		content: "\e903";
		
	}
	.upArrow:before{
		font-family: "icomoon";
		content: "\e907";
	}

	@media all and (min-width:769px) {
		.active{
			border-left:2px #333 solid !important;
			padding-left:calc(0.8em - 2px) !important;	
		}

		.firstNav:hover{
			border-left:1px #333 solid;
			padding-left:calc(0.8em - 1px);
		}

		.secondNav:hover{
			border-left:1px #333 solid;
			padding-left:calc(0.8em - 1px);
		}

		.downArrow, .upArrow{
			display: none;
		}
	}

	@media all and (max-width:768px) {
		.navs{
			text-align: center;
			background:rgb(240,240,240);
			width: 100%;
		}

		
	}
}
</style>