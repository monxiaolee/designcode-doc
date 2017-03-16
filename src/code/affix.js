let code = {};

code.base = `
<template>
    <Affix>
        <span class="demo-affix">固定在最顶部</span>
    </Affix>
</template>
<script>
    export default {
        
    }
</script>
`;

code.top = `
<template>
    <Affix :offset-top="50">
        <span class="demo-affix">固定在距离顶部 50px 的位置</span>
    </Affix>
</template>
<script>
    export default {
        
    }
</script>
`;

code.bottom = `
<template>
    <Affix :offset-bottom="20">
        <span class="demo-affix">固定在距离底部 20px 的位置</span>
    </Affix>
</template>
<script>
    export default {
        
    }
</script>
`;

code.change = `
<template>
    <Affix :offset-top="100" @on-change="change">
        <span class="demo-affix">固定在距离顶部 100px 的位置</span>
    </Affix>
</template>
<script>
    export default {
        methods: {
            change (status) {
                this.$Message.info(\`当前状态：\${status}\`);
            }
        }
    }
</script>
`;

export default code;