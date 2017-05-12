let code = {};

code.base = `
<template>
    <Table :columns="columns1" :data="data1"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ]
            }
        }
    }
</script>
`;

code.stripe = `
<template>
    <Table stripe :columns="columns1" :data="data1"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ]
            }
        }
    }
</script>
`;

code.border = `
<template>
    <Table border :columns="columns1" :data="data1"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ]
            }
        }
    }
</script>
`;

code.class = `
<style>
    .ivu-table .demo-table-info-row td{
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-error-row td{
        background-color: #ff6600;
        color: #fff;
    }
    .ivu-table td.demo-table-info-column{
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-name {
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-age {
        background-color: #ff6600;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-address {
        background-color: #187;
        color: #fff;
    }
</style>
<template>
    <p>自定义行样式：</p>
    <Table :row-class-name="rowClassName" :columns="columns1" :data="data1"></Table>
    <p>自定义列样式：</p>
    <Table :columns="columns9" :data="data1"></Table>
    <p>自定义任意单元格样式：</p>
    <Table :columns="columns1" :data="data8"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                columns9: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        className: 'demo-table-info-column'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ],
                data8: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗',
                        cellClassName: {
                            age: 'demo-table-info-cell-age',
                            address: 'demo-table-info-cell-address'
                        }
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道',
                        cellClassName: {
                            name: 'demo-table-info-cell-name'
                        }
                    }
                ]
            }
        },
        methods: {
            rowClassName (row, index) {
                if (index === 1) {
                    return 'demo-table-info-row';
                } else if (index === 3) {
                    return 'demo-table-error-row';
                }
                return '';
            }
        }
    }
</script>
`;

code.height = `
<template>
    <Table height="200" :columns="columns1" :data="data2"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                data2: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    },
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ]
            }
        }
    }
</script>
`;

code.fixed = `
<template>
    <Table width="550" border :columns="columns2" :data="data3"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns2: [
                    {
                        title: '姓名',
                        key: 'name',
                        width: 100,
                        fixed: 'left'
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        width: 100
                    },
                    {
                        title: '省份',
                        key: 'province',
                        width: 100
                    },
                    {
                        title: '市区',
                        key: 'city',
                        width: 100
                    },
                    {
                        title: '地址',
                        key: 'address',
                        width: 200
                    },
                    {
                        title: '邮编',
                        key: 'zip',
                        width: 100
                    },
                    {
                        title: '操作',
                        key: 'action',
                        fixed: 'right',
                        width: 120,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, '编辑')
                            ]);
                        }
                    }
                ],
                data3: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居',
                        province: '北京市',
                        city: '朝阳区',
                        zip: 100000
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗',
                        province: '北京市',
                        city: '海淀区',
                        zip: 100000
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道',
                        province: '上海市',
                        city: '浦东新区',
                        zip: 100000
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道',
                        province: '广东',
                        city: '南山区',
                        zip: 100000
                    }
                ]
            }
        }
    }
</script>
`;

code.fixedAll = `
<template>
    <Table width="550" height="200" border :columns="columns2" :data="data4"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns2: [
                    {
                        title: '姓名',
                        key: 'name',
                        width: 100,
                        fixed: 'left'
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        width: 100
                    },
                    {
                        title: '省份',
                        key: 'province',
                        width: 100
                    },
                    {
                        title: '市区',
                        key: 'city',
                        width: 100
                    },
                    {
                        title: '地址',
                        key: 'address',
                        width: 200
                    },
                    {
                        title: '邮编',
                        key: 'zip',
                        width: 100
                    },
                    {
                        title: '操作',
                        key: 'action',
                        fixed: 'right',
                        width: 120,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, '编辑')
                            ]);
                        }
                    }
                ],
                data4: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居',
                        province: '北京市',
                        city: '朝阳区',
                        zip: 100000
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗',
                        province: '北京市',
                        city: '海淀区',
                        zip: 100000
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道',
                        province: '上海市',
                        city: '浦东新区',
                        zip: 100000
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道',
                        province: '广东',
                        city: '南山区',
                        zip: 100000
                    },
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居',
                        province: '北京市',
                        city: '朝阳区',
                        zip: 100000
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗',
                        province: '北京市',
                        city: '海淀区',
                        zip: 100000
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道',
                        province: '上海市',
                        city: '浦东新区',
                        zip: 100000
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道',
                        province: '广东',
                        city: '南山区',
                        zip: 100000
                    }
                ]
            }
        }
    }
</script>
`;

