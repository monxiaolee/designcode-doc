<style scoped lang="less">
    .demo-color-name{
        color: #fff;
        font-size: 16px;
        &.dark{
            color: #657180;
        }
    }
    .demo-color-desc{
        color: #fff;
        opacity: .7;
        &.dark{
            color: #657180;
        }
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Color 色彩</h1>
            <Anchor title="概述" h2></Anchor>
            <p></p>
            <Anchor title="主色" h3></Anchor>
            <p>本主题位透明元素元素主题。主要效果的表达是来自后边的背景图。所以，建议切换到透明元素背景的时候，界面右上角能有个选背景图的设置，提供几张背景图。这样本主题表现形式更加的饱满。</p>
            <Row :gutter="16">
                <i-col span="8">
                    <Card :bordered="false" style="background:#2d8cf0">
                        <div class="demo-color-name">Primary</div>
                        <div class="demo-color-desc">#2d8cf0</div>
                    </Card>
                </i-col>
                <i-col span="8">
                    <Card :bordered="false" style="background:#5cadff">
                        <div class="demo-color-name">Light Primary</div>
                        <div class="demo-color-desc">#5cadff</div>
                    </Card>
                </i-col>
                <i-col span="8">
                    <Card :bordered="false" style="background:#2b85e4">
                        <div class="demo-color-name">Dark Primary</div>
                        <div class="demo-color-desc">#2b85e4</div>
                    </Card>
                </i-col>
            </Row>
            <br>
            <Anchor title="辅助色" h3></Anchor>
            <p>辅助色是来辅助界面所要表达含义的颜色。比如，当界面中有想表达失败、成功、警告灯类似情况的时候。辅助颜色就达到了，主色所不能表达的场景。</p>
            <Row :gutter="16">
                <i-col span="6">
                    <Card :bordered="false" style="background:#2d8cf0">
                        <div class="demo-color-name">信息</div>
                        <div class="demo-color-desc">#2d8cf0</div>
                    </Card>
                </i-col>
                <i-col span="6">
                    <Card :bordered="false" style="background:#19be6b">
                        <div class="demo-color-name">成功</div>
                        <div class="demo-color-desc">#19be6b</div>
                    </Card>
                </i-col>
                <i-col span="6">
                    <Card :bordered="false" style="background:#ff9900">
                        <div class="demo-color-name">警告</div>
                        <div class="demo-color-desc">#ff9900</div>
                    </Card>
                </i-col>
                <i-col span="6">
                    <Card :bordered="false" style="background:#ed3f14">
                        <div class="demo-color-name">失败</div>
                        <div class="demo-color-desc">#ed3f14</div>
                    </Card>
                </i-col>
            </Row>
            <br>
            <Anchor title="中性色" h3></Anchor>
            <p>中性色常用以表达页面结构层次关系的颜色。比如边线、标题、阴影等。</p>
            <Row :gutter="16">
                <i-col span="6">
                    <Card :bordered="false" style="background:#1c2438">
                        <div class="demo-color-name">标题 Title</div>
                        <div class="demo-color-desc">#1c2438</div>
                    </Card>
                </i-col>
                <i-col span="6">
                    <Card :bordered="false" style="background:#495060">
                        <div class="demo-color-name">正文 Content</div>
                        <div class="demo-color-desc">#495060</div>
                    </Card>
                </i-col>
                <i-col span="6">
                    <Card :bordered="false" style="background:#80848f">
                        <div class="demo-color-name">辅助/图标 Sub Color</div>
                        <div class="demo-color-desc">#80848f</div>
                    </Card>
                </i-col>
                <i-col span="6">
                    <Card :bordered="false" style="background:#bbbec4">
                        <div class="demo-color-name">失效 Disabled</div>
                        <div class="demo-color-desc">#bbbec4</div>
                    </Card>
                </i-col>
            </Row>
            <br>
            <Row :gutter="16">
                <i-col span="6">
                    <Card :bordered="false" style="background:#dddee1">
                        <div class="demo-color-name dark">边框 Border</div>
                        <div class="demo-color-desc dark">#dddee1</div>
                    </Card>
                </i-col>
                <i-col span="6">
                    <Card :bordered="false" style="background:#e9eaec">
                        <div class="demo-color-name dark">分割线 Divider</div>
                        <div class="demo-color-desc dark">#e9eaec</div>
                    </Card>
                </i-col>
                <i-col span="6">
                    <Card :bordered="false" style="background:#f8f8f9">
                        <div class="demo-color-name dark">背景 Background</div>
                        <div class="demo-color-desc dark">#f8f8f9</div>
                    </Card>
                </i-col>
            </Row>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            Anchor
        },
        data () {
            return {

            }
        }
    }
</script>