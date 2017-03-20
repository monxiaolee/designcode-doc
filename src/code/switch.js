let code = {};

code.base = `
<template>
    <i-switch v-model="switch1" @on-change="change"></i-switch>
</template>
<script>
    export default {
        data () {
            return {
                switch1: false
            }  
        },
        methods: {
            change (status) {
                this.$Message.info('开关状态：' + status);
            }
        }
    }
</script>
`;

code.size = `
<template>
    <i-switch size="large"></i-switch>
    <i-switch></i-switch>
    <i-switch size="small"></i-switch>
</template>
<script>
    export default {
        
    }
</script>
`;

code.custom = `
<template>
    <i-switch>
        <span slot="open">开</span>
        <span slot="close">关</span>
    </i-switch>
    <i-switch>
        <Icon type="android-done" slot="open"></Icon>
        <Icon type="android-close" slot="close"></Icon>
    </i-switch>
    <br><br>
    <i-switch size="large">
        <span slot="open">开启</span>
        <span slot="close">关闭</span>
    </i-switch>
    <i-switch size="large">
        <span slot="open">ON</span>
        <span slot="close">OFF</span>
    </i-switch>
</template>
<script>
    export default {
        
    }
</script>
`;

code.disabled = `
<template>
    <i-switch :disabled="disabled"></i-switch>
    <Button type="primary" @click="disabled = !disabled">Toggle Disabled</Button>
</template>
<script>
    export default {
        data () {
            return {
                disabled: true
            }
        },
    }
</script>
`;

export default code;