let code = {};

code.base = `
<template>
    <row>
        <i-col span="12">
            <Date-picker type="date" placeholder="选择日期" style="width: 200px"></Date-picker>
        </i-col>
        <i-col span="12">
            <Date-picker type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></Date-picker>
        </i-col>
    </row>
</template>
<script>
    export default {
        
    }
</script>
`;

code.shortcuts = `
<template>
    <row>
        <i-col span="12">
            <Date-picker type="date" :options="options1" placeholder="选择日期" style="width: 200px"></Date-picker>
        </i-col>
        <i-col span="12">
            <Date-picker type="daterange" :options="options2" placement="bottom-end" placeholder="选择日期" style="width: 200px"></Date-picker>
        </i-col>
    </row>
</template>
<script>
    export default {
        data () {
            return {
                options1: {
                    shortcuts: [
                        {
                            text: '今天',
                            value () {
                                return new Date();
                            },
                            onClick: (picker) => {
                                this.$Message.info('点击了今天');
                            }
                        },
                        {
                            text: '昨天',
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24);
                                return date;
                            },
                            onClick: (picker) => {
                                this.$Message.info('点击了昨天');
                            }
                        },
                        {
                            text: '一周前',
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                                return date;
                            },
                            onClick: (picker) => {
                                this.$Message.info('点击了一周前');
                            }
                        }
                    ]
                },
                options2: {
                    shortcuts: [
                        {
                            text: '最近一周',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                return [start, end];
                            }
                        },
                        {
                            text: '最近一个月',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                return [start, end];
                            }
                        },
                        {
                            text: '最近三个月',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                return [start, end];
                            }
                        }
                    ]
                }
            }
        }
    }
</script>
`;

code.format = `
<template>
    <row>
        <i-col span="12">
            <Date-picker :value="value1" format="yyyy年MM月dd日" type="date" placeholder="选择日期" style="width: 200px"></Date-picker>
        </i-col>
        <i-col span="12">
            <Date-picker :value="value2" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></Date-picker>
        </i-col>
    </row>
</template>
<script>
    export default {
        data () {
            return {
                value1: '2016-01-01',
                value2: ['2016-01-01', '2016-02-15']
            }
        }
    }
</script>
`;

code.datetime = `
<template>
    <Date-picker type="datetime" placeholder="选择日期和时间" style="width: 200px"></Date-picker>
    <br>
    <Date-picker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间（不含秒）" style="width: 200px"></Date-picker>
    <br>
    <Date-picker type="datetimerange" placeholder="选择日期和时间" style="width: 300px"></Date-picker>
    <br>
    <Date-picker type="datetimerange" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间（不含秒）" style="width: 300px"></Date-picker>
</template>
<script>
    export default {
        
    }
</script>
`;

code.type = `
<template>
    <row>
        <i-col span="12">
            <Date-picker type="year" placeholder="选择年" style="width: 200px"></Date-picker>
        </i-col>
        <i-col span="12">
            <Date-picker type="month" placeholder="选择月" style="width: 200px"></Date-picker>
        </i-col>
    </row>
</template>
<script>
    export default {
        
    }
</script>
`;

code.disabled = `
<template>
    <row>
        <i-col span="12">
            <Date-picker type="date" :options="options3" placeholder="选择日期" style="width: 200px"></Date-picker>
        </i-col>
        <i-col span="12">
            <Date-picker type="date" :options="options4" placeholder="选择日期" style="width: 200px"></Date-picker>
        </i-col>
    </row>
</template>
<script>
    export default {
        data () {
            return {
                options3: {
                    disabledDate (date) {
                        return date && date.valueOf() < Date.now() - 86400000;
                    }
                },
                options4: {
                    disabledDate (date) {
                        const disabledDay = date.getDate();
                        return disabledDay === 15;
                    }
                }
            }
        }
    }
</script>
`;

code.confirm = `
<template>
    <row>
        <i-col span="12">
            <Date-picker type="date" confirm placeholder="选择日期" style="width: 200px"></Date-picker>
        </i-col>
        <i-col span="12">
            <Date-picker type="daterange" confirm placement="bottom-end" placeholder="选择日期" style="width: 200px"></Date-picker>
        </i-col>
    </row>
</template>
<script>
    export default {

    }
</script>
`;

code.slot = `
<template>
    <Date-picker
        :open="open"
        :value="value3"
        confirm
        type="date"
        @on-change="handleChange"
        @on-clear="handleClear"
        @on-ok="handleOk">
        <a href="javascript:void(0)" @click="handleClick">
            <Icon type="ios-calendar-outline"></Icon>
            <template v-if="value3 === ''">选择日期</template>
            <template v-else>{{ value3 }}</template>
        </a>
    </Date-picker>
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
            handleChange (date) {
                this.value3 = date;
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
    <row>
        <i-col span="8">
            <Date-picker size="small" type="date" placeholder="选择日期"></Date-picker>
        </i-col>
        <i-col span="8">
            <Date-picker type="date" placeholder="选择日期"></Date-picker>
        </i-col>
        <i-col span="8">
            <Date-picker size="large" type="date" placeholder="选择日期"></Date-picker>
        </i-col>
    </row>
</template>
<script>
    export default {

    }
</script>
`;

export default code;