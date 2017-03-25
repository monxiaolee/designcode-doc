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
            <h1>Color</h1>
            <Anchor title="Overview" h2></Anchor>
            <p>iView recommends to use the colors of the palette below as the rule for design and development for ensuring the visual consistence among the pages and components.</p>
            <Anchor title="Primary Colors" h3></Anchor>
            <p>iView use the safe blue colors as the primary colors, among which the <strong>Light Primary</strong> is usually used for <i>hover</i> state while the <strong>Dark Primary</strong> for <i>active</i>.</p>
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
            <Anchor title="Secondary Colors" h3></Anchor>
            <p>The secondary colors are typical ones, which usually used for messages, e.g., success, warning and fail.</p>
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
            <Anchor title="Neutral Colors" h3></Anchor>
            <p>Neutral colors are usually used for text, background, border, shadow, etc, showing the hierachical structure of the page.</p>
            <Row :gutter="16">
                <i-col span="6">
                    <Card :bordered="false" style="background:#464c5b">
                        <div class="demo-color-name">Title</div>
                        <div class="demo-color-desc">#464c5b</div>
                    </Card>
                </i-col>
                <i-col span="6">
                    <Card :bordered="false" style="background:#657180">
                        <div class="demo-color-name">Content</div>
                        <div class="demo-color-desc">#657180</div>
                    </Card>
                </i-col>
                <i-col span="6">
                    <Card :bordered="false" style="background:#9ea7b4">
                        <div class="demo-color-name">Sub Color</div>
                        <div class="demo-color-desc">#9ea7b4</div>
                    </Card>
                </i-col>
                <i-col span="6">
                    <Card :bordered="false" style="background:#c3cbd6">
                        <div class="demo-color-name">Disabled</div>
                        <div class="demo-color-desc">#c3cbd6</div>
                    </Card>
                </i-col>
            </Row>
            <br>
            <Row :gutter="16">
                <i-col span="6">
                    <Card :bordered="false" style="background:#d7dde4">
                        <div class="demo-color-name dark">Border</div>
                        <div class="demo-color-desc dark">#d7dde4</div>
                    </Card>
                </i-col>
                <i-col span="6">
                    <Card :bordered="false" style="background:#e3e8ee">
                        <div class="demo-color-name dark">Divider</div>
                        <div class="demo-color-desc dark">#e3e8ee</div>
                    </Card>
                </i-col>
                <i-col span="6">
                    <Card :bordered="false" style="background:#f5f7f9">
                        <div class="demo-color-name dark">Background</div>
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