code.highlight = `
<template>
    <Table highlight-row :columns="columns3" :data="data1"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns3: [
                    {
                        type: 'index',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ]
            }
        }
    }
</script>
`;

code.selection = `
<template>
    <Table border :columns="columns4" :data="data1"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ]
            }
        }
    }
</script>
`;

code.sort = `
<template>
    <Table border :columns="columns5" :data="data5"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns5: [
                    {
                        title: '日期',
                        key: 'date',
                        sortable: true
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        sortable: true
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                data5: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居',
                        date: '2016-10-03'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗',
                        date: '2016-10-01'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道',
                        date: '2016-10-02'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道',
                        date: '2016-10-04'
                    }
                ]
            }
        }
    }
</script>
`;

code.filter = `
<template>
    <Table border :columns="columns6" :data="data5"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns6: [
                    {
                        title: '日期',
                        key: 'date'
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        filters: [
                            {
                                label: '大于25岁',
                                value: 1
                            },
                            {
                                label: '小于25岁',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.age > 25;
                            } else if (value === 2) {
                                return row.age < 25;
                            }
                        }
                    },
                    {
                        title: '地址',
                        key: 'address',
                        filters: [
                            {
                                label: '北京',
                                value: '北京'
                            },
                            {
                                label: '上海',
                                value: '上海'
                            },
                            {
                                label: '深圳',
                                value: '深圳'
                            }
                        ],
                        filterMethod (value, row) {
                            return row.address.indexOf(value) > -1;
                        }
                    }
                ],
                data5: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居',
                        date: '2016-10-03'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗',
                        date: '2016-10-01'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道',
                        date: '2016-10-02'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道',
                        date: '2016-10-04'
                    }
                ]
            }
        }
    }
</script>
`;

code.render = `
<template>
    <Table border :columns="columns7" :data="data6"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns7: [
                    {
                        title: '姓名',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                data6: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ]
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: '用户信息',
                    content: \`姓名：$\{this.data6[index].name\}<br>年龄：$\{this.data6[index].age\}<br>地址：$\{this.data6[index].address\}\`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
        }
    }
</script>
`;

code.size = `
<template>
    <Table size="large" :columns="columns1" :data="data1"></Table>
    <Table size="small" :columns="columns1" :data="data1"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ]
            }
        }
    }
</script>
`;

