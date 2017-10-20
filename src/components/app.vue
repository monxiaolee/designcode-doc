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

            if (this.liveVisible && this.$lang === 'zh-CN') {
                this.$Notice.config({
                    top: 85
                });
                this.$Notice.info({
                    title: '您正在用 iView 吗？',
                    desc: '<p>如果您和您的的公司或组织正在使用 iView，非常感谢您的支持，希望可以在这里留下您的公司信息。您的回复将成为维护者、社区用户和观望者的信心来源。</p><a href="https://github.com/iview/iview/issues/2143" target="_blank">> 点击这里回复 <</a>',
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
                    title: 'Are you using iView?',
                    desc: '<p>We appreciate you support if you or your organization is using iView. You are welcome to leave replies about your organization here, which could became the confidence of maintainers, communication and undecided watchers.</p><a href="https://github.com/iview/iview/issues/2143" target="_blank">> Click here to reply <</a>',
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
