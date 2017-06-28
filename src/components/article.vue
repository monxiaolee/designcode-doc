<style lang="less">
    @import "../styles/article.less";
</style>
<template>
    <div>
        <div class="wrapper">
            <div class="wrapper-header">
                <nav-menu :active-key="activeKey" @on-change="handleNavMenuChange"></nav-menu>
            </div>
            <div class="wrapper-container">
                <Row>
                    <i-col span="4" class="wrapper-navigate">
                        <Navigate :type="activeKey"></Navigate>
                    </i-col>
                    <i-col span="20">
                        <div class="wrapper-content ivu-article">
                            <slot></slot>
                        </div>
                    </i-col>
                </Row>
            </div>
        </div>
        <div class="footer">
            <div class="footer-main">
                <Row>
                    <i-col span="5">
                        <h4>
                            <Icon type="social-github"></Icon>
                            GitHub
                        </h4>
                        <ul>
                            <li>
                                <a href="https://github.com/iview/iview" target="_blank">iView</a>
                            </li>
                            <li>
                                <a href="https://github.com/iview/iview-cli" target="_blank">iView Cli</a>
                            </li>
                            <li>
                                <a href="https://github.com/iview/iview-doc" target="_blank">iView Doc</a>
                            </li>
                            <li>
                                <a href="https://github.com/iview/iview-project" target="_blank">iView Project</a>
                            </li>
                            <li>
                                <a href="https://github.com/iview/iview-theme" target="_blank">iView Theme</a>
                            </li>
                        </ul>
                    </i-col>
                    <i-col span="5">
                        <h4>
                            <Icon type="link"></Icon>
                            {{ $t('index.links') }}
                        </h4>
                        <ul>
                            <li>
                                <a href="https://www.talkingdata.com/" target="_blank">TalkingData</a> - {{ $t('index.td') }}
                            </li>
                            <li>
                                <a href="https://github.com/TalkingData/Fregata" target="_blank">Fregata</a> - {{ $t('index.Fregata') }}
                            </li>
                            <li>
                                <a href="https://github.com/TalkingData/Myna" target="_blank">Myna</a> - {{ $t('index.Myna') }}
                            </li>
                            <li>
                                <a href="https://github.com/TalkingData/owl" target="_blank">OWL</a> - {{ $t('index.OWL') }}
                            </li>
                        </ul>
                    </i-col>
                    <i-col span="5" offset="2">
                        <h4>
                            <Icon type="chatbubbles"></Icon>
                            {{ $t('index.community') }}
                        </h4>
                        <ul>
                            <li>
                                <a href="https://github.com/iview/iview/issues" target="_blank">{{ $t('index.feedback') }}</a>
                            </li>
                            <li>
                                <a href="https://github.com/iview/iview/issues/new" target="_blank">{{ $t('index.bug') }}</a>
                            </li>
                            <li>
                                <a href="https://gitter.im/iview/iview" target="_blank">{{ $t('index.chat') }}</a>
                            </li>
                            <li>
                                <a href="https://segmentfault.com/t/iview" target="_blank">SegmentFault</a>
                            </li>
                        </ul>
                    </i-col>
                    <i-col span="5" offset="2">
                        <div class="footer-aside">
                            <div class="footer-logo">
                                <img src="../images/logo.png">
                            </div>
                            <div class="footer-author">
                                <a href="https://www.talkingdata.com/">
                                    <img src="../images/logo-td.png">
                                </a>
                            </div>
                        </div>
                    </i-col>
                </Row>
            </div>
        </div>
        <div class="catalogue" v-show="list.length">
            <card dis-hover shadow>
                <div class="catalogue-title">
                    <template v-if="lang === 'zh-CN'">目录</template>
                    <template v-else>CAT</template>
                </div>
                <div class="catalogue-content">
                    <ul>
                        <li v-for="item in list">
                            <a :href="'#' + item">{{ item }}</a>
                        </li>
                        <li>
                            <a href="#API">API</a>
                        </li>
                    </ul>
                </div>
            </card>
        </div>
        <Modal v-model="donate" v-if="lang === 'zh-CN'" title="支持 iView 的开发" @on-ok="handleModalClose" @on-cancel="handleModalClose" class-name="vertical-center-modal">
            <div class="ivu-article">
                <p>iView 是采用 MIT 许可的开源项目，您可以在个人或企业项目中免费使用。不过，如果您觉得 iView 对您的项目带来了帮助，提高开发效率，可以用捐助来表示您的谢意：)</p>
                <p>您可以用公司的名义进行赞助，赞助信息将在文档页展示。联系邮箱 <a href="mailto:admin@aresn.com">admin@aresn.com</a></p>
                <h3>个人可使用 微信 或 支付宝 捐助：</h3>
                <div>
                    <img src="../images/pay.png" style="width: 100%">
                </div>
            </div>
        </Modal>
        <Modal v-model="donate" v-if="lang !== 'zh-CN'" title="Donate iView project" @on-ok="handleModalClose" @on-cancel="handleModalClose" class-name="vertical-center-modal">
            <div class="ivu-article">
                <p>iView is an open source project with MIT licenses that you can use for free in your personal or business projects. However, if you feel that iView has helped your project to improve development efficiency, you can use donations to express your gratitude: )</p>
                <h3>Use Wechat or Alipay to donate：</h3>
                <div>
                    <img src="../images/pay.png" style="width: 100%">
                </div>
            </div>
        </Modal>
        <Modal v-model="ask" title="提问" @on-ok="handleModalClose" @on-cancel="handleModalClose" :styles="{top: '20px'}">
            <div class="ivu-article">
                <p>如果您在开发中遇到问题，包括但不限于 iView、JavaScript、Vue、Webpack 等相关技术，可以加入小密圈和我们一对一提问，收到问题后，我们会在 30 分钟内解答。</p>
                <p>因为提供高质量的答疑服务，所以我们暂时收费 <span style="color: #f50">￥98/年</span> 。</p>
                <p>如果您不愿意付费，可以在 GitHub 提交与 iView 相关的 issues，或到 <a href="https://segmentfault.com/t/iview" target="_blank">社区</a>讨论。</p>
                <div>
                    <img src="../images/miquan.jpg" style="width: 300px;margin: 0 auto;display: block;">
                </div>
            </div>
        </Modal>
        <div class="ask-question" @click="ask = true" v-if="lang === 'zh-CN'">
            <Icon type="help-circled"></Icon>
            <p>{{ $t('index.ask') }}</p>
        </div>
    </div>
