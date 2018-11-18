<template>
    <div class="chart-wrapper">
        <Navigate :type="activeKey" class="header"></Navigate>
        <slot></slot>
    </div>
</template>
<script>
    import Navigate from './navigate'
    export default {
        data () {
            return {
                activeKey: '',
            }
        },
        methods: {
            updateActiveNav () {
                const route = this.$route.path;
                if (route.indexOf('d3FNetwork') > -1) {
                    this.activeKey = 'd3FNetwork';
                }
            }  
        },
        mounted() {
            this.updateActiveNav()
        },
        components: {
            Navigate
        }
    }
</script>
<style lang="less" scoped>
    .chart-wrapper {
        width: 100%;
        height: 100%;
        padding-top: 60px;
        .header {
            width: 100%;
            position: fixed;
            top: 0px;
        }
    }
</style>