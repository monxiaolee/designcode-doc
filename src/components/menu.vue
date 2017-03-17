<template>
    <Menu mode="horizontal" :active-name="currentActiveKey" @on-select="handleSelect">
        <div class="wrapper-header-nav">
            <router-link to="/" class="wrapper-header-nav-logo">
                <img src="../images/logo-doc.png">
            </router-link>
            <div class="wrapper-header-nav-search">
                <i-select
                    ref="select"
                    v-model="search"
                    filterable
                    placeholder="搜索组件..."
                    not-found-text="没有找到相关组件"
                    @on-change="handleSearch">
                    <i-option v-for="item in navigateList" :key="item" :value="item.path">{{ item.title }}</i-option>
                </i-select>
            </div>
            <div class="wrapper-header-nav-list">
                <Menu-item name="guide">
                    <Icon type="ios-navigate"></Icon>
                    指南
                </Menu-item>
                <Menu-item name="component">
                    <Icon type="ios-keypad"></Icon>
                    组件
                </Menu-item>
                <Menu-item name="cli">
                    <Icon type="settings"></Icon>
                    脚手架
                </Menu-item>
                <Menu-item name="live">
                    <Badge :dot="liveDot">
                        <Icon type="ios-mic"></Icon>
                        讲堂
                    </Badge>
                </Menu-item>
                <Menu-item name="practice">
                    <Icon type="ios-analytics"></Icon>
                    实践
                </Menu-item>
                <Menu-item name="github">
                    <Icon type="social-github"></Icon>
                    Github
                </Menu-item>
            </div>
        </div>
    </Menu>
</template>
<script>
    import navigate from '../config/navigate';
    import Config from '../config/config';
    import bus from './bus';

    export default {
        props: {
            activeKey: String
        },
        data () {
            return {
                search: '',
                navigateList: [],
                liveDot: false,
                currentActiveKey: this.activeKey
            };
        },
        watch: {
            activeKey (val) {
                this.currentActiveKey = val;
            },
            currentActiveKey (val) {
                this.$emit('on-change', val);
            }
        },
        computed: {

        },
        methods: {
            handleSearch (val) {
                this.search = '';
                this.$refs.select.setQuery('');
                this.$nextTick(() => {
                    setTimeout(() => {
                        this.$router.go(val);
                    }, 300);
                });
            },
            handleSelect (type) {
                if (type === 'donate') {
                    bus.$emit('on-donate-show');
                } else if (type === 'github') {
                    window.open('https://github.com/iview/iview');
                } else if (type === 'guide') {
                    this.$router.go(navigate.guide[0].path);
                } else if (type === 'component') {
                    this.$router.go(navigate.beforeComponents[0].path);
                } else if (type === 'practice') {
                    this.$router.go(navigate.practice[0].path);
                } else if (type === 'cli') {
                    this.$router.go('/cli');
                } else if (type === 'live') {
                    this.$router.go('/live');
                }
                this.$nextTick(() => {
                    this.updateActiveNav();
                });
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
                    this.currentActiveKey = 'component';
                } else if (route.indexOf('practice') > -1) {
                    this.currentActiveKey = 'practice';
                } else if (route.indexOf('live') > -1) {
                    this.currentActiveKey = 'live';
                } else {
                    this.currentActiveKey = 'guide';
                }
            }
        },
        created () {
            let list = [];
            for (let i = 0; i < navigate.components.length; i++) {
                for (let j = 0; j < navigate.components[i].list.length; j++) {
                    list.push(navigate.components[i].list[j]);
                }
            }
            this.navigateList = list;
            // 设置直播 dot
            const liveDotVersion = window.localStorage.getItem('liveVersion');
            if (liveDotVersion) {
                this.liveDot = liveDotVersion < Config.liveVersion;
            } else {
                this.liveDot = true;
            }
        }
    };
</script>