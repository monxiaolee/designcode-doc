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
//                if (today > time) this.liveVisible = true;
            } else {
//                this.liveVisible = true;
            }
            if (window.localStorage.getItem('iViewVisible')) {

            } else {
//                this.$Notice.config({
//                    top: 85
//                });
//                this.$Notice.info({
//                    title: 'iView 现已完成对 Vue 2 的支持',
//                    desc: 'iView 已发布 2.0.0-rc.5 版本，全面支持 Vue.js 2.x，<a href="https://www.talkingcoder.com/article/6395692494071220203" target="_blank">点击查看详情</a>。',
//                    duration: 0,
//                    onClose: () => {
//                        const today = this.getTodayUnix();
//                        window.localStorage.setItem('iViewVisible', today);
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
