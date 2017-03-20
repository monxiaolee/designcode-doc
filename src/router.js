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
        path: '*',
        redirect: '/'
    }
];

export default routers;