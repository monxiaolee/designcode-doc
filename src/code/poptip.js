let code = {};

code.base = `
<template>
    <Poptip trigger="hover" title="提示标题" content="提示内容">
        <i-button>hover 激活</i-button>
    </Poptip>
    <Poptip title="提示标题" content="提示内容">
        <i-button>click 激活</i-button>
    </Poptip>
    <Poptip trigger="focus" title="提示标题" content="提示内容">
        <i-button>focus 激活</i-button>
    </Poptip>
    <Poptip trigger="focus" title="提示标题" content="提示内容">
        <i-input placeholder="输入框的 focus"></i-input>
    </Poptip>
</template>
<script>
    export default {
        
    }
</script>
`;

code.placement = `
<style scoped>
    .top,.bottom{
        text-align: center;
    }
    .center{
        width: 300px;
        margin: 10px auto;
        overflow: hidden;
    }
    .center-left{
        float: left;
    }
    .center-right{
        float: right;
    }
</style>
<template>
    <div class="top">
        <Poptip title="提示标题" content="提示内容" placement="top-start">
            <i-button>上左</i-button>
        </Poptip>
        <Poptip title="提示标题" content="提示内容" placement="top">
            <i-button>上边</i-button>
        </Poptip>
        <Poptip title="提示标题" content="提示内容" placement="top-end">
            <i-button>上右</i-button>
        </Poptip>
    </div>
    <div class="center">
        <div class="center-left">
            <Poptip title="提示标题" content="提示内容" placement="left-start">
                <i-button>左上</i-button>
            </Poptip><br><br>
            <Poptip title="提示标题" content="提示内容" placement="left">
                <i-button>左边</i-button>
            </Poptip><br><br>
            <Poptip title="提示标题" content="提示内容" placement="left-end">
                <i-button>左下</i-button>
            </Poptip>
        </div>
        <div class="center-right">
            <Poptip title="提示标题" content="提示内容" placement="right-start">
                <i-button>右上</i-button>
            </Poptip><br><br>
            <Poptip title="提示标题" content="提示内容" placement="right">
                <i-button>右边</i-button>
            </Poptip><br><br>
            <Poptip title="提示标题" content="提示内容" placement="right-end">
                <i-button>右下</i-button>
            </Poptip>
        </div>
    </div>
    <div class="bottom">
        <Poptip title="提示标题" content="提示内容" placement="bottom-start">
            <i-button>下左</i-button>
        </Poptip>
        <Poptip title="提示标题" content="提示内容" placement="bottom">
            <i-button>下边</i-button>
        </Poptip>
        <Poptip title="提示标题" content="提示内容" placement="bottom-end">
            <i-button>下右</i-button>
        </Poptip>
    </div>
</template>
<script>
    export default {
        
    }
</script>
`;

code.visible = `
<template>
    <Poptip :visible.sync="visible">
        <a>click 激活</a>
        <div slot="title"><i>自定义标题</i></div>
        <div slot="content">
            <a @click="close">关闭提示框</a>
        </div>
    </Poptip>
</template>
<script>
    export default {
        data () {
            return {
                visible: false
            }
        },
        methods: {
            close () {
                this.visible = false;
            }
        }
    }
</script>
`;

code.slot = `
<template>
    <Poptip placement="right" width="400">
        <i-button type="ghost">click 激活</i-button>
        <div class="api" slot="content">
            <table>
                <thead>
                    <tr>
                        <th>版本号</th>
                        <th>更新时间</th>
                        <th>说明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0.9.5</td>
                        <td>2016-10-26</td>
                        <td>新增信息提示组件 <code>Tooltip</code>和<code>Poptip</code></td>
                    </tr>
                    <tr>
                        <td>0.9.4</td>
                        <td>2016-10-25</td>
                        <td>新增对话框组件 <code>Modal</code></td>
                    </tr>
                    <tr>
                        <td>0.9.2</td>
                        <td>2016-09-28</td>
                        <td>新增选择器组件 <code>Select</code></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Poptip>
</template>
<script>
    export default {
        
    }
</script>
`;

code.confirm = `
<template>
    <Poptip
        confirm
        title="您确认删除这条内容吗？"
        @on-ok="ok"
        @on-cancel="cancel">
        <i-button>删除</i-button>
    </Poptip>
    <Poptip
        confirm
        title="Are you sure delete this task?"
        @on-ok="ok"
        @on-cancel="cancel"
        ok-text="yes"
        cancel-text="no">
        <i-button>国际化</i-button>
    </Poptip>
</template>
<script>
    export default {
        methods: {
            ok () {
                this.$Message.info('点击了确定');
            },
            cancel () {
                this.$Message.info('点击了取消');
            }
        }
    }
</script>
`;

export default code;