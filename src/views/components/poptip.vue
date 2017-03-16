<style scoped>
    .top,.bottom{
        text-align: center;
    }
    .center{
        width: 300px;
        margin: 10px auto;
        overflow: hidden;
    }
    .center-left{
        float: left;
    }
    .center-right{
        float: right;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Poptip 气泡提示</h1>
            <Anchor title="概述" h2></Anchor>
            <p>Poptip 与 Tooltip 类似，具有很多相同配置，不同点是 Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等。</p>
            <p>Poptip 还 confirm 确认框，与 Modal 不同的是，它会出现在就近元素，相对轻量。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <Poptip trigger="hover" title="提示标题" content="提示内容">
                        <i-button>hover 激活</i-button>
                    </Poptip>
                    <Poptip title="提示标题" content="提示内容">
                        <i-button>click 激活</i-button>
                    </Poptip>
                    <Poptip trigger="focus" title="提示标题" content="提示内容">
                        <i-button>focus 激活</i-button>
                    </Poptip>
                    <Poptip trigger="focus" title="提示标题" content="提示内容">
                        <i-input placeholder="输入框的 focus"></i-input>
                    </Poptip>
                </div>
                <div slot="desc">
                    <p>支持三种触发方式：鼠标悬停、点击、聚焦。默认是点击。</p>
                    <p>注意 Poptip 内的文本使用了 <code>white-space: nowrap;</code>，即不自动换行，如需展示很多内容并自动换行时，建议给内容 slot 增加样式 <code>white-space: normal;</code>。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="位置">
                <div slot="demo">
                    <div class="top">
                        <Poptip title="提示标题" content="提示内容" placement="top-start">
                            <i-button>上左</i-button>
                        </Poptip>
                        <Poptip title="提示标题" content="提示内容" placement="top">
                            <i-button>上边</i-button>
                        </Poptip>
                        <Poptip title="提示标题" content="提示内容" placement="top-end">
                            <i-button>上右</i-button>
                        </Poptip>
                    </div>
                    <div class="center">
                        <div class="center-left">
                            <Poptip title="提示标题" content="提示内容" placement="left-start">
                                <i-button>左上</i-button>
                            </Poptip><br><br>
                            <Poptip title="提示标题" content="提示内容" placement="left">
                                <i-button>左边</i-button>
                            </Poptip><br><br>
                            <Poptip title="提示标题" content="提示内容" placement="left-end">
                                <i-button>左下</i-button>
                            </Poptip>
                        </div>
                        <div class="center-right">
                            <Poptip title="提示标题" content="提示内容" placement="right-start">
                                <i-button>右上</i-button>
                            </Poptip><br><br>
                            <Poptip title="提示标题" content="提示内容" placement="right">
                                <i-button>右边</i-button>
                            </Poptip><br><br>
                            <Poptip title="提示标题" content="提示内容" placement="right-end">
                                <i-button>右下</i-button>
                            </Poptip>
                        </div>
                    </div>
                    <div class="bottom">
                        <Poptip title="提示标题" content="提示内容" placement="bottom-start">
                            <i-button>下左</i-button>
                        </Poptip>
                        <Poptip title="提示标题" content="提示内容" placement="bottom">
                            <i-button>下边</i-button>
                        </Poptip>
                        <Poptip title="提示标题" content="提示内容" placement="bottom-end">
                            <i-button>下右</i-button>
                        </Poptip>
                    </div>
                </div>
                <div slot="desc">
                    <p>组件提供了12个不同的方向显示Poptip，具体配置可查看API。。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.placement }}</i-code>
            </Demo>
            <Demo title="从浮层内关闭">
                <div slot="demo">
                    <Poptip :visible.sync="visible">
                        <a>click 激活</a>
                        <div slot="title"><i>自定义标题</i></div>
                        <div slot="content">
                            <a @click="close">关闭提示框</a>
                        </div>
                    </Poptip>
                </div>
                <div slot="desc">
                    <p>通过属性<code>visible</code>来控制提示框的显示和隐藏。需要将<code>visible</code>设置<code>.sync</code>实现数据的双向绑定，否则在改变状态时，使用者的数据并没有变化。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.visible }}</i-code>
            </Demo>
            <Demo title="嵌套复杂内容">
                <div slot="demo">
                    <Poptip placement="right" width="400">
                        <i-button type="ghost">click 激活</i-button>
                        <div class="api" slot="content">
                            <table>
                                <thead>
                                    <tr>
                                        <th>版本号</th>
                                        <th>更新时间</th>
                                        <th>说明</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0.9.5</td>
                                        <td>2016-10-26</td>
                                        <td>新增信息提示组件 <code>Tooltip</code>和<code>Poptip</code></td>
                                    </tr>
                                    <tr>
                                        <td>0.9.4</td>
                                        <td>2016-10-25</td>
                                        <td>新增对话框组件 <code>Modal</code></td>
                                    </tr>
                                    <tr>
                                        <td>0.9.2</td>
                                        <td>2016-09-28</td>
                                        <td>新增选择器组件 <code>Select</code></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Poptip>
                </div>
                <div slot="desc">
                    <p>通过自定义 slot 来实现复杂的内容。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.slot }}</i-code>
            </Demo>
            <Demo title="确认框">
                <div slot="demo">
                    <Poptip
                        confirm
                        title="您确认删除这条内容吗？"
                        @on-ok="ok"
                        @on-cancel="cancel">
                        <i-button>删除</i-button>
                    </Poptip>
                    <Poptip
                        confirm
                        title="Are you sure delete this task?"
                        @on-ok="ok"
                        @on-cancel="cancel"
                        ok-text="yes"
                        cancel-text="no">
                        <i-button>国际化</i-button>
                    </Poptip>
                </div>
                <div slot="desc">
                    <p>通过设置属性<code>confirm</code>开启确认框模式。确认框只会以 click 的形式激活，并且只会显示 title 的内容，忽略 content。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.confirm }}</i-code>
            </Demo>
            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Poptip props" h3></Anchor>
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
                            <td>trigger</td>
                            <td>触发方式，可选值为<code>hover</code>（悬停）<code>click</code>（点击）<code>focus</code>（聚焦）,在 confirm 模式下，只有 click 有效</td>
                            <td>String</td>
                            <td>click</td>
                        </tr>
                        <tr>
                            <td>title</td>
                            <td>显示的标题</td>
                            <td>String | Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>content</td>
                            <td>显示的正文内容，只在非 confirm 模式下有效</td>
                            <td>String | Number</td>
                            <td>空</td>
                        </tr>
                        <tr>
                            <td>placement</td>
                            <td>提示框出现的位置，可选值为<code>top</code><code>top-start</code><code>top-end</code><code>bottom</code><code>bottom-start</code><code>bottom-end</code><code>left</code><code>left-start</code><code>left-end</code><code>right</code><code>right-start</code><code>right-end</code></td>
                            <td>String</td>
                            <td>top</td>
                        </tr>
                        <tr>
                            <td>width</td>
                            <td>宽度，最小宽度为 150px，在 confirm 模式下，默认最大宽度为 300px</td>
                            <td>String | Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>confirm</td>
                            <td>是否开启对话框模式</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>ok-text</td>
                            <td>确定按钮的文字，只在 confirm 模式下有效</td>
                            <td>String</td>
                            <td>确定</td>
                        </tr>
                        <tr>
                            <td>cancel-text</td>
                            <td>取消按钮的文字，只在 confirm 模式下有效</td>
                            <td>String</td>
                            <td>取消</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Poptip events" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>事件名</th>
                            <th>说明</th>
                            <th>返回值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>on-popper-hide</td>
                            <td>在提示框消失时触发</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>on-ok</td>
                            <td>点击确定的回调，只在 confirm 模式下有效</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>on-cancel</td>
                            <td>点击取消的回调，只在 confirm 模式下有效</td>
                            <td>无</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Poptip slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>无</td>
                            <td>主体内容</td>
                        </tr>
                        <tr>
                            <td>title</td>
                            <td>提示框标题，定义此 slot 时，会覆盖 props <code>title</code></td>
                        </tr>
                        <tr>
                            <td>content</td>
                            <td>提示框内容，定义此 slot 时，会覆盖 props <code>content</code>，只在非 confirm 模式下有效</td>
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
    import Code from '../../code/poptip';
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
                visible: false
            }
        },
        methods: {
            close () {
                this.visible = false;
            },
            ok () {
                this.$Message.info('点击了确定');
            },
            cancel () {
                this.$Message.info('点击了取消');
            }
        }
    }
</script>