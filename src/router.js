/**
 * Created by aresn on 16/8/22.
 */
const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: require('./views/index.vue')
    },
    {
        path: '/cli',
        meta: {
            title: 'iView Cli 可视化脚手架'
        },
        component: require('./views/cli.vue')
    },
    {
        path: '/live',
        meta: {
            title: '讲堂'
        },
        component: require('./views/live.vue')
    },
    {
        path: '/docs/guide/introduce',
        meta: {
            title: 'iView介绍'
        },
        component: require('./views/guide/introduce.vue')
    },
    {
        path: '/docs/guide/design',
        meta: {
            title: '设计原则'
        },
        component: require('./views/guide/design.vue')
    },
    {
        path: '/docs/guide/layout',
        meta: {
            title: '布局'
        },
        component: require('./views/guide/layout.vue')
    },
    {
        path: '/docs/guide/standard',
        meta: {
            title: '参与贡献'
        },
        component: require('./views/guide/standard.vue')
    },
    {
        path: '/docs/practice/case',
        meta: {
            title: '实践案例'
        },
        component: require('./views/practice/case.vue')
    },
    {
        path: '/docs/practice/logo',
        meta: {
            title: 'iView Logo 设计思路'
        },
        component: require('./views/practice/logo.vue')
    },
    {
        path: '*',
        redirect: '/'
    }
];

export default routers;