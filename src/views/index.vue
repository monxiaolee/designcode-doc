<style scoped lang="less">
    @import "../styles/index-2018.less";
</style>
<style>
    .index-version .ivu-badge-count {
        box-shadow: none;
        right: 0;
        top: -3px;
        color: #f50;
        background: transparent;
    }
    .fire {
        width: 3px;
        height: 30px;
        background: white;
        position: absolute;top:100%;
    }
    .spark {
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
    }
</style>
<template>
    <div>
        <div class="index">
            <div class="bg"><span></span></div>
            <Row type="flex" justify="center" align="middle" style="position: relative;z-index: 3">
                <i-col span="24">
                    <h2>
                        <canvasText key="canvas1" cid="canvas1" content="新年快乐" v-show="index % 2 !== 0"></canvasText>
                        <canvasText key="canvas2" cid="canvas2" content="iView UI"
                                    v-show="index % 2 === 0"></canvasText>
                    </h2>
                    <div class="list">
                        <Button size="large" shape="circle" type="primary" style="min-width: 130px" icon="ios-keypad"
                                @click="handleStart">
                            <template v-if="lang === 'zh-CN'">开始使用</template>
                            <template v-else>Getting Started</template>
                        </Button>
                        <Button size="large" shape="circle" type="success" style="min-width: 130px" icon="social-github"
                                @click="handleGithub">GitHub
                        </Button>
                    </div>
                </i-col>
            </Row>
        </div>
        <div id="indexLizi"></div>
        <div class="index-lang">
            <span @click="handleChangeLang">
                <template v-if="lang === 'zh-CN'">EN</template>
                <template v-else>中文</template>
            </span>
        </div>
        <!--<div class="index-logo-new-year">-->
        <!--<img src="../images/logo-doc-2018.png">-->
        <!--</div>-->
    </div>
</template>
<script>
    import bus from '../../src/components/bus';
    import canvasText from '../../src/components/canvas-text.vue';

    export default {
        components: {canvasText},
        data () {
            return {
                lang: this.$lang,
                index: 0
            }
        },
        computed: {
            suffix () {
                return this.lang === 'zh-CN' ? '' : '-en';
            }
        },
        methods: {
            handleChangeLang () {
                const lang = this.lang === 'zh-CN' ? 'en-US' : 'zh-CN';
                bus.$emit('on-change-lang', lang, '/');
            },
            nextIndex () {
                if (this.timmer) clearTimeout(this.timmer);
                this.index++;
                this.timmer = setTimeout(() => {
                    this.nextIndex();
                }, 3000);
            },
            handleStart () {
                this.$router.push('/docs/guide/install');
            },
            handleGithub () {
                window.open('https://github.com/iview/iview');
            }
        },
        mounted () {
            this.lang = this.$lang;
            this.nextIndex();

        },
        beforeDestroy () {
            if (this.timmer) clearTimeout(this.timmer);
        }
    }
</script>
