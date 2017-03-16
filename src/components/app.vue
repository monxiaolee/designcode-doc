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
        <div class="loading" v-show="loading" transition="fade">
            <Icon type="load-c" size="18" class="icon-loading"></Icon>
        </div>
        <Modal title="直播通知" :visible.sync="liveVisible" ok-text="不再显示" @on-ok="handleLive" @on-cancel="handleLive">
            <div class="ivu-article">
                <p>
                    <strong>3月23日 晚 8 点</strong>，在 segmentfault 直播关于 iView 2 的组件开发实践，进一步介绍在升级过程中的开发经验和对部分组件的分析，偏干货。。
                </p>
                <p>报名费用：<span style="color: #ff5500;">1元</span>。</p>
                <p>报名地址：<a href="https://segmentfault.com/l/1500000008614960" target="_blank">https://segmentfault.com/l/1500000008614960</a></p>
                <p>或用微信扫描下面二维码报名：</p>
                <p>
                    <img src="../images/zhibo4.png" style="width: 50%;margin:0 auto;display: block;">
                </p>
            </div>
        </Modal>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                loading: false,
                liveVisible: false,
                iViewVisible: false
            }
        },
        ready () {
            if (window.localStorage.getItem('liveModalTime')) {
                const time = parseInt(window.localStorage.getItem('liveModalTime'));
                const today = this.getTodayUnix();
//                if (today > time) this.liveVisible = true;
            } else {
//                this.liveVisible = true;
            }
            if (window.localStorage.getItem('iViewVisible')) {

            } else {
                this.$Notice.config({
                    top: 85
                });
                this.$Notice.info({
                    title: 'iView 现已完成对 Vue 2 的支持',
                    desc: 'iView 已发布 2.0.0-rc.5 版本，全面支持 Vue.js 2.x，<a href="https://www.talkingcoder.com/article/6395692494071220203" target="_blank">点击查看详情</a>。',
                    duration: 0,
                    onClose: () => {
                        const today = this.getTodayUnix();
                        window.localStorage.setItem('iViewVisible', today);
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
