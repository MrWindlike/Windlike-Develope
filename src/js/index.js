import Vue from 'vue'
import App from '../index.vue'
require('./functions/Tween.js')
require('../style/normalize.css')

new Vue({
  el: '#app',
  render: h => h(App)
})