<template>
	<transition name="fade">
		<div class="bg" @click.self="hide">
			<slot></slot>
		</div>
	</transition>
</template>

<script>
export default {

  name: 'alert',
  data () {
    return {

    };
  },
  methods : {
  	hide : function(){
  		this.$emit('hide');
  	}
  }
};
</script>

<style lang="scss" scoped>
.fade-enter, .fade-active-leave{
	opacity:0;
}
.bg{
	transition:opacity .3s ease;
	display: flex;
	z-index: 99;
	position: fixed;
	top: 0;
	left:0;
	background: rgba(0,0,0,.5);
	width: 100%;
	height: 100%;
}
</style>