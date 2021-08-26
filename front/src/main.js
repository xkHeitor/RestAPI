import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

import router from './routes/router';
import './plugins/bootstrap-vue';
import './plugins/simple-alert';
import './plugins/moment';

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')