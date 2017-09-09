// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import bootstrapReboot from 'bootstrap/scss/bootstrap-reboot.scss'
import bootstrap from 'bootstrap/scss/bootstrap.scss'
import bootstrapGrid from 'bootstrap/scss/bootstrap-grid.scss'
import fontAwesomeCSS from 'font-awesome/scss/font-awesome.scss'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(bootstrapReboot)
Vue.use(bootstrap)
Vue.use(bootstrapGrid)
Vue.use(fontAwesomeCSS)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
