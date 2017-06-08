<style lang="less">
    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal{
            top: 0;
        }
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Modal</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>Modal dialog. It's shown in the floating layer. It's used to guide user do certain operations.</p>
            <p><code>Modal</code> provides two usages: normal component using & encapsulated instance calling.</p>
            <Anchor title="Examples" h2></Anchor>
            <Anchor title="Normal Component Usage" h3></Anchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <Button type="primary" @click="modal1 = true">显示对话框</Button>
                    <Modal
                        v-model="modal1"
                        title="普通的Modal对话框标题"
                        @on-ok="ok"
                        @on-cancel="cancel">
                        <p>对话框内容</p>
                        <p>对话框内容</p>
                        <p>对话框内容</p>
                    </Modal>
                </div>
                <div slot="desc">
                    <p>The easiest way to display / hide Modal is to control <code>visible</code> prop.</p>
                    <p>Use v-model to enable two-way binding.</p>
                    <p>Tap <code>ESC</code> button can close it too.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="Custom Style">
                <div slot="demo">
                    <Button @click="modal2 = true">自定义页头和页脚</Button>
                    <Modal v-model="modal2" width="360">
                        <p slot="header" style="color:#f60;text-align:center">
                            <Icon type="information-circled"></Icon>
                            <span>删除确认</span>
                        </p>
                        <div style="text-align:center">
                            <p>此任务删除后，下游 10 个任务将无法执行。</p>
                            <p>是否继续删除？</p>
                        </div>
                        <div slot="footer">
                            <Button type="error" size="large" long :loading="modal_loading" @click="del">删除</Button>
                        </div>
                    </Modal>
                    <Button @click="modal3 = true">不带标题栏</Button>
                    <Modal v-model="modal3">
                        <p>对话框内容</p>
                        <p>对话框内容</p>
                        <p>对话框内容</p>
                    </Modal>
                    <Button @click="modal4 = true">国际化</Button>
                    <Modal
                        v-model="modal4"
                        title="Modal Title"
                        ok-text="OK"
                        cancel-text="Cancel">
                        <p>Something...</p>
                        <p>Something...</p>
                        <p>Something...</p>
                    </Modal>
                    <Button @click="modal5 = true">设置宽度</Button>
                    <Modal
                        v-model="modal5"
                        title="自定义宽度"
                        width="300">
                        <p>自定义宽度，单位 px，默认 520px。</p>
                        <p>对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动<code>auto</code>。</p>
                    </Modal>
                </div>
                <div slot="desc">
                    <p>Modal component provieds a set of custom style API and Slots which are very flexible. You can control any part of the Modal like header, footer and close button.</p>
                    <p>You can realise complex functions by interact with other components. It satisfies most business scenarios.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.custom }}</i-code>
            </Demo>
            <Demo title="Asynchronous Close">
                <div slot="demo">
                    <Button type="primary" @click="modal6 = true">显示对话框</Button>
                    <Modal
                        v-model="modal6"
                        title="对话框标题"
                        :loading="loading"
                        @on-ok="asyncOK">
                        <p>点击确定后，对话框将在 2秒 后关闭。</p>
                    </Modal>
                </div>
                <div slot="desc">
                    <p>After Setting <code>loading</code> prop to <code>Modal</code>, Modal will not disappear automatically and will show loading status. It needs to be closed manually. This is often used on form submission.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.async }}</i-code>
            </Demo>
            <Demo title="Disable Close">
                <div slot="demo">
                    <Button @click="modal7 = true">禁用右上角关闭（含Esc键）</Button>
                    <Modal
                        title="对话框标题"
                        v-model="modal7"
                        :closable="false">
                        <p>对话框内容</p>
                        <p>对话框内容</p>
                        <p>对话框内容</p>
                    </Modal>
                    <Button @click="modal8 = true">禁用遮罩层关闭</Button>
                    <Modal
                        title="对话框标题"
                        v-model="modal8"
                        :mask-closable="false">
                        <p>对话框内容</p>
                        <p>对话框内容</p>
                        <p>对话框内容</p>
                    </Modal>
                </div>
                <div slot="desc">
                    <p>You can disable closing or mask-closing.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.close }}</i-code>
            </Demo>
            <Demo title="Custom Position">
                <div slot="demo">
                    <Button @click="modal9 = true">距离顶部 20px</Button>
                    <Modal
                        title="对话框标题"
                        v-model="modal9"
                        :styles="{top: '20px'}">
                        <p>对话框内容</p>
                        <p>对话框内容</p>
                        <p>对话框内容</p>
                    </Modal>
                    <Button @click="modal10 = true">垂直居中</Button>
                    <Modal
                        title="对话框标题"
                        v-model="modal10"
                        class-name="vertical-center-modal">
                        <p>对话框内容</p>
                        <p>对话框内容</p>
                        <p>对话框内容</p>
                    </Modal>
                </div>
                <div slot="desc">
                    <p>You can customize Modal's style and its Wrap's class name to realise many custom styles like vertical center.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.position }}</i-code>
            </Demo>
            <Anchor title="Instantiation Usage" h3></Anchor>
            <p>Besides normal component usages mentioned above, iView has encapsulated some instance methods elaborately to create one-off light Modal.</p>
            <p>The instance create a Modal globally by creating a Vue component implicitly. It will be destroyed after disappeared. So you can only operate one insatnce at the same time.</p>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <Button @click="instance('info')">消息</Button>
                    <Button @click="instance('success')">成功</Button>
                    <Button @click="instance('warning')">警告</Button>
                    <Button @click="instance('error')">错误</Button>
                </div>
                <div slot="desc">
                    <p>Four basic Modals which only provides a confirm button.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.baseInstance }}</i-code>
            </Demo>
            <Demo title="Confirm Modal">
                <div slot="demo">
                    <Button @click="confirm">标准</Button>
                    <Button @click="custom">自定义按钮文字</Button>
                    <Button @click="async">异步关闭</Button>
                </div>
                <div slot="desc">
                    <p>Popup the confirm Modal rapidly. You can customize the text on the button or close the Modal asynchronously.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.confirm }}</i-code>
            </Demo>
            <Demo title="Custom Content">
                <div slot="demo">
                    <p>
                        姓名：{{ value }}
                    </p>
                    <p>
                        <Button @click="render">自定义内容</Button>
                    </p>
                </div>
                <div slot="desc">
                    <p>You can use Vue's Render function to customize content by using <code>render</code> field.</p>
                    <p>No more type limitation after using render, and content will be invalid.</p>
                    <p><study-render></study-render></p>
                </div>
                <i-code lang="html" slot="code">{{ code.render }}</i-code>
            </Demo>
            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Modal props" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>value</td>
                            <td>Display Modal or not. Use v-model to enable two-way binding.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>title</td>
                            <td>The title of Modal. It is invalid if footer slot is set.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>closable</td>
                            <td>Display the close button at the right top corner or not. ESC clicking-close will also be disabled if closable is set to false.</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>mask-closable</td>
                            <td>Allow mask-closing operation (Click mask layer around the Modal to close it) or not.</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>loading</td>
                            <td>Show loading status or not when clicking confirm button. If it is set to true, Modal has to be close manually by setting <code>visible</code> to false.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>scrollable</td>
                            <td>Allow scrolling or not.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>ok-text</td>
                            <td>OK button's text.</td>
                            <td>String</td>
                            <td>确定</td>
                        </tr>
                        <tr>
                            <td>cancel-text</td>
                            <td>Cancel button's text.</td>
                            <td>String</td>
                            <td>取消</td>
                        </tr>
                        <tr>
                            <td>width</td>
                            <td>The width of Modal. Unit: px. The width is responsive: It'll change to <code>auto</code> when the size of the screen is smaller than 768px.</td>
                            <td>Number | String</td>
                            <td>520</td>
                        </tr>
                        <tr>
                            <td>styles</td>
                            <td>Set layer's style or adjust its position. The prop sets <code>.ivu-modal</code>'s style.</td>
                            <td>Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>class-name</td>
                            <td>Set Modal's wrapper - <code>.ivu-modal-wrap</code>'s class name. It can be used to assist to realise custom styles like vertical center.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>transition-names</td>
                            <td>Custom transition. The first transition is Modal itself, the second is the background.</td>
                            <td>Array</td>
                            <td>['ease', 'fade']</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Modal events" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Event Name</th>
                            <th>Description</th>
                            <th>Return Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>on-ok</td>
                            <td>Callback when clicking ok.</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>on-cancel</td>
                            <td>Callback when clicking cancel.</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Modal slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>header</td>
                            <td>Custom header.</td>
                        </tr>
                        <tr>
                            <td>footer</td>
                            <td>Custom footer.</td>
                        </tr>
                        <tr>
                            <td>close</td>
                            <td>Custom right-top closing area.</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>Custom main content.</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Modal instance" h3></Anchor>
                <p>Use insatnce by directly calling methods below:</p>
                <ul>
                    <li>
                        <code>this.$Modal.info(config)</code>
                    </li>
                    <li>
                        <code>this.$Modal.success(config)</code>
                    </li>
                    <li>
                        <code>this.$Modal.warning(config)</code>
                    </li>
                    <li>
                        <code>this.$Modal.error(config)</code>
                    </li>
                    <li>
                        <code>this.$Modal.confirm(config)</code>
                    </li>
                </ul>
                <p>Methods above create and maintain Vue Component implicitly. The only parameter is a config object. It's details are mentioned below:</p>
                <table>
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>title</td>
                            <td>Title</td>
                            <td>String | Element String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>content</td>
                            <td>Content</td>
                            <td>String | Element String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>render</td>
                            <td>Custom content. No more type limitation after using it. Content will be invalid too.<study-render></study-render></td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>width</td>
                            <td>Width. Unit: px.</td>
                            <td>Number | String</td>
                            <td>416</td>
                        </tr>
                        <tr>
                            <td>okText</td>
                            <td>OK button's text.</td>
                            <td>String</td>
                            <td>确定</td>
                        </tr>
                        <tr>
                            <td>cancelText</td>
                            <td>Cancel button's text. Only works on <code>Modal.confirm()</code>.</td>
                            <td>String</td>
                            <td>取消</td>
                        </tr>
                        <tr>
                            <td>loading</td>
                            <td>Show loading status or not after clicking confirm button. If true, Modal needs to be closed manually by calling <code>Modal.remove()</code>.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>scrollable</td>
                            <td>Allow scrolling or not.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>onOk</td>
                            <td>Callback when clicking confirm button (OK button).</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>onCancel</td>
                            <td>Callback when clicking cancel button. Only works on <code>Modal.confirm()</code>.</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <p>Global remove method is also provided:</p>
                <ul>
                    <li>
                        <code>this.$Modal.remove()</code>
                    </li>
                </ul>
            </div>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import Code from '../../code/modal';
    import Anchor from '../../components/anchor.vue';
    import studyRender from '../../components/render.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            Anchor,
            studyRender
        },
        data () {
            return {
                code: Code,
                modal1: false,
                modal2: false,
                modal_loading: false,
                modal3: false,
                modal4: false,
                modal5: false,
                modal6: false,
                loading: true,
                modal7: false,
                modal8: false,
                modal9: false,
                modal10: false,
                value: ''
            }
        },
        methods: {
            ok () {
                this.$Message.info('点击了确定');
            },
            cancel () {
                this.$Message.info('点击了取消');
            },
            del () {
                this.modal_loading = true;
                setTimeout(() => {
                    this.modal_loading = false;
                    this.modal2 = false;
                    this.$Message.success('删除成功');
                }, 2000);
            },
            asyncOK () {
                setTimeout(() => {
                    this.modal6 = false;
                }, 2000);
            },
            instance (type) {
                const title = '对话框的标题';
                const content = '<p>一些对话框内容</p><p>一些对话框内容</p>';
                switch (type) {
                    case 'info':
                        this.$Modal.info({
                            title: title,
                            content: content
                        });
                        break;
                    case 'success':
                        this.$Modal.success({
                            title: title,
                            content: content
                        });
                        break;
                    case 'warning':
                        this.$Modal.warning({
                            title: title,
                            content: content
                        });
                        break;
                    case 'error':
                        this.$Modal.error({
                            title: title,
                            content: content
                        });
                        break;
                }
            },
            confirm () {
                this.$Modal.confirm({
                    title: '确认对话框标题',
                    content: '<p>一些对话框内容</p><p>一些对话框内容</p>',
                    onOk: () => {
                        this.$Message.info('点击了确定');
                    },
                    onCancel: () => {
                        this.$Message.info('点击了取消');
                    }
                });
            },
            custom () {
                this.$Modal.confirm({
                    title: '确认对话框标题',
                    content: '<p>一些对话框内容</p><p>一些对话框内容</p>',
                    okText: 'OK',
                    cancelText: 'Cancel'
                });
            },
            async () {
                this.$Modal.confirm({
                    title: '确认对话框标题',
                    content: '<p>对话框将在 2秒 后关闭</p>',
                    loading: true,
                    onOk: () => {
                        setTimeout(() => {
                            this.$Modal.remove();
                            this.$Message.info('异步关闭了对话框');
                        }, 2000);
                    }
                });
            },
            render () {
                this.$Modal.confirm({
                    render: (h) => {
                        return h('Input', {
                            props: {
                                value: this.value,
                                autofocus: true,
                                placeholder: 'Please enter your name...'
                            },
                            on: {
                                input: (val) => {
                                    this.value = val;
                                }
                            }
                        })
                    }
                })
            }
        }
    }
</script>