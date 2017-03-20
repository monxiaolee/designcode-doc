<style>
    .live-cover{
        height: 150px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .live-info{
        height: 130px;
        padding: 10px;
    }
    .live-title{
        font-size: 16px;
        font-weight: bold;
    }
    .live-time{
        margin-top: 5px;
    }
    .live-cost{
        margin-top: 5px;
    }
    .live-desc{
        margin-top: 5px;
        color: #9ea7b4;
    }
    .live-link{
        height: 150px;
        line-height: 150px;
        text-align: center;
        display: block;
    }
</style>
<template>
    <i-article>
        <article style="min-height: 500px">
            <h1>iView 讲堂</h1>
            <p>iView 讲堂以技术分享为目的，不定期地以直播或录制视频的形式开展。</p>
            <blockquote>近期直播：</blockquote>
            <Card v-for="(item, index) in list" :key="item.title">
                <Row>
                    <i-col span="6">
                        <div class="live-cover" :style="{'backgroundImage': 'url(' + item.cover + ')'}"></div>
                    </i-col>
                    <i-col span="14">
                        <div class="live-info">
                            <div class="live-title">{{ item.title }}</div>
                            <div class="live-time">开播时间：{{ item.time }}</div>
                            <div class="live-cost">报名费用：<span style="color: #ff5500">{{ item.cost }}</span></div>
                            <div class="live-desc">{{ item.desc }}</div>
                        </div>
                    </i-col>
                    <i-col span="4">
                        <div class="live-link">
                            <i-button type="primary" @click="handleClick(index)">
                                <div><Icon type="android-arrow-dropright-circle" size="20"></Icon></div>
                                <div>报名参加</div>
                            </i-button>
                        </div>
                    </i-col>
                </Row>
            </Card>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../components/article.vue';
    import Anchor from '../components/anchor.vue';
    import Config from '../config/config';

    export default {
        components: {
            iArticle,
            Anchor
        },
        data () {
            return {
                list: [
                    {
                        title: '基于 Vue.js 2.x 的 iView 组件开发实践',
                        time: '2017-03-23 20:00',
                        cost: '1元',
                        cover: 'https://ooo.0o0.ooo/2017/03/16/58c96bdc984ec.jpeg',
                        desc: 'iView 2.0 版本发布了测试版，已全面支持 Vue.js 2.x。直播主要介绍 iView 2.0 的组件开发实践。主要内容为：升级 2.0 经验分享；部分组件设计思路；Q & A',
                        link: 'https://segmentfault.com/l/1500000008614960'
                    }
                ]
            }
        },
        methods: {
            handleClick (index) {
                window.open(this.list[index].link);
            }
        },
        created () {
            window.localStorage.setItem('liveVersion', Config.liveVersion);
        }
    }
</script>