import Vue from 'vue'
import Antd from 'ant-design-vue'

// 引入jshint用于实现js自动补全提示
import jshint from 'jshint'

// 引入代码编辑器
import { codemirror } from 'vue-codemirror'

import 'ant-design-vue/dist/antd.css'

import 'codemirror/lib/codemirror.css'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(codemirror)

window.JSHINT = jshint.JSHINT

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
