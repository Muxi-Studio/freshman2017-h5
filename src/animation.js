import Vue from 'vue'
import Animation from './components/test-animation'

import vueFinger from 'vue-finger'

Vue.use(vueFinger)

new Vue({
	el: '#animation',
	render: h => h(Animation)
})