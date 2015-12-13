var Vue = require('vue')

var Counter = require('./components/counter.vue')
var Hello = require('./components/hello.vue')

new Vue({
	el: 'body',
	components: {
		counter: Counter,
		hello: Hello
	}
})