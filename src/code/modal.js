let code = {};

code.base = `
<template>
    <i-button type="primary" @click="modal1 = true">显示对话框</i-button>
    <Modal
        :visible.sync="modal1"
        title="普通的Modal对话框标题"
        @on-ok="ok"
        @on-cancel="cancel">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </Modal>
</template>
<script>
    export default {
        data () {
            return {
                modal1: false
            }
        },
        methods: {
            ok () {
                this.$Message.info('点击了确定');
            },
            cancel () {
                this.$Message.info('点击了取消');
            }
        }
    }
</script>
`;

code.custom = `
<template>
    <i-button @click="modal2 = true">自定义页头和页脚</i-button>
    <Modal :visible.sync="modal2" width="360">
        <p slot="header" style="color:#f60;text-align:center">
            <Icon type="information-circled"></Icon>
            <span>删除确认</span>
        </p>
        <div style="text-align:center">
            <p>此任务删除后，下游 10 个任务将无法执行。</p>
            <p>是否继续删除？</p>
        </div>
        <div slot="footer">
            <i-button type="error" size="large" long :loading="modal_loading" @click="del">删除</i-button>
        </div>
    </Modal>
    <i-button @click="modal3 = true">不带标题栏</i-button>
    <Modal :visible.sync="modal3">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </Modal>
    <i-button @click="modal4 = true">国际化</i-button>
    <Modal
        :visible.sync="modal4"
        title="Modal Title"
        ok-text="OK"
        cancel-text="Cancel">
        <p>Something...</p>
        <p>Something...</p>
        <p>Something...</p>
    </Modal>
    <i-button @click="modal5 = true">设置宽度</i-button>
    <Modal
        :visible.sync="modal5"
        title="自定义宽度"
        width="300">
        <p>自定义宽度，单位 px，默认 520px。</p>
        <p>对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动<code>auto</code>。</p>
    </Modal>
</template>
<script>
    export default {
        data () {
            return {
                modal2: false,
                modal_loading: false,
                modal3: false,
                modal4: false,
                modal5: false
            }
        },
        methods: {
            del () {
                this.modal_loading = true;
                setTimeout(() => {
                    this.modal_loading = false;
                    this.modal2 = false;
                    this.$Message.success('删除成功');
                }, 2000);
            }
        }
    }
</script>
`;

code.async = `
<template>
    <i-button type="primary" @click="modal6 = true">显示对话框</i-button>
    <Modal
        :visible.sync="modal6"
        title="对话框标题"
        :loading="loading"
        @on-ok="asyncOK">
        <p>点击确定后，对话框将在 2秒 后关闭。</p>
    </Modal>
</template>
<script>
    export default {
        data () {
            return {
                modal6: false,
                loading: true
            }
        },
        methods: {
            asyncOK () {
                setTimeout(() => {
                    this.modal6 = false;
                }, 2000);
            }
        }
    }
</script>
`;

code.close = `
<template>
    <i-button @click="modal7 = true">禁用右上角关闭（含Esc键）</i-button>
    <Modal
        title="对话框标题"
        :visible.sync="modal7"
        :closable="false">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </Modal>
    <i-button @click="modal8 = true">禁用遮罩层关闭</i-button>
    <Modal
        title="对话框标题"
        :visible.sync="modal8"
        :mask-closable="false">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </Modal>
</template>
<script>
    export default {
        data () {
            return {
                modal7: false,
                modal8: false,
            }
        }
    }
</script>
`;

code.position = `
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
    <i-button @click="modal9 = true">距离顶部 20px</i-button>
    <Modal
        title="对话框标题"
        :visible.sync="modal9"
        :style="{top: '20px'}">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </Modal>
    <i-button @click="modal10 = true">垂直居中</i-button>
    <Modal
        title="对话框标题"
        :visible.sync="modal10"
        class-name="vertical-center-modal">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </Modal>
</template>
<script>
    export default {
        data () {
            return {
                modal9: false,
                modal10: false,
            }
        }
    }
</script>
`;

code.baseInstance = `
<template>
    <i-button @click="instance('info')">消息</i-button>
    <i-button @click="instance('success')">成功</i-button>
    <i-button @click="instance('warning')">警告</i-button>
    <i-button @click="instance('error')">错误</i-button>
</template>
<script>
    export default {
        methods: {
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
            }
        }
    }
</script>
`;

code.confirm = `
<template>
    <i-button @click="confirm">标准</i-button>
    <i-button @click="custom">自定义按钮文字</i-button>
    <i-button @click="async">异步关闭</i-button>
</template>
<script>
    export default {
        methods: {
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
            }
        }
    }
</script>
`;

export default code;