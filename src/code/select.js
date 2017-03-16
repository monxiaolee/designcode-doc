let code = {};

code.base = `
<template>
    <i-select :model.sync="model1" style="width:200px">
        <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
    </i-select>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model1: ''
            }
        }
    }
</script>
`;

code.size = `
<template>
    <i-select :model.sync="model2" size="small" style="width:100px">
        <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
    </i-select>
    <i-select :model.sync="model3" style="width:100px">
        <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
    </i-select>
    <i-select :model.sync="model4" size="large" style="width:100px">
        <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
    </i-select>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model2: '',
                model3: '',
                model4: ''
            }
        }
    }
</script>
`;

code.disabled = `
<template>
    <i-select :model.sync="model5" disabled style="width:200px">
        <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
    </i-select>
    <i-select :model.sync="model6" style="width:200px">
        <i-option value="beijing">北京市</i-option>
        <i-option value="shanghai" disabled>上海市</i-option>
        <i-option value="shenzhen">深圳市</i-option>
    </i-select>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model5: '',
                model6: ''
            }
        }
    }
</script>
`;

code.clearable = `
<template>
    <i-select :model.sync="model8" clearable style="width:200px">
        <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
    </i-select>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model8: ''
            }
        }
    }
</script>
`;

code.group = `
<template>
    <i-select :model.sync="model7" style="width:200px">
        <Option-group label="热门城市">
            <i-option v-for="item in cityList | limitBy 3" :value="item.value">{{ item.label }}</i-option>
        </Option-group>
        <Option-group label="其它城市">
            <i-option v-for="item in cityList | limitBy 3 3" :value="item.value">{{ item.label }}</i-option>
        </Option-group>
    </i-select>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model7: ''
            }
        }
    }
</script>
`;

code.label = `
<template>
    <i-select :model.sync="model9" style="width:200px">
        <i-option value="beijing" label="北京市">
            <span>北京</span>
            <span style="float:right;color:#ccc">Beiing</span>
        </i-option>
        <i-option value="shanghai" label="上海市">
            <span>上海</span>
            <span style="float:right;color:#ccc">ShangHai</span>
        </i-option>
        <i-option value="shenzhen" label="深圳市">
            <span>深圳</span>
            <span style="float:right;color:#ccc">ShenZhen</span>
        </i-option>
    </i-select>
</template>
<script>
    export default {
        data () {
            return {
                model9: ''
            }
        }
    }
</script>
`;

code.multiple = `
<template>
    <i-select :model.sync="model10" multiple style="width:260px">
        <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
    </i-select>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model10: []
            }
        }
    }
</script>
`;

code.filterable = `
<template>
    <Row>
        <i-col span="12" style="padding-right:10px">
            <i-select :model.sync="model11" filterable>
                <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
            </i-select>
        </i-col>
        <i-col span="12">
            <i-select :model.sync="model12" filterable multiple>
                <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
            </i-select>
        </i-col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model11: '',
                model12: []
            }
        }
    }
</script>
`;

export default code;