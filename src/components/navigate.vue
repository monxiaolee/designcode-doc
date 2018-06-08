<style lang="less" scoped>
    @import "../styles/navigate.less";
</style>
<template>
    <div class="">
        <!-- d3算法布局 -->
        <div class="" v-if="type === 'd3FNetwork'">
            <Menu mode="horizontal" :theme="theme1" :active-name="activeKey" @on-select="handleSelect">
                <Menu-item v-for="item in navigate.d3FNetwork" :key="item.path" :name="item.path">
                    <Icon type="ios-paper"></Icon>
                    {{item.title}}
                </Menu-item>
            </Menu>
        </div>
        <div class="navigate" v-else>
            <!-- 
            <div class="asd" @click="handleAd" v-if="lang === 'zh-CN'">
                <div class="asd-main">
                    <img src="../images/ad-juejin.jpg" style="border-radius: 6px">
                    <ad-send></ad-send>
                </div>
            </div> 
            -->
            <!-- 概览 -->
            <Menu width="auto" :active-name="activeKey" @on-select="handleSelect" v-if="type === 'guide'">
                <Menu-item v-for="item in navigate.guide" :key="item.path" :name="item.path">
                    <template v-if="lang === 'zh-CN'">{{ item.title }}</template>
                    <template v-else>{{ item.titleEn }}</template>
                </Menu-item>
            </Menu> 

            <!-- 自定义组件 -->
            <Menu width="auto" :active-name="activeKey" @on-select="handleSelect" v-if="type === 'component'">
                <!-- <Menu-item v-for="item in navigate.beforeComponents" :key="item.path" :name="item.path">
                    <template v-if="item.title !== '更新日志'">
                        <template v-if="lang === 'zh-CN'">{{ item.title }}</template>
                        <template v-else>{{ item.titleEn }}</template>
                    </template>
                    <template v-if="item.title === '更新日志'">
                        <Badge :dot="showDot">
                            <template v-if="lang === 'zh-CN'">{{ item.title }}</template>
                            <template v-else>{{ item.titleEn }}</template>
                        </Badge>
                    </template>
                </Menu-item> -->
                <!--<Button type="warning" v-if="lang === 'zh-CN'" icon="heart" size="small" style="width:130px;margin:15px 0 15px 15px;" @click="handleDonate">{{ $t('index.donate') }}</Button>-->
                <div class="navigate-group">{{ $t('index.component') }}</div>
                <Menu-group v-for="item in navigate.components" :key="item.type" :title="item.type">
                    <Menu-item v-for="component in item.list" :key="component.path" :name="component.path">
                        <i class="ivu-icon" :class="'ivu-icon-' + component.icon"></i>
                        <template v-if="lang === 'zh-CN'">
                            {{ component.title.split(' ')[0] }}
                            <span class="navigate-group-span">{{ component.title.split(' ')[1] }}</span>
                        </template>
                        <template v-else>{{ component.title.split(' ')[0] }}</template>
                    </Menu-item>
                </Menu-group>
            </Menu>
            
            <!-- 典型案例 -->
            <Menu width="auto" :active-name="activeKey" @on-select="handleSelect" v-if="type === 'classicCase'">
                <Menu-item v-for="item in navigate.classicCase" :key="item.path" :name="item.path">
                    <template v-if="lang === 'zh-CN'">{{ item.title }}</template>
                    <template v-else>{{ item.titleEn }}</template>
                </Menu-item>
            </Menu>

            <!-- 默认主题 -->
            <Menu width="auto" :active-name="activeKey" @on-select="handleSelect" v-if="type === 'theme-default'">
                <Menu-item v-for="item in navigate.themeDefault" :key="item.path" :name="item.path">
                    <template v-if="lang === 'zh-CN'">{{ item.title }}</template>
                    <template v-else>{{ item.titleEn }}</template>
                </Menu-item>
            </Menu>

            <!-- 透明主题 -->
            <Menu width="auto" :active-name="activeKey" @on-select="handleSelect" v-if="type === 'theme-transparent'">
                <Menu-item v-for="item in navigate.themeTransparent" :key="item.path" :name="item.path">
                    <template v-if="lang === 'zh-CN'">{{ item.title }}</template>
                    <template v-else>{{ item.titleEn }}</template>
                </Menu-item>
            </Menu>

            <!-- 其他-废弃 -->
            <Menu width="auto" :active-name="activeKey" @on-select="handleSelect" v-if="type === 'live'">
                <Menu-item v-for="item in navigate.live" :key="item.path" :name="item.path">
                    <template v-if="lang === 'zh-CN'">{{ item.title }}</template>
                    <template v-else>{{ item.titleEn }}</template>
                </Menu-item>
            </Menu>
        </div>
    </div>
</template>
<script>
    import navigate from '../config/navigate';
    import version from '../config/config';
    import bus from './bus';
    import adSend from './ad-send.vue';

    export default {
        components: { adSend },
        props: {
            type: {
                type: [String, Number]
            }
        },
        data () {
            return {
                navigate: navigate,
                showDot: false,
                activeKey: this.$route.path,
                lang: this.$lang,
                showAd: false,
                theme1: 'light'
            }
        },
        methods: {
            handleDonate () {
                bus.$emit('on-donate-show');
            },
            handleSelect (path) {
                if (this.lang === 'en-US') path += '-en';
                this.$nextTick(() => {
                    this.$router.push(path);
                });
            },
            handleAd () {
                _hmt.push(['_trackEvent', 'vue-juejin', 'click']);
//                this.$router.push('/live');
//                this.showAd = true;
                window.open('https://juejin.im/welcome/frontend?utm_source=iview&utm_medium=banner&utm_content=huoyue&utm_campaign=q4_website');
            },
            handleBuy (type) {
                if (type === 'taobao') {
                    window.open('https://detail.tmall.com/item.htm?id=559480603657');
                } else if (type === 'jd') {
                    window.open('https://item.jd.com/12215519.html');
                } else if (type === 'video') {
                    window.open('https://segmentfault.com/ls/1650000011074057');
                } else if (type === 'dangdang') {
                    window.open('http://product.dangdang.com/25180286.html');
                }
            }
        },
        created () {
            this.lang = this.$lang;
            const path = this.lang === 'zh-CN' ? this.$route.path : this.$route.path.split('-en')[0];
            this.activeKey = path;
        },
        mounted () {
            // 判断是否已阅读更新日志
            const dotVersion = window.localStorage.getItem('version');
            if (dotVersion) {
                this.showDot = dotVersion < version.version;
            } else {
                this.showDot = true;
            }
        }
    }
</script>