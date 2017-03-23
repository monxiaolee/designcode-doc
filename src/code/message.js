let code = {};

code.info = `
<template>
    <Button type="primary" @click="info">显示普通提醒</Button>
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
    <Button @click="success">显示成功提示</Button>
    <Button @click="warning">显示警告提示</Button>
    <Button @click="error">显示错误提示</Button>
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
    <Button @click="loading">显示加载中...</Button>
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
    <Button @click="time">显示一个10秒的提示</Button>
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