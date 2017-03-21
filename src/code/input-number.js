let code = {};

code.base = `
<template>
    <Input-number :max="10" :min="1" v-model="value1"></Input-number>
</template>
<script>
    export default {
        data () {
            return {
                value1: 1
            }
        }
    }
</script>
`;

code.step = `
<template>
    <Input-number :max="10" :min="1" :step="1.2" v-model="value2"></Input-number>
</template>
<script>
    export default {
        data () {
            return {
                value2: 1
            }
        }
    }
</script>
`;

code.size = `
<template>
    <Input-number v-model="value3" size="small"></Input-number>
    <Input-number v-model="value4"></Input-number>
    <Input-number v-model="value5" size="large"></Input-number>
</template>
<script>
    export default {
        data () {
            return {
                value3: 2,
                value4: 2,
                value5: 2
            }
        }
    }
</script>
`;

code.disabled = `
<template>
    <Input-number v-model="value6" :disabled="disabled"></Input-number>
    <Button type="primary" @click="disabled = !disabled">Toggle Disabled</Button>
</template>
<script>
    export default {
        data () {
            return {
                disabled: true,
                value6: 1
            }
        }
    }
</script>
`;

export default code;