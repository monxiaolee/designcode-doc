<template>
    <i-article>
        <article>
            <h1>Alert 警告提示</h1>
            <Anchor title="概述" h2></Anchor>
            <p>静态地呈现一些警告信息，可手动关闭。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <Alert>消息提示文案</Alert>
                    <Alert type="success">成功提示文案</Alert>
                    <Alert type="warning">警告提示文案</Alert>
                    <Alert type="error">错误提示文案</Alert>
                </div>
                <div slot="desc">
                    <p>基本使用方法，有四种样式可以选择<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code>。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="含描述信息">
                <div slot="demo">
                    <Alert>
                        消息提示文案
                        <template slot="desc">消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案</template>
                    </Alert>
                    <Alert type="success">
                        成功提示文案
                        <span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案</span>
                    </Alert>
                    <Alert type="warning">
                        警告提示文案
                        <template slot="desc">
                            警告的提示描述文案警告的提示描述文案警告的提示描述文案
                        </template>
                    </Alert>
                    <Alert type="error">
                        错误提示文案
                        <span slot="desc">
                            自定义错误描述文案。<Icon type="help-circled" size="14"></Icon>
                        </span>
                    </Alert>
                </div>
                <div slot="desc">
                    <p>自定义<code>&lt;slot name="desc"&gt;</code>描述内容。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.desc }}</i-code>
            </Demo>
            <Demo title="图标">
                <div slot="demo">
                    <Alert show-icon>消息提示文案</Alert>
                    <Alert type="success" show-icon>成功提示文案</Alert>
                    <Alert type="warning" show-icon>警告提示文案</Alert>
                    <Alert type="error" show-icon>错误提示文案</Alert>
                    <Alert show-icon>
                        消息提示文案
                        <template slot="desc">消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案</template>
                    </Alert>
                    <Alert type="success" show-icon>
                        成功提示文案
                        <span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案</span>
                    </Alert>
                    <Alert type="warning" show-icon>
                        警告提示文案
                        <template slot="desc">
                            警告的提示描述文案警告的提示描述文案警告的提示描述文案
                        </template>
                    </Alert>
                    <Alert type="error" show-icon>
                        错误提示文案
                        <span slot="desc">
                            自定义错误描述文案。
                        </span>
                    </Alert>
                    <Alert show-icon>
                        自定义图标
                        <Icon type="ios-lightbulb-outline" slot="icon"></Icon>
                        <template slot="desc">自定义图标文案自定义图标文案自定义图标文案自定义图标文案自定义图标文案</template>
                    </Alert>
                </div>
                <div slot="desc">
                    <p>根据 type 属性自动添加不同图标，或者自定义图标 slot 。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.icon }}</i-code>
            </Demo>
            <Demo title="可关闭">
                <div slot="demo">
                    <Alert closable>消息提示文案</Alert>
                    <Alert type="success" show-icon closable>
                        成功提示文案
                        <span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案</span>
                    </Alert>
                    <Alert type="warning" closable>
                        自定义关闭内容
                        <span slot="close">不再提示</span>
                    </Alert>
                </div>
                <div slot="desc">
                    <p>显示关闭按钮，点击可关闭提示，也可以自定义关闭 slot 。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.close }}</i-code>
            </Demo>
            <Demo title="顶部公告">
                <div slot="demo">
                    <Alert banner type="warning">通知：通知内容。。。</Alert>
                    <Alert banner closable type="warning">通知：通知内容。。。</Alert>
                </div>
                <div slot="desc">
                    <p>设置属性 <code>banner</code> 可以应用顶部公告的样式。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.banner }}</i-code>
            </Demo>
            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Alert props" h3></Anchor>
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
                            <td>警告提示样式，可选值为<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code></td>
                            <td>String</td>
                            <td>info</td>
                        </tr>
                        <tr>
                            <td>closable</td>
                            <td>是否可关闭</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>show-icon</td>
                            <td>是否显示图标</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Alert events" h3></Anchor>
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
                            <td>on-close</td>
                            <td>关闭时触发</td>
                            <td>event</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Alert slot" h3></Anchor>
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
                            <td>警告提示内容</td>
                        </tr>
                        <tr>
                            <td>desc</td>
                            <td>警告提示辅助性文字介绍</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>自定义图标内容</td>
                        </tr>
                        <tr>
                            <td>close</td>
                            <td>自定义关闭内容</td>
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
    import Code from '../../code/alert';
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
                code: Code
            }
        },
        methods: {

        }
    }
</script>