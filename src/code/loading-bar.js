let code = {};

code.router = `
// 部分代码省略
import iView from 'iview';
Vue.use(iView);

router.beforeEach((transition) => {
    iView.LoadingBar.start();
    transition.next();
});

router.afterEach((transition) => {
    iView.LoadingBar.finish();
});
`;

code.ajax = `
<script>
// 以jQuery的Ajax为例，部分代码省略
import $ from 'jquery';
export default {
    methods: {
        getData () {
            this.$Loading.start();
            $.ajax({
                url: '/api/someurl',
                type: 'get',
                success: () => {
                    this.$Loading.finish();
                }
                error: () => {
                    this.$Loading.error();
                }
            });
        }
    }
}
</script>
`;

code.base = `
<template>
    <i-button @click="start">Start</i-button>
    <i-button @click="finish">Finish</i-button>
    <i-button @click="error">Error</i-button>
</template>
<script>
    export default {
        methods: {
            start () {
                this.$Loading.start();
            },
            finish () {
                this.$Loading.finish();
            },
            error () {
                this.$Loading.error();
            }
        }
    }
</script>
`;

code.config = `
this.$Loading.config({
    color: '#5cb85c',
    failedColor: '#f0ad4e',
    height: 5
});
`;

export default code;