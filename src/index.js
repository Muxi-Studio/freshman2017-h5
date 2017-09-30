import Vue from 'vue'
import App from './components/App'

import vueFinger from 'vue-finger'

Vue.use(vueFinger)

new Vue({
	el: '#app',
	render: h => h(App)
})
