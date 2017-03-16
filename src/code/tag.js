let code = {};

code.base = `
<template>
    <Tag>标签一</Tag>
    <Tag>标签二</Tag>
    <Tag v-if="show" closable @on-close="handleClose">标签三</Tag>
</template>
<script>
    export default {
        data () {
            return {
                show: true
            }
        },
        methods: {
            handleClose () {
                this.show = false;
            }
        }
    }
</script>
`;

code.type = `
<template>
    <Tag type="border">标签三</Tag>
    <Tag type="border" closable>标签四</Tag>
    <Tag type="dot">标签一</Tag>
    <Tag type="dot" closable>标签二</Tag>
</template>
<script>
    export default {
        
    }
</script>
`;

code.color = `
<template>
    <Tag closable color="blue">标签一</Tag>
    <Tag closable color="green">标签二</Tag>
    <Tag closable color="red">标签三</Tag>
    <Tag closable color="yellow">标签四</Tag>
    <br><br>
    <Tag type="border" closable color="blue">标签一</Tag>
    <Tag type="border" closable color="green">标签二</Tag>
    <Tag type="border" closable color="red">标签三</Tag>
    <Tag type="border" closable color="yellow">标签四</Tag>
    <br><br>
    <Tag type="dot" closable color="blue">标签一</Tag>
    <Tag type="dot" closable color="green">标签二</Tag>
    <Tag type="dot" closable color="red">标签三</Tag>
    <Tag type="dot" closable color="yellow">标签四</Tag>
</template>
<script>
    export default {
        
    }
</script>
`;

code.add = `
<template>
    <Tag v-for="item in count" closable>标签{{ item + 1 }}</Tag>
    <i-button icon="ios-plus-empty" type="dashed" size="small" @click="count += 1">添加标签</i-button>
</template>
<script>
    export default {
        data () {
            return {
                count: 3
            }
        }
    }
</script>
`;

export default code;