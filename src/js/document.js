import Vue from 'vue'
import App from '../document.vue'
import VueResource from 'vue-resource'
require('./functions/Tween.js')
require('../style/normalize.css')


Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})