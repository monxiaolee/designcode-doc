<style lang="less" scoped>
    @import "../styles/navigate.less";
</style>
<template>
    <div class="navigate">
        <Menu width="auto" :active-name="activeKey" @on-select="handleSelect" v-if="type === 'guide'">
            <Menu-item v-for="item in navigate.guide" :key="item" :name="item.path">{{ item.title }}</Menu-item>
        </Menu>
        <Menu width="auto" :active-name="activeKey" @on-select="handleSelect" v-if="type === 'component'">
            <Menu-item v-for="item in navigate.beforeComponents" :key="item" :name="item.path">
                <template v-if="item.title !== '更新日志'">
                    {{ item.title }}
                </template>
                <template v-if="item.title === '更新日志'">
                    <Badge :dot="showDot">{{ item.title }}</Badge>
                </template>
            </Menu-item>
            <i-button type="primary" icon="social-usd" size="small" style="width:130px;margin:15px 0 15px 15px;" @click="handleDonate">赞助</i-button>
            <div class="navigate-group">组件</div>
            <Menu-group v-for="item in navigate.components" :key="item" :title="item.type">
                <Menu-item v-for="component in item.list" :key="component" :name="component.path">
                    <i class="ivu-icon" :class="'ivu-icon-' + component.icon"></i>
                    {{ component.title }}
                </Menu-item>
            </Menu-group>
        </Menu>
        <Menu width="auto" :active-name="activeKey" @on-select="handleSelect" v-if="type === 'practice'">
            <Menu-item v-for="item in navigate.practice" :key="item" :name="item.path">{{ item.title }}</Menu-item>
        </Menu>
        <Menu width="auto" :active-name="activeKey" @on-select="handleSelect" v-if="type === 'live'">
            <Menu-item v-for="item in navigate.live" :key="item" :name="item.path">{{ item.title }}</Menu-item>
        </Menu>
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
                activeKey: this.$route.path
            }
        },
        methods: {
            handleDonate () {
                bus.$emit('on-donate-show');
            },
            handleSelect (path) {
                this.$nextTick(() => {
                    this.$router.push(path);
                });
            }
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