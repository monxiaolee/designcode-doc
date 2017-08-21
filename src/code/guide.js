let introduce = {};
let install = {};
let start = {};
let standard = {};
let i18n = {};
let theme = {};

introduce.install = `
$ npm install iview --save
`;

introduce.script= `
<script type="text/javascript" src="iview.min.js"></script>
`;

introduce.demo = `
<template>
    <Slider v-model="value" range></Slider>
</template>
<script>
    export default {
        data () {
            return {
                value: [20, 50]
            }
        }
    }
</script>
`;

install.cdn = `
<!-- 引入Vue -->
<script src="//vuejs.org/js/vue.min.js"></script>
<!-- 引入样式 -->
<link rel="stylesheet" href="//unpkg.com/iview/dist/styles/iview.css">
<!-- 引入组件库 -->
<script src="//unpkg.com/iview/dist/iview.min.js"></script>
`;

install.demo = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>iview example</title>
    <link rel="stylesheet" type="text/css" href="http://unpkg.com/iview/dist/styles/iview.css">
    <script type="text/javascript" src="http://vuejs.org/js/vue.min.js"></script>
    <script type="text/javascript" src="http://unpkg.com/iview/dist/iview.min.js"></script>
</head>
<body>
<div id="app">
    <i-button @click="show">Click me!</i-button>
    <Modal v-model="visible" title="Welcome">欢迎使用 iView</Modal>
</div>
<script>
    new Vue({
        el: '#app',
        data: {
            visible: false
        },
        methods: {
            show: function () {
                this.visible = true;
            }
        }
    })
  </script>
</body>
</html>
`;

install.install = `
$ npm install iview --save
`;

install.import = `
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'components/app.vue';    // 路由挂载
import Routers from './router.js';       // 路由列表
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS

Vue.use(VueRouter);
Vue.use(iView);

// 路由配置
const RouterConfig = {
    routes: Routers
};
const router = new VueRouter(RouterConfig);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
`;

install.need = `
import Checkbox from 'iview/src/components/checkbox';
`;

install.warning = `
module: {
    rules: [
        { test: /iview.src.*?js$/, loader: 'babel-loader' },
        { test: /\\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
}
`;

start.dev = `
// 如果是第一次使用，先运行init，以后直接运行dev
$ npm run init
$ npm run dev
`;

start.prod = `
$ npm run build
`;

standard.prop = `
正确的使用方法：
<Page :current="1" :total="100"></Page>

错误的使用方法：
<Page current="1" total="100"></Page>
`;

i18n.demo = `
import Vue from 'vue';
import iView from 'iview';
import locale from 'iview/dist/locale/en-US';

Vue.use(iView, { locale });
`;

i18n.vue = `
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import iView from 'iview';
import zhLocale from 'iview/dist/locale/zh-CN';
import enLocale from 'iview/dist/locale/en-US';

Vue.use(VueI18n);
Vue.use(iView);

Vue.config.lang = 'zh-CN';
Vue.locale('zh-CN', zhLocale);
Vue.locale('en-US', enLocale);
// 注意：使用 vue-i18n 时，需要将本地的语言包和 iView 的语言包合并
`;

theme.less = `
@import '~iview/src/styles/index.less';

// 下面是要覆盖的变量，例如：
@primary-color: #8c0776;
`;

theme.lessImport = `
import Vue from 'vue';
import iView from 'iview';
import '../my-theme/index.less';

Vue.use(iView);
`;

theme.install = `
npm install iview-theme -g
`;

theme.init = `
iview-theme init my-theme
`;

theme.build = `
cd my-theme
iview-theme build -o dist/
`;

theme.import = `
import Vue from 'vue';
import iView from 'iview';
import '../my-theme/dist/iview.css';

Vue.use(iView);
`;

export default {
    introduce,
    install,
    start,
    standard,
    i18n,
    theme
}