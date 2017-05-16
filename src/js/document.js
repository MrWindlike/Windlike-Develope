import Vue from 'vue'
import App from '../document.vue'
import axios from 'axios';
require('./functions/Tween.js')
require('./functions/LoadXML.js')
require('../style/normalize.css')

window.axios = axios;

new Vue({
  el: '#app',
  render: h => h(App)
})