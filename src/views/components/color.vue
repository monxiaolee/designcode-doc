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
            <p>iView 推荐使用以下调色板的颜色作为设计和开发规范，以保证页面和组件之间的视觉一致。</p>
            <Anchor title="主色" h3></Anchor>
            <p>iView 使用较为安全的蓝色作为主色调，其中 Light Primary 常用于 hover，Dark Primary 常用于 active。</p>
            <Row :gutter="16">
                <i-col span="8">
                    <Card :bordered="false" style="background:#3399ff">
                        <div class="demo-color-name">Primary</div>
                        <div class="demo-color-desc">#3399ff</div>
                    </Card>
                </i-col>
                <i-col span="8">
                    <Card :bordered="false" style="background:#5cadff">
                        <div class="demo-color-name">Light Primary</div>
                        <div class="demo-color-desc">#5cadff</div>
                    </Card>
                </i-col>
                <i-col span="8">
                    <Card :bordered="false" style="background:#3091f2">
                        <div class="demo-color-name">Dark Primary</div>
                        <div class="demo-color-desc">#3091f2</div>
                    </Card>
                </i-col>
            </Row>
            <br>
            <Anchor title="辅助色" h3></Anchor>
            <p>辅助色是具有代表性的颜色，常用于信息提示，比如成功、警告和失败。</p>
            <Row :gutter="16">
                <i-col span="6">
                    <Card :bordered="false" style="background:#3399ff">
                        <div class="demo-color-name">Info</div>
                        <div class="demo-color-desc">#3399ff</div>
                    </Card>
                </i-col>
                <i-col span="6">
                    <Card :bordered="false" style="background:#00cc66">
                        <div class="demo-color-name">Success</div>
                        <div class="demo-color-desc">#00cc66</div>
                    </Card>
                </i-col>
                <i-col span="6">
                    <Card :bordered="false" style="background:#ff9900">
                        <div class="demo-color-name">Warning</div>
                        <div class="demo-color-desc">#ff9900</div>
                    </Card>
                </i-col>
                <i-col span="6">
                    <Card :bordered="false" style="background:#ff3300">
                        <div class="demo-color-name">Error</div>
                        <div class="demo-color-desc">#ff3300</div>
                    </Card>
                </i-col>
            </Row>
            <br>
            <Anchor title="中性色" h3></Anchor>
            <p>中性色常用于文本、背景、边框、阴影等，可以体现出页面的层次结构。</p>
            <Row :gutter="16">
                <i-col span="6">
                    <Card :bordered="false" style="background:#464c5b">
                        <div class="demo-color-name">标题 Title</div>
                        <div class="demo-color-desc">#464c5b</div>
                    </Card>
                </i-col>
                <i-col span="6">
                    <Card :bordered="false" style="background:#657180">
                        <div class="demo-color-name">正文 Content</div>
                        <div class="demo-color-desc">#657180</div>
                    </Card>
                </i-col>
                <i-col span="6">
                    <Card :bordered="false" style="background:#9ea7b4">
                        <div class="demo-color-name">辅助/图标 Sub Color</div>
                        <div class="demo-color-desc">#9ea7b4</div>
                    </Card>
                </i-col>
                <i-col span="6">
                    <Card :bordered="false" style="background:#c3cbd6">
                        <div class="demo-color-name">失效 Disabled</div>
                        <div class="demo-color-desc">#c3cbd6</div>
                    </Card>
                </i-col>
            </Row>
            <br>
            <Row :gutter="16">
                <i-col span="6">
                    <Card :bordered="false" style="background:#d7dde4">
                        <div class="demo-color-name dark">边框 Border</div>
                        <div class="demo-color-desc dark">#d7dde4</div>
                    </Card>
                </i-col>
                <i-col span="6">
                    <Card :bordered="false" style="background:#e3e8ee">
                        <div class="demo-color-name dark">分割线 Divider</div>
                        <div class="demo-color-desc dark">#e3e8ee</div>
                    </Card>
                </i-col>
                <i-col span="6">
                    <Card :bordered="false" style="background:#f5f7f9">
                        <div class="demo-color-name dark">背景 Background</div>
                        <div class="demo-color-desc dark">#f5f7f9</div>
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