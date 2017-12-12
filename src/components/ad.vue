<template>
    <div v-if="lang === 'zh-CN'">
        <div class="advertisement">
            <row :gutter="32">
                <i-col span="12">
                    <div class="advertisement-main">
                        <a href="https://github.com/TalkingData/inmap" target="_blank">
                            <img src="../images/ad-inmap.png">
                        </a>
                        <ad-send></ad-send>
                    </div>
                </i-col>
                <i-col span="12">
                    <div class="advertisement-main">
                        <a href="https://edu.talkingdata.com" target="_blank">
                            <img src="../images/ad-tdu.png">
                        </a>
                        <ad-send></ad-send>
                    </div>
                </i-col>
                <i-col span="12">

                </i-col>
            </row>
        </div>
    </div>
</template>
<script>
    import adSend from './ad-send.vue';

    export default {
        components: { adSend },
        data () {
            return {
                lang: this.$lang
            }
        },
        mounted () {
            this.lang = this.$lang;
        }
    }
</script>
<style lang="less">
    .advertisement{
        margin: 32px 0;
        padding: 6px;
        border: 1px solid #dddee1;
        border-radius: 6px;

        &-main{
            position: relative;
        }

        a:after{
            display: none;
        }
        img{
            width: 100%;
        }
    }
</style>