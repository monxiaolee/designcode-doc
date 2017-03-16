let code = {};

code.open = `
<template>
    <i-button type="primary" @click="open(false)">打开提醒</i-button>
    <i-button @click="open(true)">打开提醒（仅标题）</i-button>
</template>
<script>
    export default {
        methods: {
            open (nodesc) {
                this.$Notice.open({
                    title: '这是通知标题',
                    desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
                });
            }
        }
    }
</script>
`;

code.type = `
<template>
    <p>带描述信息</p>
    <i-button @click="info(false)">消息</i-button>
    <i-button @click="success(false)">成功</i-button>
    <i-button @click="warning(false)">警告</i-button>
    <i-button @click="error(false)">错误</i-button>
    <p>仅标题</p>
    <i-button @click="info(true)">消息</i-button>
    <i-button @click="success(true)">成功</i-button>
    <i-button @click="warning(true)">警告</i-button>
    <i-button @click="error(true)">错误</i-button>
</template>
<script>
    export default {
        methods: {
            info (nodesc) {
                this.$Notice.info({
                    title: '这是通知标题',
                    desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
                });
            },
            success (nodesc) {
                this.$Notice.success({
                    title: '这是通知标题',
                    desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
                });
            },
            warning (nodesc) {
                this.$Notice.warning({
                    title: '这是通知标题',
                    desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
                });
            },
            error (nodesc) {
                this.$Notice.error({
                    title: '这是通知标题',
                    desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
                });
            }
        }
    }
</script>
`;

code.time = `
<template>
    <i-button type="primary" @click="time">打开提醒</i-button>
</template>
<script>
    export default {
        methods: {
            time () {
                this.$Notice.open({
                    title: '这是通知标题',
                    desc: '这条通知不会自动关闭，需要点击关闭按钮才可以关闭。',
                    duration: 0
                });
            }
        }
    }
</script>
`;

code.config = `
this.$Notice.config({
    top: 50,
    duration: 3
});
`;

export default code;