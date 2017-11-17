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
                iViewVisible: false,
                lang: this.$lang
            }
        },
        computed: {
            loading () {
                return bus.loading;
            }
        },
        mounted () {
            this.lang = this.$lang;
            if (window.localStorage.getItem('liveModalTime')) {
                const time = parseInt(window.localStorage.getItem('liveModalTime'));
                const today = this.getTodayUnix();
                if ((today - time) > 86400000 * 4) this.liveVisible = true;
            } else {
                this.liveVisible = true;
            }

            if (this.liveVisible && this.$lang === 'zh-CN') {
//                this.$Notice.config({
//                    top: 85
//                });
//                this.$Notice.info({
//                    title: '《Vue.js 实战》正在热卖',
//                    desc: '<p>本书由 iView 作者 Aresn 著， Vue.js 作者<strong>尤雨溪</strong>作推荐序，大漠、justjavac 等人联合推荐。如果你喜欢通过实例来学习，那么本书会是你上手 Vue 的一个好选择。</p><p style="margin-top: 6px"><a href="https://detail.tmall.com/item.htm?id=559480603657" target="_blank" onclick="clickAdBuy()">立即购买书籍</a><a href="https://segmentfault.com/ls/1650000011074057" target="_blank" style="margin-left: 20px" onclick="clickAdVideo()">查看系列视频</a></p>',
//                    duration: 0,
//                    onClose: () => {
//                        const today = this.getTodayUnix();
//                        window.localStorage.setItem('liveModalTime', today);
//                        this.$Message.success('关闭成功，近期不再提示', 4);
//                    }
//                });
//                this.$Notice.config({
//                    top: 24
//                });
            } else if (this.liveVisible && this.$lang === 'en-US') {
//                this.$Notice.config({
//                    top: 85
//                });
//                this.$Notice.info({
//                    title: 'Are you using iView?',
//                    desc: '<p>We appreciate you support if you or your organization is using iView. You are welcome to leave replies about your organization here, which could became the confidence of maintainers, communication and undecided watchers.</p><a href="https://github.com/iview/iview/issues/2143" target="_blank">> Click here to reply <</a>',
//                    duration: 0,
//                    onClose: () => {
//                        const today = this.getTodayUnix();
//                        window.localStorage.setItem('liveModalTime', today);
//                        this.$Message.success('Closed successfully, no longer prompt', 4);
//                    }
//                });
//                this.$Notice.config({
//                    top: 24
//                });
            }

            // 广告统计
            window.clickAdBuy = function () {
                _hmt.push(['_trackEvent', 'index-ad-buy', 'click'])
            }

            window.clickAdVideo = function () {
                _hmt.push(['_trackEvent', 'index-ad-video', 'click'])
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
