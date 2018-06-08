<template>
    <i-article>
        <article>
            <h1>颜色标准</h1>
            <Anchor title="主色" h3></Anchor>
            <p>本套主题，因为是半透明主题。所以背景色在很大程度上丰富了，界面色彩。所以建议当系统主题切换半透明的时候右上角有个设置按钮来更换背景。丰富主题。</p>
            <Row :gutter="16">
                <i-col span="8">
                    <Card :bordered="false" style="background: #ffffff; border: 1px solid #dddddd;">
                        <div class="demo-color-name">主色调</div>
                        <div class="demo-color-desc">#ffffff</div>
                    </Card>
                </i-col>
                <!-- 
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
                -->
            </Row>
            <br>
            <Anchor title="辅助色" h3></Anchor>
            <p>一个系统只有色彩就太单调了。为了表达出更丰富的情感，一般都会提供几张辅助色。来表达例如：成功、失败、警示的情感。</p>
            <Row :gutter="16">
                <i-col span="8">
                    <Card :bordered="false" style="background:#4b8cff">
                        <div class="demo-color-name">信息</div>
                        <div class="demo-color-desc">#4b8cff</div>
                    </Card>
                </i-col>
                <i-col span="8">
                    <Card :bordered="false" style="background:#59AD2F">
                        <div class="demo-color-name">成功</div>
                        <div class="demo-color-desc">#59AD2F</div>
                    </Card>
                </i-col>
                <i-col span="8">
                    <Card :bordered="false" style="background:#FF9806">
                        <div class="demo-color-name">警告</div>
                        <div class="demo-color-desc">#FF9806</div>
                    </Card>
                </i-col>
                <i-col span="8" style="margin-top: 18px;">
                    <Card :bordered="false" style="background:#A62D2D">
                        <div class="demo-color-name">错误</div>
                        <div class="demo-color-desc">#A62D2D</div>
                    </Card>
                </i-col>
            </Row>
            <p>一般情况下用信息颜色。当有一些提示、警告意味的颜色。选取特定颜色。</p>
            <br>
            <Anchor title="中性色" h3></Anchor>
            <p>为了丰富页面细节和层次、本套主题提供了一些中性色。比如线条、阴影等。</p>
            <Row :gutter="16">
                <i-col span="8">
                    <Card :bordered="false" style="background: #rgba(255, 255, 255, .3); border: 1px solid #dddddd;">
                        <div class="demo-color-name">线条颜色</div>
                        <div class="demo-color-desc">rgba(255, 255, 255, .3)</div>
                    </Card>
                </i-col>
                <i-col span="8">
                    <Card :bordered="false" style="background: #ffffff; border: 1px solid #dddddd; box-shadow: 0 5px 15px rgba(0,0,0,.5);">
                        <div class="demo-color-name">阴影</div>
                        <div class="demo-color-desc">0 5px 15px rgba(0,0,0,.5)</div>
                    </Card>
                </i-col>
            </Row>
            <!-- 
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
            -->
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../../components/article.vue';
    import iCode from '../../../components/code.vue';
    import Code from '../../../code/guide';
    import Demo from '../../../components/demo.vue';
    import Anchor from '../../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Anchor,
            Demo
        },
        data () {
            return {
                code: Code,
                value: [20, 50]
            }
        },
        methods: {

        }
    }
</script>