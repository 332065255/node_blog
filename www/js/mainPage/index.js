import app from './App.vue';
import vueRouter from 'vue-router';
import vue from 'vue';
import list from './list.vue'
import about from './about.vue'
import resource from 'vue-resource';
vue.use(resource);
vue.use(vueRouter);
const routes = [
    // { path: '/', redirect: '/list' },
    { path: '/list', component: list },
    { path: '/about', component: about },
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