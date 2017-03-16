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
        path: '*',
        redirect: '/'
    }
];

export default routers;