code.table1 = `
<template>
    <Table :data="tableData1" :columns="tableColumns1" stripe></Table>
    <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
            <Page :total="100" :current="1" @on-change="changePage"></Page>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                tableData1: this.mockTableData1(),
                tableColumns1: [
                    {
                        title: '名称',
                        key: 'name'
                    },
                    {
                        title: '状态',
                        key: 'status',
                        render: (h, params) => {
                            const row = params.row;
                            const color = row.status === 1 ? 'blue' : row.status === 2 ? 'green' : 'red';
                            const text = row.status === 1 ? '构建中' : row.status === 2 ? '构建完成' : '构建失败';

                            return h('Tag', {
                                props: {
                                    type: 'dot',
                                    color: color
                                }
                            }, text);
                        }
                    },
                    {
                        title: '画像内容',
                        key: 'portrayal',
                        render: (h, params) => {
                            return h('Poptip', {
                                props: {
                                    trigger: 'hover',
                                    title: params.row.portrayal.length + '个画像',
                                    placement: 'bottom'
                                }
                            }, [
                                h('Tag', params.row.portrayal.length),
                                h('div', {
                                    slot: 'content'
                                }, [
                                    h('ul', this.tableData1[params.index].portrayal.map(item => {
                                        return h('li', {
                                            style: {
                                                textAlign: 'center',
                                                padding: '4px'
                                            }
                                        }, item)
                                    }))
                                ])
                            ]);
                        }
                    },
                    {
                        title: '选定人群数',
                        key: 'people',
                        render: (h, params) => {
                            return h('Poptip', {
                                props: {
                                    trigger: 'hover',
                                    title: params.row.people.length + '个客群',
                                    placement: 'bottom'
                                }
                            }, [
                                h('Tag', params.row.people.length),
                                h('div', {
                                    slot: 'content'
                                }, [
                                    h('ul', this.tableData1[params.index].people.map(item => {
                                        return h('li', {
                                            style: {
                                                textAlign: 'center',
                                                padding: '4px'
                                            }
                                        }, item.n + '：' + item.c + '人')
                                    }))
                                ])
                            ]);
                        }
                    },
                    {
                        title: '取样时段',
                        key: 'time',
                        render: (h, params) => {
                            return h('div', '近' + params.row.time + '天');
                        }
                    },
                    {
                        title: '更新时间',
                        key: 'update',
                        render: (h, params) => {
                            return h('div', this.formatDate(this.tableData1[params.index].update));
                        }
                    }
                ]
            }
        },
        methods: {
            mockTableData1 () {
                let data = [];
                for (let i = 0; i < 10; i++) {
                    data.push({
                        name: '商圈' + Math.floor(Math.random () * 100 + 1),
                        status: Math.floor(Math.random () * 3 + 1),
                        portrayal: ['城市渗透', '人群迁移', '消费指数', '生活指数', '娱乐指数'],
                        people: [
                            {
                                n: '客群' + Math.floor(Math.random () * 100 + 1),
                                c: Math.floor(Math.random () * 1000000 + 100000)
                            },
                            {
                                n: '客群' + Math.floor(Math.random () * 100 + 1),
                                c: Math.floor(Math.random () * 1000000 + 100000)
                            },
                            {
                                n: '客群' + Math.floor(Math.random () * 100 + 1),
                                c: Math.floor(Math.random () * 1000000 + 100000)
                            }
                        ],
                        time: Math.floor(Math.random () * 7 + 1),
                        update: new Date()
                    })
                }
                return data;
            },
            formatDate (date) {
                const y = date.getFullYear();
                let m = date.getMonth() + 1;
                m = m < 10 ? '0' + m : m;
                let d = date.getDate();
                d = d < 10 ? ('0' + d) : d;
                return y + '-' + m + '-' + d;
            },
            changePage () {
                // 这里直接更改了模拟的数据，真实使用场景应该从服务端获取数据
                this.tableData1 = this.mockTableData1();
            }
        }
    }
</script>
`;

