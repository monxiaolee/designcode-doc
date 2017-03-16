let code = {};

code.base = `
<template>
    <Input-number :max="10" :min="1" :value="1"></Input-number>
</template>
<script>
    export default {
        
    }
</script>
`;

code.step = `
<template>
    <Input-number :max="10" :min="1" :step="1.2" :value="1"></Input-number>
</template>
<script>
    export default {
        
    }
</script>
`;

code.size = `
<template>
    <Input-number :value="2" size="small"></Input-number>
    <Input-number :value="2"></Input-number>
    <Input-number :value="2" size="large"></Input-number>
</template>
<script>
    export default {
        
    }
</script>
`;

code.disabled = `
<template>
    <Input-number :value="1" :disabled="disabled"></Input-number>
    <i-button type="primary" @click="disabled = !disabled">Toggle Disabled</i-button>
</template>
<script>
    export default {
        data () {
            return {
                disabled: true
            }
        }
    }
</script>
`;

export default code;