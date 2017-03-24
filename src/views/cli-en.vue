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
                        <div class="cli-info-desc">Create iView project with a visual way.</div>
                        <div class="cli-download">
                            <Row>
                                <i-col span="10" offset="2">
                                    <i-button type="ghost" size="large" icon="social-apple" @click="handleClick('mac')">Download for Mac</i-button>
                                </i-col>
                                <i-col span="10" pull="2">
                                    <i-button type="ghost" size="large" icon="social-windows" @click="handleClick('windows')">Download for Windows</i-button>
                                </i-col>
                                <i-col span="2" pull="2">
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