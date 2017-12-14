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
        <!--<Modal v-if="lang === 'zh-CN'" v-model="fee" title="第一期前端探索交流会" width="750" :closable="false" :mask-closable="false">-->
            <!--<div class="ivu-article">-->
                <!--<p>活动介绍：前端探索交流会 FEE(Front End Explore) 是由 TalkingData 可视化团队发起的非盈利性前端开发者交流会，旨在分享、探索和传播具有创新的、有价值的思想、灵感或经验。</p>-->
                <!--<p>直播时间：2017-12-09 14:30</p>-->
                <!--<p style="font-size: 16px;font-weight: bold;">-->
                    <!--直播地址：<a href="https://live.bilibili.com/1353202" target="_blank">https://live.bilibili.com/1353202</a>-->
                <!--</p>-->
                <!--<p>-->
                    <!--关注 FEE 公众号，获取最新动态：-->
                <!--</p>-->
                <!--<row>-->
                    <!--<i-col span="12">-->
                        <!--<img src="../images/fee-code.jpg" width="200px">-->
                    <!--</i-col>-->
                <!--</row>-->
            <!--</div>-->
            <!--<div slot="footer">-->
                <!--<Button type="text" size="large" @click="feeclose">关闭</Button>-->
                <!--<Button type="primary" size="large" style="width: 100px" @click="gotofee">查看直播</Button>-->
            <!--</div>-->
        <!--</Modal>-->
    </div>
</template>
<script>
    import bus from './bus';

    export default {
        data () {
            return {
                liveVisible: false,
                iViewVisible: false,
                lang: this.$lang,
                fee: true
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
                if ((today - time) > 86400000 * 5) this.liveVisible = true;
            } else {
                this.liveVisible = true;
            }

            if (this.liveVisible && this.$lang === 'zh-CN') {
                this.$Notice.config({
                    top: 85
                });
                this.$Notice.info({
                    title: '关于使用 iView 控制台警告的说明',
                    desc: '<p>如果您使用的是 Vue.js 2.5.10 版本，会在控制台弹出一系列标签错误的警告，但这只会在开发环境提示，而且不影响 iView 的使用。</p><p>下个 Vue.js 版本或许会修复这个问题。</p><p>您也可以降级 Vue.js 到 2.5.9 版本。</p>',
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
            } else if (this.liveVisible && this.$lang === 'en-US') {
                this.$Notice.config({
                    top: 85
                });
                this.$Notice.info({
                    title: 'Notice about iView console warning',
                    desc: '<p>If you are using Vue.js 2.5.10, a series of warning will pop up in the console, but this will only be prompted in the development environment and will not affect the use of the iView.</p><p>The next Vue.js version might fix this problem.</p><p>You can also demote Vue.js to version 2.5.9.</p>',
                    duration: 0,
                    onClose: () => {
                        const today = this.getTodayUnix();
                        window.localStorage.setItem('liveModalTime', today);
                        this.$Message.success('Closed successfully, no longer prompt', 4);
                    }
                });
                this.$Notice.config({
                    top: 24
                });
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
            },
            feeclose () {
                this.fee = false;
            },
            gotofee () {
                _hmt.push(['_trackEvent', 'gotofee', 'click']);
                window.open('https://live.bilibili.com/1353202');
            }
        }
    }
</script>
