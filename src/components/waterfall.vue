<template>
	<div id='waterfall'>
		<div class="column">
			<div class="box">
				<img width="100%" src="/dist/assets/img/images/0.jpg" alt="">
				<h3 class="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, neque.</h3>
				<div class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto at atque consequatur consequuntur corporis dolor facere, fuga laborum natus, nihil rem repudiandae temporibus ullam ut veniam veritatis voluptas voluptates.</div>
			</div>
			<div class="box">
				<img width="100%" src="/dist/assets/img/images/1.jpg" alt="">
				<h3 class="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, neque.</h3>
				<div class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto at atque consequatur consequuntur corporis dolor facere, fuga laborum natus, nihil rem repudiandae temporibus ullam ut veniam veritatis voluptas voluptates.</div>
			</div>
		</div><!-- 
		 --><div class="column">
			<div class="box">
				<img width="100%" src="/dist/assets/img/images/2.jpg" alt="">
				<h3 class="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, neque.</h3>
				<div class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto at atque consequatur consequuntur corporis dolor facere, fuga laborum natus, nihil rem repudiandae temporibus ullam ut veniam veritatis voluptas voluptates.</div>
			</div>
			<div class="box">
				<img width="100%" src="/dist/assets/img/images/3.jpg" alt="">
				<h3 class="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, neque.</h3>
				<div class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto at atque consequatur consequuntur corporis dolor facere, fuga laborum natus, nihil rem repudiandae temporibus ullam ut veniam veritatis voluptas voluptates.</div>
			</div>
			<div class="box">
				<img width="100%" src="/dist/assets/img/images/9.jpg" alt="">
				<h3 class="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, neque.</h3>
				<div class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto at atque consequatur consequuntur corporis dolor facere, fuga laborum natus, nihil rem repudiandae temporibus ullam ut veniam veritatis voluptas voluptates.</div>
			</div>
		</div><!-- 
		 --><div class="column">
			<div class="box">
				<img width="100%" src="/dist/assets/img/images/4.jpg" alt="">
				<h3 class="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, neque.</h3>
				<div class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto at atque consequatur consequuntur corporis dolor facere, fuga laborum natus, nihil rem repudiandae temporibus ullam ut veniam veritatis voluptas voluptates.</div>
			</div>
			<div class="box">
				<img width="100%" src="/dist/assets/img/images/5.jpg" alt="">
				<h3 class="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, neque.</h3>
				<div class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto at atque consequatur consequuntur corporis dolor facere, fuga laborum natus, nihil rem repudiandae temporibus ullam ut veniam veritatis voluptas voluptates.</div>
			</div>
			<div class="box">
				<img width="100%" src="/dist/assets/img/images/8.jpg" alt="">
				<h3 class="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, neque.</h3>
				<div class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto at atque consequatur consequuntur corporis dolor facere, fuga laborum natus, nihil rem repudiandae temporibus ullam ut veniam veritatis voluptas voluptates.</div>
			</div>
		</div><!-- 
		 --><div class="column">
			<div class="box">
				<img width="100%" src="/dist/assets/img/images/6.jpg" alt="">
				<h3 class="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, neque.</h3>
				<div class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto at atque consequatur consequuntur corporis dolor facere, fuga laborum natus, nihil rem repudiandae temporibus ullam ut veniam veritatis voluptas voluptates.</div>
			</div>
			<div class="box">
				<img width="100%" src="/dist/assets/img/images/7.jpg" alt="">
				<h3 class="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, neque.</h3>
				<div class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto at atque consequatur consequuntur corporis dolor facere, fuga laborum natus, nihil rem repudiandae temporibus ullam ut veniam veritatis voluptas voluptates.</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'waterfall',

  data () {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>

#waterfall{
	width:100%;
	float:left;
	padding-bottom:15px;
	
	@at-root .column{
		display: inline-block;
		width: calc(25% - 17.5px);
		margin-left: 15px;
		vertical-align: top;

		@at-root .box{
			position:relative;
			margin-top: 1.2em;
			padding-bottom: 1em;
			box-shadow: 0 0 5px 2px #999;
			transition: all ease 0.3s;

			&:hover{
				box-shadow: 0 0 15px 5px #999;
				transform: scale(1.02);
			}

			@at-root .title{
				text-align: center;
			}

			@at-root .content{
				padding:0 1em 0 1.5em;
				font-size: 1.2em;
				line-height: 1.42857143;
				text-indent: 1em;
				word-break: break-all;

				&:first-letter{
					color:red;
					font-size: 1.5em;
				}

			}
		}
	}
	
}
</style>