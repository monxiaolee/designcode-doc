let code = {};

code.base = `
<template>
    <Back-top></Back-top>
</template>
<script>
    export default {
        
    }
</script>
`;

code.custom = `
<style scoped>
    .top{
        padding: 10px;
        background: rgba(0, 153, 229, .7);
        color: #fff;
        text-align: center;
        border-radius: 2px;
    }
</style>
<template>
    <Back-top :height="100" :bottom="200">
        <div class="top">返回顶端</div>
    </Back-top>
</template>
<script>
    export default {
        
    }
</script>
`;

export default code;