code.table2 = `
<template>
    <Checkbox-group v-model="tableColumnsChecked" @on-change="changeTableColumns">
        <Checkbox label="show">展示</Checkbox>
        <Checkbox label="weak">唤醒</Checkbox>
        <Checkbox label="signin">登录</Checkbox>
        <Checkbox label="click">点击</Checkbox>
        <Checkbox label="active">激活</Checkbox>
        <Checkbox label="day7">7日留存</Checkbox>
        <Checkbox label="day30">30日留存</Checkbox>
        <Checkbox label="tomorrow">次日留存</Checkbox>
        <Checkbox label="day">日活跃</Checkbox>
        <Checkbox label="week">周活跃</Checkbox>
        <Checkbox label="month">月活跃</Checkbox>
    </Checkbox-group>
    <Table :data="tableData2" :columns="tableColumns2" border></Table>
</template>
<script>
    export default {
        data () {
            return {
                tableData2: this.mockTableData2(),
                tableColumns2: [],
                tableColumnsChecked: ['show', 'weak', 'signin', 'click', 'active', 'day7', 'day30', 'tomorrow', 'day', 'week', 'month']
            }
        },
        methods: {
            mockTableData2 () {
                let data = [];
                function getNum() {
                    return Math.floor(Math.random () * 10000 + 1);
                }
                for (let i = 0; i < 10; i++) {
                    data.push({
                        name: '推广名称' + (i+1),
                        fav: 0,
                        show: getNum(),
                        weak: getNum(),
                        signin: getNum(),
                        click: getNum(),
                        active: getNum(),
                        day7: getNum(),
                        day30: getNum(),
                        tomorrow: getNum(),
                        day: getNum(),
                        week: getNum(),
                        month: getNum()
                    })
                }
                return data;
            },
            getTable2Columns () {
                const table2ColumnList = {
                    name: {
                        title: '名称',
                        key: 'name',
                        fixed: 'left',
                        width: 200,
                        render: (h, params) => {
                            const fav = this.tableData2[params.index].fav;
                            const style = fav === 0 ? {
                                cursor: 'pointer'
                            } : {
                                cursor: 'pointer',
                                color: '#f50'
                            };

                            return h('div', [
                                h('Icon', {
                                    style: style,
                                    props: {
                                        type: fav === 0 ? 'ios-star-outline' : 'ios-star'
                                    },
                                    nativeOn: {
                                        click: () => {
                                            this.toggleFav(params.index);
                                        }
                                    }
                                })
                            ]);
                        }
                    },
                    show: {
                        title: '展示',
                        key: 'show',
                        width: 150,
                        sortable: true
                    },
                    weak: {
                        title: '唤醒',
                        key: 'weak',
                        width: 150,
                        sortable: true
                    },
                    signin: {
                        title: '登录',
                        key: 'signin',
                        width: 150,
                        sortable: true
                    },
                    click: {
                        title: '点击',
                        key: 'click',
                        width: 150,
                        sortable: true
                    },
                    active: {
                        title: '激活',
                        key: 'active',
                        width: 150,
                        sortable: true
                    },
                    day7: {
                        title: '7日留存',
                        key: 'day7',
                        width: 150,
                        sortable: true
                    },
                    day30: {
                        title: '30日留存',
                        key: 'day30',
                        width: 150,
                        sortable: true
                    },
                    tomorrow: {
                        title: '次日留存',
                        key: 'tomorrow',
                        width: 150,
                        sortable: true
                    },
                    day: {
                        title: '日活跃',
                        key: 'day',
                        width: 150,
                        sortable: true
                    },
                    week: {
                        title: '周活跃',
                        key: 'week',
                        width: 150,
                        sortable: true
                    },
                    month: {
                        title: '月活跃',
                        key: 'month',
                        width: 150,
                        sortable: true
                    }
                };

                let data = [table2ColumnList.name];

                this.tableColumnsChecked.forEach(col => data.push(table2ColumnList[col]));

                return data;
            },
            changeTableColumns () {
                this.tableColumns2 = this.getTable2Columns();
            },
            toggleFav (index) {
                this.tableData2[index].fav = this.tableData2[index].fav === 0 ? 1 : 0;
            }
        },
        mounted () {
            this.changeTableColumns();
        }
    }
</script>
`;

