import app from './App.vue';
import vueRouter from 'vue-router';
import vue from 'vue';
const routes = [
    // { path: '/', redirect: '/vod' },
    // { path: '/vod', component: Vod },
]
const router = new vueRouter({
    routes // （缩写）相当于 routes: routes
})
var vm = new vue({
    el: "#root",
    router,
    render: function(h) {
        return h(app);
    }

})