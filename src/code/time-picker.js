let code = {};

code.base = `
<template>
    <Row>
        <Col span="12">
            <Time-picker type="time" placeholder="选择时间" style="width: 168px"></Time-picker>
        </Col>
        <Col span="12">
            <Time-picker type="timerange" placement="bottom-end" placeholder="选择时间" style="width: 168px"></Time-picker>
        </Col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
`;

code.format = `
<template>
    <Row>
        <Col span="12">
            <Time-picker :value="value1" format="HH点mm分ss秒" placeholder="选择时间" style="width: 168px"></Time-picker>
        </Col>
        <Col span="12">
            <Time-picker :value="value2" format="HH’mm’ss" type="timerange" placement="bottom-end" placeholder="选择时间" style="width: 168px"></Time-picker>
        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                value1: '09:41:00',
                value2: ['09:41:00', '12:00:00']
            }
        }
    }
</script>
`;

code.hours = `
<template>
    <Row>
        <Col span="12">
            <Time-picker format="HH:mm" placeholder="选择时间" style="width: 112px"></Time-picker>
        </Col>
        <Col span="12">
            <Time-picker format="HH:mm" type="timerange" placement="bottom-end" placeholder="选择时间" style="width: 168px"></Time-picker>
        </Col>
    </Row>
</template>
<script>
    export default {

    }
</script>
`;

code.disabled = `
<template>
    <Row>
        <Col span="12">
            <Time-picker
                :disabled-hours="[1,5,10]"
                :disabled-minutes="[0,10,20]"
                placeholder="选择时间"
                style="width: 168px"></Time-picker>
        </Col>
        <Col span="12">
            <Time-picker
                hide-disabled-options
                :disabled-hours="[1,5,10]"
                :disabled-minutes="[0,10,20]"
                placeholder="选择时间"
                style="width: 168px"></Time-picker>
        </Col>
    </Row>
</template>
<script>
    export default {

    }
</script>
`;

code.confirm = `
<template>
    <Row>
        <Col span="12">
            <Time-picker confirm placeholder="选择时间" style="width: 168px"></Time-picker>
        </Col>
        <Col span="12">
            <Time-picker confirm type="timerange" placement="bottom-end" placeholder="选择时间" style="width: 168px"></Time-picker>
        </Col>
    </Row>
</template>
<script>
    export default {

    }
</script>
`;

code.slot = `
<template>
    <Time-picker
        :open="open"
        :value="value3"
        confirm
        @on-change="handleChange"
        @on-clear="handleClear"
        @on-ok="handleOk">
        <a href="javascript:void(0)" @click="handleClick">
            <Icon type="ios-clock-outline"></Icon>
            <template v-if="value3 === ''">选择时间</template>
            <template v-else>{{ value3 }}</template>
        </a>
    </Time-picker>
</template>
<script>
    export default {
        data () {
            return {
                open: false,
                value3: ''
            }
        },
        methods: {
            handleClick () {
                this.open = !this.open;
            },
            handleChange (time) {
                this.value3 = time;
            },
            handleClear () {
                this.open = false;
            },
            handleOk () {
                this.open = false;
            }
        }
    }
</script>
`;

code.size = `
<template>
    <row :gutter="16">
        <Col span="8">
            <Time-picker size="small" placeholder="选择时间"></Time-picker>
        </Col>
        <Col span="8">
            <Time-picker placeholder="选择时间"></Time-picker>
        </Col>
        <Col span="8">
            <Time-picker size="large" placeholder="选择时间"></Time-picker>
        </Col>
    </Row>
</template>
<script>
    export default {

    }
</script>
`;

code.steps = `
<template>
    <Time-picker :steps="[1, 15, 15]" placeholder="选择时间" style="width: 112px"></Time-picker>
</template>
<script>
    export default {

    }
</script>
`;

export default code;