</template>
<script>
    import Navigate from './navigate.vue';
    import navigate from '../config/navigate';
    import navMenu from './menu.vue';
    import bus from './bus';

    export default {
        components: {
            Navigate,
            navMenu
        },
        data () {
            return {
                list: [],
                donate: false,
                ask: false,
                activeKey: '',
                lang: this.$lang
            }
        },
        methods: {
            handleModalClose () {
                this.donate = false;
            },
            handleAskClose () {
                this.ask = false;
            },
            updateActiveNav () {
                const componentList = [
                    '/docs/guide/install',
                    '/docs/guide/install-en',
                    '/docs/guide/start',
                    '/docs/guide/start-en',
                    '/docs/guide/i18n',
                    '/docs/guide/i18n-en',
                    '/docs/guide/theme',
                    '/docs/guide/theme-en',
                    '/overview',
                    '/overview-en',
                    '/docs/guide/update',
                    '/docs/guide/update-en'
                ];

                const route = this.$route.path;
                if (route.indexOf('component') > -1 || componentList.indexOf(route) > -1) {
                    this.activeKey = 'component';
                } else if (route.indexOf('practice') > -1) {
                    this.activeKey = 'practice';
                } else if (route.indexOf('live') > -1) {
                    this.activeKey = 'live';
                }  else {
                    this.activeKey = 'guide';
                }
            },
            handleNavMenuChange (val) {
                this.activeKey = val;
            }
        },
        created () {
            this.lang = this.$lang;
        },
        mounted () {
            this.updateActiveNav();

            const examples = this.$slots.default[0].elm.querySelectorAll('.example');

            for (let i = 0; i < examples.length; i++) {
                const title = examples[i].querySelectorAll('header span a')[0].getAttribute('href').replace('#', '');
                this.list.push(title);
            }
            bus.$on('on-donate-show', () => {
                this.donate = true;
            })
        }
    }
</script>