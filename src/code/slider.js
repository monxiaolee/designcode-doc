let code = {};

code.base = `
<template>
    <Slider :value="value1"></Slider>
    <Slider :value="value2" range></Slider>
    <Slider :value="value3" range disabled></Slider>
</template>
<script>
    export default {
        data () {
            return {
                value1: 25,
                value2: [20, 50],
                value3: [20, 50]
            }
        }
    }
</script>
`;

code.step = `
<template>
    <Slider :value="value4" :step="10"></Slider>
    <Slider :value="value5" :step="10" range></Slider>
</template>
<script>
    export default {
        data () {
            return {
                value4: 30,
                value5: [20, 50]
            }
        }
    }
</script>
`;

code.stops = `
<template>
    <Slider :value="value6" :step="10" show-stops></Slider>
    <Slider :value="value7" :step="10" show-stops range></Slider>
</template>
<script>
    export default {
        data () {
            return {
                value6: 30,
                value7: [20, 50]
            }
        }
    }
</script>
`;

code.input = `
<template>
    <Slider :value="value8" show-input></Slider>
</template>
<script>
    export default {
        data () {
            return {
                value8: 25
            }
        }
    }
</script>
`;

code.format = `
<template>
    <Slider :value="value9" :tip-format="format"></Slider>
    <Slider :value="value10" :tip-format="hideFormat"></Slider>
</template>
<script>
    export default {
        data () {
            return {
                value9: 25,
                value10: 25
            }
        },
        methods: {
            format (val) {
                return '进度' + val + '%';
            },
            hideFormat () {
                return null;
            }
        }
    }
</script>
`;

export default code;