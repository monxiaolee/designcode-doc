let code = {};

code.base = `
<template>
    <Rate :value.sync="value"></Rate>
</template>
<script>
    export default {
        data () {
            return {
                value: 0
            }
        }
    }
</script>
`;

code.half = `
<template>
    <Rate allow-half :value.sync="valueHalf"></Rate>
</template>
<script>
    export default {
        data () {
            return {
                valueHalf: 2.5
            }
        }
    }
</script>
`;

code.text = `
<template>
    <Row>
        <i-col span="12">
            <Rate show-text :value.sync="valueText"></Rate>
        </i-col>
        <i-col span="12">
            <Rate show-text :value.sync="valueCustomText">
                <span style="color: #f5a623">{{ valueCustomText }}</span>
            </Rate>
        </i-col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                valueText: 3,
                valueCustomText: 3.8
            }
        }
    }
</script>
`;

code.disabled = `
<template>
    <Rate disabled :value.sync="valueDisabled"></Rate>
</template>
<script>
    export default {
        data () {
            return {
                valueDisabled: 2
            }
        }
    }
</script>
`;

export default code;