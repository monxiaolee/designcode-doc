<style lang="less">
    @import "../styles/cli.less";
</style>
<template>
    <div>
        <div class="cli-menu">
            <div class="wrapper-header">
                <nav-menu :active-key="activeKey"></nav-menu>
            </div>
        </div>
        <div class="cli" ref="cli">
            <Row type="flex" justify="center" align="middle">
                <i-col span="12">
                    <div class="cli-info">
                        <img src="../images/cli-logo.png">
                        <p class="cli-info-title">iView Cli</p>
                        <div class="cli-info-desc">用可视化的方式来创建你的 iView 工程</div>
                        <div class="cli-download">
                            <Row>
                                <i-col span="6" offset="4">
                                    <i-button type="ghost" size="large" icon="social-apple" @click="handleClick('mac')">下载 Mac 版</i-button>
                                </i-col>
                                <i-col span="6">
                                    <i-button type="ghost" size="large" icon="social-windows" @click="handleClick('windows')">下载 Windows 版</i-button>
                                </i-col>
                                <i-col span="4">
                                    <i-button type="ghost" size="large" icon="social-github" @click="handleClick('github')"></i-button>
                                </i-col>
                            </Row>
                        </div>
                    </div>
                </i-col>
                <i-col span="12">
                    <div style="margin-top: 30px">
                        <Carousel dots="outside" :height="height">
                            <Carousel-item class="cli-item">
                                <div class="cli-carousel" :style="{height: height + 'px'}">
                                    <img src="../images/cli-1.png">
                                </div>
                            </Carousel-item>
                            <Carousel-item class="cli-item">
                                <div class="cli-carousel" :style="{height: height + 'px'}">
                                    <img src="../images/cli-2.png">
                                </div>
                            </Carousel-item>
                            <Carousel-item class="cli-item">
                                <div class="cli-carousel" :style="{height: height + 'px'}">
                                    <img src="../images/cli-3.png">
                                </div>
                            </Carousel-item>
                            <Carousel-item class="cli-item">
                                <div class="cli-carousel" :style="{height: height + 'px'}">
                                    <img src="../images/cli-4.png">
                                </div>
                            </Carousel-item>
                        </Carousel>
                    </div>
                </i-col>
            </Row>
        </div>
    </div>
</template>
<script>
    import navMenu from '../components/menu.vue'
    import Util from '../libs/util';

    export default {
        components: { navMenu },
        data () {
            return {
                height: 0,
                activeKey: 'cli'
            };
        },
        computed: {

        },
        methods: {
            getHeight () {
                this.height = parseInt(Util.getStyle(this.$refs.cli, 'height')) - 100;
            },
            handleClick (type) {
                if (type === 'mac') {
                    window.open('https://github.com/iview/iview-cli/releases/download/v1.0.0/iView-cli-mac.dmg');
                } else if (type === 'windows') {
                    window.open('https://github.com/iview/iview-cli/releases/download/v1.0.0/iView-cli-windows-x64.zip');
                } else if (type === 'github') {
                    window.open('https://github.com/iview/iview-cli');
                }
            }
        },
        mounted () {
            this.getHeight();
        }
    };
</script>