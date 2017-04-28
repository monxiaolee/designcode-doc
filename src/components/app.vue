<style scoped>
    @import "../styles/common.css";
    .icon-loading{
        position: fixed;
        top: 10px;
        right: 10px;
        color: #0099e5;
        animation: ani-app-loading 1s linear infinite;
    }
    @keyframes ani-app-loading {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
</style>
<template>
    <div>
        <router-view></router-view>
        <Back-top :bottom="100"></Back-top>
        <transition name="fade">
            <div class="loading" v-show="loading">
                <Icon type="load-c" size="18" class="icon-loading"></Icon>
            </div>
        </transition>
    </div>
</template>
<script>
    import bus from './bus';

    export default {
        data () {
            return {
                liveVisible: false,
                iViewVisible: false
            }
        },
        computed: {
            loading () {
                return bus.loading;
            }
        },
        mounted () {
            if (window.localStorage.getItem('liveModalTime')) {
                const time = parseInt(window.localStorage.getItem('liveModalTime'));
                const today = this.getTodayUnix();
                if ((today - time) > 86400000 * 7) this.liveVisible = true;
            } else {
                this.liveVisible = true;
            }

            if (this.liveVisible) {
//                this.$Notice.config({
//                    top: 85
//                });
//                this.$Notice.info({
//                    title: 'Vue.js 系列讲堂',
//                    desc: '4月26日，直播 "Vue.js 实战之 Render 函数"，为您介绍 Vue2 的虚拟DOM、Render 函数使用场景及函数化组件和 Render 函数的的实战示例。<a href="https://segmentfault.com/l/1500000008892728" target="_blank">点击报名参加</a>',
//                    duration: 0,
//                    onClose: () => {
//                        const today = this.getTodayUnix();
//                        window.localStorage.setItem('liveModalTime', today);
//                        this.$Message.success('关闭成功，一周内不再提示', 5);
//                    }
//                });
//                this.$Notice.config({
//                    top: 24
//                });
            }
        },
        methods: {
            getTodayUnix () {
                const date = new Date();
                date.setHours(0);
                date.setMinutes(0);
                date.setSeconds(0);
                date.setMilliseconds(0);
                return date.getTime();
            },
            handleLive () {
                const today = this.getTodayUnix();
                window.localStorage.setItem('liveModalTime', today);
            }
        }
    }
</script>
