<style>
    .demo-case-img{
        width: 100%;
    }
    .demo-case-img img{
        width: 100%;
    }
    .ivu-card {
        cursor: pointer;
        display: inline-block;
        margin-right: 20px;
    }
</style>
<template>
    <i-article>
        <article>
            <Card style="width:320px" @click.native="lickSC">
                <div style="text-align:center">
                    <img src="../../images/staticR-logo.png">
                    <h3>大屏测试项目（SC）</h3>
                </div>
            </Card>
            <Card style="width:320px" @click.native="lickSC">
                <div style="text-align:center">
                    <img src="../../images/staticR-logo.png">
                    <h3>个人博客（PG）</h3>
                </div>
            </Card>
            <div class=""></div>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Anchor
        },
        data () {
            return {

            }
        },
        methods: {
            lickSC () {
                // 跳转到大屏测试项目地址
            }
        }
    };
</script>