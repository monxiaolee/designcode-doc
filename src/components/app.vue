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
                if ((today - time) > 86400000 * 5) this.liveVisible = true;
            } else {
                this.liveVisible = true;
            }

            if (this.liveVisible && this.$lang === 'zh-CN') {
                this.$Notice.config({
                    top: 85
                });
                this.$Notice.info({
                    title: '最新课程通知',
                    desc: '7月5日直播《Vue.js 实战之工程篇》，本课程将带领你由浅入深地学习组件的全部内容及 webpack。往期系列课程请点击菜单的"讲堂"查看。<br><a href="https://segmentfault.com/l/1500000009448189" target="_blank">报名参加 Vue.js 实战之工程篇</a>',
                    duration: 0,
                    onClose: () => {
                        const today = this.getTodayUnix();
                        window.localStorage.setItem('liveModalTime', today);
                        this.$Message.success('关闭成功，近期不再提示', 4);
                    }
                });
                this.$Notice.config({
                    top: 24
                });
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
