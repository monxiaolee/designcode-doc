/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'components/app.vue';
import Routers from './router';
import Util from './libs/util';
import iView from 'iview';
import locale from 'iview/src/locale/lang/zh-CN';
// import 'iview/dist/styles/iview.css';
import Env from './config/env';

Vue.use(VueRouter);
Vue.use(iView, { locale });

// 开启debug模式
Vue.config.debug = true;

// 路由配置
let router = new VueRouter({
    history: Env != 'local',
    abstract: Env == 'local'
});

router.map(Routers);

router.beforeEach((transition) => {
    iView.LoadingBar.start();
    transition.to.router.app.loading = true;
    Util.title(transition.to.title);
    transition.next();
});

router.afterEach((transition) => {
    iView.LoadingBar.finish();
    transition.to.router.app.loading = false;
    window.scrollTo(0, 0);
});

router.redirect({
    '*': "/"
});
router.start(App, '#app');