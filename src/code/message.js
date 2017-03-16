let code = {};

code.info = `
<template>
    <i-button type="primary" @click="info">显示普通提醒</i-button>
</template>
<script>
    export default {
        methods: {
            info () {
                this.$Message.info('这是一条普通的提醒');
            }
        }
    }
</script>
`;

code.type = `
<template>
    <i-button @click="success">显示成功提示</i-button>
    <i-button @click="warning">显示警告提示</i-button>
    <i-button @click="error">显示错误提示</i-button>
</template>
<script>
    export default {
        methods: {
            success () {
                this.$Message.success('这是一条成功的提示');
            },
            warning () {
                this.$Message.warning('这是一条警告的提示');
            },
            error () {
                this.$Message.error('对方不想说话，并且向你抛出了一个异常');
            }
        }
    }
</script>
`;

code.loading = `
<template>
    <i-button @click="loading">显示加载中...</i-button>
</template>
<script>
    export default {
        methods: {
            loading () {
                const msg = this.$Message.loading('正在加载中...', 0);
                setTimeout(msg, 3000);
            },
        }
    }
</script>
`;

code.time = `
<template>
    <i-button @click="time">显示一个10秒的提示</i-button>
</template>
<script>
    export default {
        methods: {
            time () {
                this.$Message.info('我将在10秒后消失', 10);
            }
        }
    }
</script>
`;

code.config = `
this.$Message.config({
    top: 50,
    duration: 3
});
`;

export default code;