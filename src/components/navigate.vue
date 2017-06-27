<style lang="less" scoped>
    @import "../styles/navigate.less";
</style>
<template>
    <div class="navigate">
        <!--<div class="ad" @click="handleAd">-->
            <!--<div class="ad-main">-->
                <!--<img src="../images/ad.png">-->
            <!--</div>-->
        <!--</div>-->
        <Menu width="auto" :active-name="activeKey" @on-select="handleSelect" v-if="type === 'guide'">
            <Menu-item v-for="item in navigate.guide" :key="item" :name="item.path">
                <template v-if="lang === 'zh-CN'">{{ item.title }}</template>
                <template v-else>{{ item.titleEn }}</template>
            </Menu-item>
        </Menu>
        <Menu width="auto" :active-name="activeKey" @on-select="handleSelect" v-if="type === 'component'">
            <Menu-item v-for="item in navigate.beforeComponents" :key="item" :name="item.path">
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
            </Menu-item>
            <Button type="primary" icon="social-usd" size="small" style="width:130px;margin:15px 0 15px 15px;" @click="handleDonate">{{ $t('index.donate') }}</Button>
            <div class="navigate-group">{{ $t('index.component') }}</div>
            <Menu-group v-for="item in navigate.components" :key="item" :title="item.type">
                <Menu-item v-for="component in item.list" :key="component" :name="component.path">
                    <i class="ivu-icon" :class="'ivu-icon-' + component.icon"></i>
                    <template v-if="lang === 'zh-CN'">{{ component.title }}</template>
                    <template v-else>{{ component.title.split(' ')[0] }}</template>
                </Menu-item>
            </Menu-group>
        </Menu>
        <Menu width="auto" :active-name="activeKey" @on-select="handleSelect" v-if="type === 'practice'">
            <Menu-item v-for="item in navigate.practice" :key="item" :name="item.path">
                <template v-if="lang === 'zh-CN'">{{ item.title }}</template>
                <template v-else>{{ item.titleEn }}</template>
            </Menu-item>
        </Menu>
        <Menu width="auto" :active-name="activeKey" @on-select="handleSelect" v-if="type === 'live'">
            <Menu-item v-for="item in navigate.live" :key="item" :name="item.path">
                <template v-if="lang === 'zh-CN'">{{ item.title }}</template>
                <template v-else>{{ item.titleEn }}</template>
            </Menu-item>
        </Menu>
        <Modal v-model="showAd" title="Recruiting Translation Volunteer">
            <div class="i-article">
                <p style="font-size: 16px;">iView team are recruting volunteers to help us translate the document. If you master both Chinese and English, we are looking forward to your joining in our translation plan and help us improve iView. If you want to join in the translation plan, please send E-Mail to <a href="mailto:admin@aresn.com">admin@aresn.com</a></p>
            </div>
        </Modal>
    </div>
</template>
<script>
    import navigate from '../config/navigate';
    import version from '../config/config';
    import bus from './bus';

    export default {
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
                showAd: false
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
//                this.$router.push('/live');
                this.showAd = true;
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