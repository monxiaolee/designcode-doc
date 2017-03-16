let code = {};

code.single = `
<template>
    <Radio :checked.sync="single">Radio</Radio>
</template>
<script>
    export default {
        data () {
            return {
                single: false
            }
        }
    }
</script>
`;

code.group = `
<template>
    <Radio-group :model.sync="phone">
        <Radio value="apple">
            <Icon type="social-apple"></Icon>
            <span>Apple</span>
        </Radio>
        <Radio value="android">
            <Icon type="social-android"></Icon>
            <span>Android</span>
        </Radio>
        <Radio value="windows">
            <Icon type="social-windows"></Icon>
            <span>Windows</span>
        </Radio>
    </Radio-group>
    <Radio-group :model.sync="animal">
        <Radio value="金斑蝶"></Radio>
        <Radio value="爪哇犀牛"></Radio>
        <Radio value="印度黑羚"></Radio>
    </Radio-group>
</template>
<script>
    export default {
        data () {
            return {
                phone: 'apple',
                animal: '爪哇犀牛'
            }
        }
    }
</script>
`;

code.disabled = `
<template>
    <Radio :checked.sync="disabledSingle" disabled>Radio</Radio>
    <Radio-group :model.sync="disabledGroup">
        <Radio value="金斑蝶" disabled></Radio>
        <Radio value="爪哇犀牛"></Radio>
        <Radio value="印度黑羚"></Radio>
    </Radio-group>
</template>
<script>
    export default {
        data () {
            return {
                disabledSingle: true,
                disabledGroup: '爪哇犀牛'
            }
        }
    }
</script>
`;

code.vertical = `
<template>
    <Radio-group :model.sync="vertical" vertical>
        <Radio value="apple">
            <Icon type="social-apple"></Icon>
            <span>Apple</span>
        </Radio>
        <Radio value="android">
            <Icon type="social-android"></Icon>
            <span>Android</span>
        </Radio>
        <Radio value="windows">
            <Icon type="social-windows"></Icon>
            <span>Windows</span>
        </Radio>
    </Radio-group>
</template>
<script>
    export default {
        data () {
            return {
                vertical: 'apple'
            }
        }
    }
</script>
`;

code.button = `
<template>
    <Radio-group :model.sync="button1" type="button">
        <Radio value="北京"></Radio>
        <Radio value="上海"></Radio>
        <Radio value="深圳"></Radio>
        <Radio value="杭州"></Radio>
    </Radio-group>
    <Radio-group :model.sync="button2" type="button">
        <Radio value="北京"></Radio>
        <Radio value="上海" disabled></Radio>
        <Radio value="深圳"></Radio>
        <Radio value="杭州"></Radio>
    </Radio-group>
    <Radio-group :model.sync="button3" type="button">
        <Radio value="北京" disabled></Radio>
        <Radio value="上海" disabled></Radio>
        <Radio value="深圳" disabled></Radio>
        <Radio value="杭州" disabled></Radio>
    </Radio-group>
</template>
<script>
    export default {
        data () {
            return {
                button1: '北京',
                button2: '北京',
                button3: '北京'
            }
        }
    }
</script>
`;

code.size = `
<template>
    <Radio-group :model.sync="button4" type="button" size="large">
        <Radio value="北京"></Radio>
        <Radio value="上海"></Radio>
        <Radio value="深圳"></Radio>
        <Radio value="杭州"></Radio>
    </Radio-group>
    <Radio-group :model.sync="button5" type="button">
        <Radio value="北京"></Radio>
        <Radio value="上海"></Radio>
        <Radio value="深圳"></Radio>
        <Radio value="杭州"></Radio>
    </Radio-group>
    <Radio-group :model.sync="button6" type="button" size="small">
        <Radio value="北京"></Radio>
        <Radio value="上海"></Radio>
        <Radio value="深圳"></Radio>
        <Radio value="杭州"></Radio>
    </Radio-group>
</template>
<script>
    export default {
        data () {
            return {
                button4: '北京',
                button5: '北京',
                button6: '北京'
            }
        }
    }
</script>
`;

export default code;