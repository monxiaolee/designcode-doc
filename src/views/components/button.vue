<template>
    <i-article>
        <article>
            <h1>Button 按钮</h1>
            <p>基础组件，触发业务逻辑时使用。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="按钮类型">
                <div slot="demo">
                    <i-button>Default</i-button>
                    <i-button type="primary">Primary</i-button>
                    <i-button type="ghost">Ghost</i-button>
                    <i-button type="dashed">Dashed</i-button>
                    <i-button type="text">Text</i-button>
                    <br><br>
                    <i-button type="info">信息按钮</i-button>
                    <i-button type="success">成功按钮</i-button>
                    <i-button type="warning">警告按钮</i-button>
                    <i-button type="error">错误按钮</i-button>
                </div>
                <div slot="desc">
                    <p>按钮类型有：默认按钮、主按钮、幽灵按钮、虚线按钮、文字按钮以及四种颜色按钮。</p>
                    <p>通过设置<code>type</code>为<code>primary</code>、<code>ghost</code>、<code>dashed</code>、<code>text</code>、<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code>创建不同样式的按钮，不设置为默认样式。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.type }}</i-code>
            </Demo>
            <Demo title="图标按钮及按钮形状">
                <div slot="demo">
                    <i-button type="primary" shape="circle" icon="ios-search"></i-button>
                    <i-button type="primary" icon="ios-search">搜索</i-button>
                    <i-button type="primary" shape="circle" icon="ios-search">搜索</i-button>
                    <i-button type="primary" shape="circle">圆角按钮</i-button>
                    <br><br>
                    <i-button type="ghost" shape="circle" icon="ios-search"></i-button>
                    <i-button type="ghost" icon="ios-search">搜索</i-button>
                    <i-button type="ghost" shape="circle" icon="ios-search">搜索</i-button>
                    <i-button type="ghost" shape="circle">圆角按钮</i-button>
                </div>
                <div slot="desc">
                    <p>通过设置<code>icon</code>属性在<code>Button</code>内嵌入一个<code>Icon</code>，或者直接在<code>Button</code>内使用<code>Icon</code>组件。</p>
                    <p>使用<code>Button</code>的<code>icon</code>属性，图标位置将在最左边，如果需要自定义位置，需使用<code>Icon</code>组件。</p>
                    <p>通过设置<code>shape</code>属性为<code>circle</code>，可将按钮置为圆的形状。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.icon }}</i-code>
            </Demo>
            <Demo title="按钮尺寸">
                <div slot="demo">
                    <i-button type="primary" size="large">Large</i-button>
                    <i-button type="primary">Default</i-button>
                    <i-button type="primary" size="small">Small</i-button>
                    <br><br>
                    <i-button type="primary" shape="circle" size="large">Large</i-button>
                    <i-button type="primary" shape="circle">Default</i-button>
                    <i-button type="primary" shape="circle" size="small">Small</i-button>
                </div>
                <div slot="desc">
                    <p>按钮有三种尺寸：大、默认（中）、小</p>
                    <p>通过设置<code>size</code>为<code>large</code>和<code>small</code>将按钮设置为大和小尺寸，不设置为默认（中）尺寸。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.size }}</i-code>
            </Demo>
            <Demo title="长按钮">
                <div slot="demo">
                    <i-button type="success" long>确认提交</i-button>
                    <br><br>
                    <i-button type="error" long>确认删除</i-button>
                </div>
                <div slot="desc">
                    <p>通过设置属性 <code>long</code> 可将按钮宽度设置为 100%，常用于弹窗内操作按钮。</p>
                    <p>使用者也可以直接通过给组件添加 <code>style</code> 来设置更细节的样式，比如定宽。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.long }}</i-code>
            </Demo>
            <Demo title="不可用状态">
                <div slot="demo">
                    <i-button>Default</i-button>
                    <i-button disabled>Default(Disabled)</i-button>
                    <br><br>
                    <i-button type="primary">Primary</i-button>
                    <i-button type="primary" disabled>Primary(Disabled)</i-button>
                    <br><br>
                    <i-button type="ghost">Ghost</i-button>
                    <i-button type="ghost" disabled>Ghost(Disabled)</i-button>
                    <br><br>
                    <i-button type="dashed">Dashed</i-button>
                    <i-button type="dashed" disabled>Dashed(Disabled)</i-button>
                    <br><br>
                    <i-button type="text">Text</i-button>
                    <i-button type="text" disabled>Text(Disabled)</i-button>
                </div>
                <div slot="desc">
                    <p>通过添加<code>disabled</code>属性可将按钮设置为不可用状态。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.disabled }}</i-code>
            </Demo>
            <Demo title="加载中状态">
                <div slot="demo">
                    <i-button type="primary" loading>Loading...</i-button>
                    <i-button type="primary" :loading="loading" @click="toLoading">
                        <span v-if="!loading">Click me!</span>
                        <span v-else>Loading...</span>
                    </i-button>
                    <i-button type="primary" :loading="loading2" icon="checkmark-round" @click="toLoading2">
                        <span v-if="!loading2">Click me!</span>
                        <span v-else>Loading...</span>
                    </i-button>
                </div>
                <div slot="desc">
                    <p>通过添加<code>loading</code>属性可以让按钮处于加载中状态，后两个按钮在点击时进入加载状态。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.loading }}</i-code>
            </Demo>
            <Demo title="按钮组合">
                <div slot="demo">
                    <h4>基本</h4>
                    <br><br>
                    <Button-group>
                        <i-button>取消</i-button>
                        <i-button type="primary">确定</i-button>
                    </Button-group>
                    <Button-group>
                        <i-button disabled>昨日</i-button>
                        <i-button disabled>今日</i-button>
                        <i-button disabled>明日</i-button>
                    </Button-group>
                    <Button-group>
                        <i-button type="primary">L</i-button>
                        <i-button>M</i-button>
                        <i-button type="ghost">M</i-button>
                        <i-button type="dashed">R</i-button>
                    </Button-group>
                    <br><br>
                    <h4>配合图标</h4>
                    <br><br>
                    <Button-group>
                        <i-button type="primary">
                            <Icon type="chevron-left"></Icon>
                            前进
                        </i-button>
                        <i-button type="primary">
                            后退
                            <Icon type="chevron-right"></Icon>
                        </i-button>
                    </Button-group>
                    <Button-group>
                        <i-button type="primary" icon="ios-skipbackward"></i-button>
                        <i-button type="primary" icon="ios-skipforward"></i-button>
                    </Button-group>
                    <Button-group>
                        <i-button type="ghost" icon="ios-color-wand-outline"></i-button>
                        <i-button type="ghost" icon="ios-sunny-outline"></i-button>
                        <i-button type="ghost" icon="ios-crop"></i-button>
                        <i-button type="ghost" icon="ios-color-filter-outline"></i-button>
                    </Button-group>
                    <br><br>
                    <h4>圆角</h4>
                    <br><br>
                    <Button-group shape="circle">
                        <i-button type="primary">
                            <Icon type="chevron-left"></Icon>
                            前进
                        </i-button>
                        <i-button type="primary">
                            后退
                            <Icon type="chevron-right"></Icon>
                        </i-button>
                    </Button-group>
                    <Button-group shape="circle">
                        <i-button type="primary" icon="ios-skipbackward"></i-button>
                        <i-button type="primary" icon="ios-skipforward"></i-button>
                    </Button-group>
                    <Button-group shape="circle">
                        <i-button type="ghost" icon="ios-color-wand-outline"></i-button>
                        <i-button type="ghost" icon="ios-sunny-outline"></i-button>
                        <i-button type="ghost" icon="ios-crop"></i-button>
                        <i-button type="ghost" icon="ios-color-filter-outline"></i-button>
                    </Button-group>
                    <br><br>
                    <h4>尺寸</h4>
                    <br><br>
                    <Button-group size="large">
                        <i-button type="ghost">Large</i-button>
                        <i-button type="ghost">Large</i-button>
                    </Button-group>
                    <Button-group>
                        <i-button type="ghost">Default</i-button>
                        <i-button type="ghost">Default</i-button>
                    </Button-group>
                    <Button-group size="small">
                        <i-button type="ghost">Small</i-button>
                        <i-button type="ghost">Small</i-button>
                    </Button-group>
                    <br><br>
                    <Button-group size="large" shape="circle">
                        <i-button type="ghost">Large</i-button>
                        <i-button type="ghost">Large</i-button>
                    </Button-group>
                    <Button-group shape="circle">
                        <i-button type="ghost">Default</i-button>
                        <i-button type="ghost">Default</i-button>
                    </Button-group>
                    <Button-group size="small" shape="circle">
                        <i-button type="ghost">Small</i-button>
                        <i-button type="ghost">Small</i-button>
                    </Button-group>
                </div>
                <div slot="desc">
                    <p>将多个<code>Button</code>放入<code>ButtonGroup</code>内，可实现按钮组合的效果。</p>
                    <p>通过设置<code>ButtonGroup</code>的属性<code>size</code>为<code>large</code>和<code>small</code>，可将按钮组尺寸设置为大和小，不设置<code>size</code>，则为默认（中）尺寸。</p>
                    <p>通过设置<code>ButtonGroup</code>的属性<code>shape</code>为<code>circle</code>，可将按钮组形状设置为圆角。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.group }}</i-code>
            </Demo>
            <Demo title="按钮组纵向排列">
                <div slot="demo">
                    <Button-group vertical>
                        <i-button type="ghost" icon="social-facebook"></i-button>
                        <i-button type="ghost" icon="social-twitter"></i-button>
                        <i-button type="ghost" icon="social-googleplus"></i-button>
                        <i-button type="ghost" icon="social-tumblr"></i-button>
                    </Button-group>
                </div>
                <div slot="desc">
                    <p>通过设置<code>ButtonGroup</code>的属性<code>vertical</code>，可以使按钮组纵向排列。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.vertical }}</i-code>
            </Demo>
            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="iButton props" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>type</td>
                            <td>按钮类型，可选值为<code>primary</code>、<code>ghost</code>、<code>dashed</code>、<code>text</code>、<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code>或者不设置</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>按钮大小，可选值为<code>large</code>和<code>small</code>或者不设置</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>shape</td>
                            <td>按钮形状，可选值为<code>circle</code>或者不设置</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>long</td>
                            <td>开启后，按钮的长度为 100%</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>htmlType</td>
                            <td>设置<code>button</code>原生的<code>type</code>，可选值为<code>button</code>、<code>submit</code>、<code>reset</code></td>
                            <td>String</td>
                            <td>button</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>设置按钮为禁用状态</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>loading</td>
                            <td>设置按钮为加载中状态</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>设置按钮的图标类型</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="ButtonGroup props" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>size</td>
                            <td>按钮组合大小，可选值为<code>large</code>和<code>small</code>或者不设置</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>shape</td>
                            <td>按钮组合形状，可选值为<code>circle</code>或者不设置</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>vertical</td>
                            <td>是否纵向排列按钮组</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import Code from '../../code/button';
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
                code: Code,
                loading: false,
                loading2: false
            }
        },
        methods: {
            toLoading () {
                this.loading = true;
            },
            toLoading2 () {
                this.loading2 = true;
            }
        }
    }
</script>
