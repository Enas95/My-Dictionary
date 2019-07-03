// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* --older documentaion--
import VueFire from 'vuefire'
import { firestorePlugin } from 'vuefire'*/

import Vue from 'vue'
import { rtdbPlugin } from 'vuefire'
import {db} from './firebase'
import App from './App'

Vue.use(rtdbPlugin);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
