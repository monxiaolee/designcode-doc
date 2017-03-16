let code = {};

code.single = `
<template>
    <Checkbox :checked.sync="single">Checkbox</Checkbox>
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
    <Checkbox-group :model.sync="social">
        <Checkbox value="twitter">
            <Icon type="social-twitter"></Icon>
            <span>Twitter</span>
        </Checkbox>
        <Checkbox value="facebook">
            <Icon type="social-facebook"></Icon>
            <span>Facebook</span>
        </Checkbox>
        <Checkbox value="github">
            <Icon type="social-github"></Icon>
            <span>Github</span>
        </Checkbox>
        <Checkbox value="snapchat">
            <Icon type="social-snapchat"></Icon>
            <span>Snapchat</span>
        </Checkbox>
    </Checkbox-group>
    <Checkbox-group :model.sync="fruit">
        <Checkbox value="香蕉"></Checkbox>
        <Checkbox value="苹果"></Checkbox>
        <Checkbox value="西瓜"></Checkbox>
    </Checkbox-group>
</template>
<script>
    export default {
        data () {
            return {
                social: ['facebook', 'github'],
                fruit: ['苹果']
            }
        }
    }
</script>
`;

code.disabled = `
<template>
    <Checkbox :checked.sync="disabledSingle" disabled>Checkbox</Checkbox>
    <Checkbox-group :model.sync="disabledGroup">
        <Checkbox value="香蕉" disabled></Checkbox>
        <Checkbox value="苹果" disabled></Checkbox>
        <Checkbox value="西瓜"></Checkbox>
    </Checkbox-group>
</template>
<script>
    export default {
        data () {
            return {
                disabledSingle: true,
                disabledGroup: ['苹果']
            }
        }
    }
</script>
`;

code.communication = `
<template>
    <Checkbox :checked.sync="checked" :disabled="disabled">
        <span v-if="checked">选中</span>
        <span v-else>取消</span>
         - 
        <span v-if="!disabled">可用</span>
        <span v-else>不可用</span>
    </Checkbox>
    <br>
    <i-button type="primary" @click="checked = !checked">
        <span v-if="!checked">选中</span>
        <span v-else>取消</span>
    </i-button>
    <i-button type="primary" @click="disabled = !disabled">
        <span v-if="disabled">可用</span>
        <span v-else>不可用</span>
    </i-button>
</template>
<script>
    export default {
        data () {
            return {
                checked: true,
                disabled: false
            }
        }
    }
</script>
`;

code.indeterminate = `
<template>
    <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
        <Checkbox
            :indeterminate="indeterminate"
            :checked="checkAll"
            @click.prevent="handleCheckAll">全选</Checkbox>
    </div>
    <Checkbox-group :model.sync="checkAllGroup" @on-change="checkAllGroupChange">
        <Checkbox value="香蕉"></Checkbox>
        <Checkbox value="苹果"></Checkbox>
        <Checkbox value="西瓜"></Checkbox>
    </Checkbox-group>
</template>
<script>
    export default {
        data () {
            return {
                indeterminate: true,
                checkAll: false,
                checkAllGroup: ['香蕉', '西瓜']
            }
        },
        methods: {
            handleCheckAll () {
                if (this.indeterminate) {
                    this.checkAll = false;
                } else {
                    this.checkAll = !this.checkAll;
                }
                this.indeterminate = false;

                if (this.checkAll) {
                    this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
                } else {
                    this.checkAllGroup = [];
                }
            },
            checkAllGroupChange (data) {
                if (data.length === 3) {
                    this.indeterminate = false;
                    this.checkAll = true;
                } else if (data.length > 0) {
                    this.indeterminate = true;
                    this.checkAll = false;
                } else {
                    this.indeterminate = false;
                    this.checkAll = false;
                }
            }
        }
    }
</script>
`;

export default code;