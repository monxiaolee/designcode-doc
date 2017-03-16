<style lang="less">
    @import "../styles/article.less";
</style>
<template>
    <div class="wrapper">
        <div class="wrapper-header">
            <nav-menu :active-key.sync="activeKey"></nav-menu>
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
                    <h4>GitHub</h4>
                    <ul>
                        <li>
                            <a href="https://github.com/iview/iview" target="_blank">iView</a>
                        </li>
                        <li>
                            <a href="https://github.com/iview/iview-cli" target="_blank">iView Cli</a>
                        </li>
                        <li>
                            <a href="https://github.com/iview/iview-project" target="_blank">iView 工程</a>
                        </li>
                        <li>
                            <a href="https://github.com/iview/iview-theme" target="_blank">iView 主题</a>
                        </li>
                    </ul>
                </i-col>
                <i-col span="5">
                    <h4>相关站点</h4>
                    <ul>
                        <li>
                            <a href="https://www.talkingcoder.com/?from=iview" target="_blank">TalkingCoder</a> - 有逼格的程序员社区
                        </li>
                        <li>
                            <a href="https://www.talkingdata.com/" target="_blank">TalkingData</a> - 移动·数据·价值
                        </li>
                        <li>
                            <a href="https://github.com/TalkingData/Fregata" target="_blank">Fregata</a> - 大规模机器学习算法库
                        </li>
                        <li>
                            <a href="https://github.com/TalkingData/Myna" target="_blank">Myna</a> - Android 平台情景感知框架
                        </li>
                        <li>
                            <a href="https://github.com/TalkingData/owl" target="_blank">OWL</a> - 分布式监控系统
                        </li>
                    </ul>
                </i-col>
                <i-col span="5" offset="2">
                    <h4>社区</h4>
                    <ul>
                        <li>
                            <a href="https://github.com/iview/iview/issues" target="_blank">反馈建议</a>
                        </li>
                        <li>
                            <a href="https://github.com/iview/iview/issues/new" target="_blank">提交Bug</a>
                        </li>
                        <li>
                            <a href="https://gitter.im/iview/iview" target="_blank">讨论</a>
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
            <div class="catalogue-title">目录</div>
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
    <Modal :visible.sync="donate" title="支持 iView 的开发" @on-ok="handleModalClose" @on-cancel="handleModalClose" class-name="vertical-center-modal">
        <div class="ivu-article">
            <p>iView 是采用 MIT 许可的开源项目，您可以在个人或企业项目中免费使用。不过，如果您觉得 iView 对您的项目带来了帮助，提高开发效率，可以用捐助来表示您的谢意：)</p>
            <p>您可以用公司的名义进行赞助，赞助信息将在文档页展示。联系邮箱 <a href="mailto:admin@aresn.com">admin@aresn.com</a></p>
            <h3>个人可使用 微信 或 支付宝 捐助：</h3>
            <div>
                <img src="../images/pay.png" style="width: 100%">
            </div>
        </div>
    </Modal>
    <Modal :visible.sync="ask" title="提问" @on-ok="handleModalClose" @on-cancel="handleModalClose" :style="{top: '20px'}">
        <div class="ivu-article">
            <p>如果您在开发中遇到任何问题，包括但不限于 iView、JavaScript、Vue、Webpack、Canvas、WebGL、Node.js 等相关技术，可以加入小密圈和我们一对一提问，收到问题后，我们会在 10 ~ 30 分钟内解答。</p>
            <p>因为提供高质量的答疑服务，所以我们暂时收费 <span style="color: #f50">￥98/年</span> 。</p>
            <p>如果您不愿意付费，仍然可以在 GitHub 提交与 iView 相关的 issues，我们也会逐一解答。</p>
            <div>
                <img src="../images/miquan.jpg" style="width: 300px;margin: 0 auto;display: block;">
            </div>
        </div>
    </Modal>
    <div class="ask-question" @click="ask = true">
        <Icon type="help-circled"></Icon>
        <p>提问</p>
    </div>
</template>
<script>
    import Navigate from './navigate.vue';
    import navigate from '../config/navigate';
    import navMenu from './menu.vue';

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
                activeKey: ''
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
                    '/docs/guide/start',
                    '/docs/guide/i18n',
                    '/docs/guide/theme',
                    '/overview',
                    '/docs/guide/update'
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
        },
        ready () {
            this.updateActiveNav();

            const examples = this.$children[1].$children[1].$el.childNodes[1].querySelectorAll('.example');

            for (let i = 0; i < examples.length; i++) {
                const title = examples[i].querySelectorAll('header span a')[0].getAttribute('href').replace('#', '');
                this.list.push(title);
            }
        },
        events: {
            'on-donate-show' () {
                this.donate = true;
            }
        }
    }
</script>