code.table3 = `
<template>
    <div style="margin: 10px">
        显示边框 <i-switch v-model="showBorder" style="margin-right: 5px"></i-switch>
        显示斑马纹 <i-switch v-model="showStripe" style="margin-right: 5px"></i-switch>
        显示索引 <i-switch v-model="showIndex" style="margin-right: 5px"></i-switch>
        显示多选框 <i-switch v-model="showCheckbox" style="margin-right: 5px"></i-switch>
        显示表头 <i-switch v-model="showHeader" style="margin-right: 5px"></i-switch>
        表格滚动 <i-switch v-model="fixedHeader" style="margin-right: 5px"></i-switch>
        <br>
        <br>
        表格尺寸
        <Radio-group v-model="tableSize" type="button">
            <Radio label="large">大</Radio>
            <Radio label="default">中</Radio>
            <Radio label="small">小</Radio>
        </Radio-group>
    </div>
    <Table :border="showBorder" :stripe="showStripe" :show-header="showHeader" :height="fixedHeader ? 250 : ''" :size="tableSize" :data="tableData3" :columns="tableColumns3"></Table>
</template>
<script>
    export default {
        data () {
            return {
                tableData3: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居',
                        date: '2016-10-03'
                    },
                    {
                        name: '张小刚',
                        age: 24,
                        address: '北京市海淀区西二旗',
                        date: '2016-10-01'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道',
                        date: '2016-10-02'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道',
                        date: '2016-10-04'
                    },
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居',
                        date: '2016-10-03'
                    },
                    {
                        name: '张小刚',
                        age: 24,
                        address: '北京市海淀区西二旗',
                        date: '2016-10-01'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道',
                        date: '2016-10-02'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道',
                        date: '2016-10-04'
                    }
                ],
                showBorder: false,
                showStripe: false,
                showHeader: true,
                showIndex: true,
                showCheckbox: false,
                fixedHeader: false,
                tableSize: 'default'
            }
        },
        computed: {
            tableColumns3 () {
                let columns = [];
                if (this.showCheckbox) {
                    columns.push({
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    })
                }
                if (this.showIndex) {
                    columns.push({
                        type: 'index',
                        width: 60,
                        align: 'center'
                    })
                }
                columns.push({
                    title: '日期',
                    key: 'date',
                    sortable: true
                });
                columns.push({
                    title: '姓名',
                    key: 'name'
                });
                columns.push({
                    title: '年龄',
                    key: 'age',
                    sortable: true,
                    filters: [
                        {
                            label: '大于25岁',
                            value: 1
                        },
                        {
                            label: '小于25岁',
                            value: 2
                        }
                    ],
                    filterMultiple: false,
                    filterMethod (value, row) {
                        if (value === 1) {
                            return row.age > 25;
                        } else if (value === 2) {
                            return row.age < 25;
                        }
                    }
                });
                columns.push({
                    title: '地址',
                    key: 'address',
                    filters: [
                        {
                            label: '北京',
                            value: '北京'
                        },
                        {
                            label: '上海',
                            value: '上海'
                        },
                        {
                            label: '深圳',
                            value: '深圳'
                        }
                    ],
                    filterMethod (value, row) {
                        return row.address.indexOf(value) > -1;
                    }
                });
                return columns;
            }
        }
    }
</script>
`;

code.csv = `
<template>
    <Table :columns="columns8" :data="data7" size="small" ref="table"></Table>
    <br>
    <Button type="primary" size="large" @click="exportData(1)"><Icon type="ios-download-outline"></Icon> 导出原始数据</Button>
    <Button type="primary" size="large" @click="exportData(2)"><Icon type="ios-download-outline"></Icon> 导出排序和过滤后的数据</Button>
    <Button type="primary" size="large" @click="exportData(3)"><Icon type="ios-download-outline"></Icon> 导出自定义数据</Button>
</template>
<script>
    export default {
        data () {
            return {
                columns8: [
                    {
                        "title": "名称",
                        "key": "name",
                        "fixed": "left",
                        "width": 200
                    },
                    {
                        "title": "展示",
                        "key": "show",
                        "width": 150,
                        "sortable": true,
                        filters: [
                            {
                                label: '大于4000',
                                value: 1
                            },
                            {
                                label: '小于4000',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.show > 4000;
                            } else if (value === 2) {
                                return row.show < 4000;
                            }
                        }
                    },
                    {
                        "title": "唤醒",
                        "key": "weak",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "登录",
                        "key": "signin",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "点击",
                        "key": "click",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "激活",
                        "key": "active",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "7日留存",
                        "key": "day7",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "30日留存",
                        "key": "day30",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "次日留存",
                        "key": "tomorrow",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "日活跃",
                        "key": "day",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "周活跃",
                        "key": "week",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "月活跃",
                        "key": "month",
                        "width": 150,
                        "sortable": true
                    }
                ],
                data7: [
                    {
                        "name": "推广名称1",
                        "fav": 0,
                        "show": 7302,
                        "weak": 5627,
                        "signin": 1563,
                        "click": 4254,
                        "active": 1438,
                        "day7": 274,
                        "day30": 285,
                        "tomorrow": 1727,
                        "day": 558,
                        "week": 4440,
                        "month": 5610
                    },
                    {
                        "name": "推广名称2",
                        "fav": 0,
                        "show": 4720,
                        "weak": 4086,
                        "signin": 3792,
                        "click": 8690,
                        "active": 8470,
                        "day7": 8172,
                        "day30": 5197,
                        "tomorrow": 1684,
                        "day": 2593,
                        "week": 2507,
                        "month": 1537
                    },
                    {
                        "name": "推广名称3",
                        "fav": 0,
                        "show": 7181,
                        "weak": 8007,
                        "signin": 8477,
                        "click": 1879,
                        "active": 16,
                        "day7": 2249,
                        "day30": 3450,
                        "tomorrow": 377,
                        "day": 1561,
                        "week": 3219,
                        "month": 1588
                    },
                    {
                        "name": "推广名称4",
                        "fav": 0,
                        "show": 9911,
                        "weak": 8976,
                        "signin": 8807,
                        "click": 8050,
                        "active": 7668,
                        "day7": 1547,
                        "day30": 2357,
                        "tomorrow": 7278,
                        "day": 5309,
                        "week": 1655,
                        "month": 9043
                    },
                    {
                        "name": "推广名称5",
                        "fav": 0,
                        "show": 934,
                        "weak": 1394,
                        "signin": 6463,
                        "click": 5278,
                        "active": 9256,
                        "day7": 209,
                        "day30": 3563,
                        "tomorrow": 8285,
                        "day": 1230,
                        "week": 4840,
                        "month": 9908
                    },
                    {
                        "name": "推广名称6",
                        "fav": 0,
                        "show": 6856,
                        "weak": 1608,
                        "signin": 457,
                        "click": 4949,
                        "active": 2909,
                        "day7": 4525,
                        "day30": 6171,
                        "tomorrow": 1920,
                        "day": 1966,
                        "week": 904,
                        "month": 6851
                    },
                    {
                        "name": "推广名称7",
                        "fav": 0,
                        "show": 5107,
                        "weak": 6407,
                        "signin": 4166,
                        "click": 7970,
                        "active": 1002,
                        "day7": 8701,
                        "day30": 9040,
                        "tomorrow": 7632,
                        "day": 4061,
                        "week": 4359,
                        "month": 3676
                    },
                    {
                        "name": "推广名称8",
                        "fav": 0,
                        "show": 862,
                        "weak": 6520,
                        "signin": 6696,
                        "click": 3209,
                        "active": 6801,
                        "day7": 6364,
                        "day30": 6850,
                        "tomorrow": 9408,
                        "day": 2481,
                        "week": 1479,
                        "month": 2346
                    },
                    {
                        "name": "推广名称9",
                        "fav": 0,
                        "show": 567,
                        "weak": 5859,
                        "signin": 128,
                        "click": 6593,
                        "active": 1971,
                        "day7": 7596,
                        "day30": 3546,
                        "tomorrow": 6641,
                        "day": 1611,
                        "week": 5534,
                        "month": 3190
                    },
                    {
                        "name": "推广名称10",
                        "fav": 0,
                        "show": 3651,
                        "weak": 1819,
                        "signin": 4595,
                        "click": 7499,
                        "active": 7405,
                        "day7": 8710,
                        "day30": 5518,
                        "tomorrow": 428,
                        "day": 9768,
                        "week": 2864,
                        "month": 5811
                    }
                ]
            }
        },
        methods: {
            exportData (type) {
                if (type === 1) {
                    this.$refs.table.exportCsv({
                        filename: '原始数据'
                    });
                } else if (type === 2) {
                    this.$refs.table.exportCsv({
                        filename: '排序和过滤后的数据',
                        original: false
                    });
                } else if (type === 3) {
                    this.$refs.table.exportCsv({
                        filename: '自定义数据',
                        columns: this.columns8.filter((col, index) => index < 4),
                        data: this.data7.filter((data, index) => index < 4)
                    });
                }
            }        
        }
    }
</script>
`;

export default code;