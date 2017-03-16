let code = {};

code.base = `
<template>
    <Dropdown>
        <a href="javascript:void(0)">
            下拉菜单
            <Icon type="arrow-down-b"></Icon>
        </a>
        <Dropdown-menu slot="list">
            <Dropdown-item>驴打滚</Dropdown-item>
            <Dropdown-item>炸酱面</Dropdown-item>
            <Dropdown-item disabled>豆汁儿</Dropdown-item>
            <Dropdown-item>冰糖葫芦</Dropdown-item>
            <Dropdown-item divided>北京烤鸭</Dropdown-item>
        </Dropdown-menu>
    </Dropdown>
    <Dropdown style="margin-left: 20px">
        <i-button type="primary">
            下拉菜单
            <Icon type="arrow-down-b"></Icon>
        </i-button>
        <Dropdown-menu slot="list">
            <Dropdown-item>驴打滚</Dropdown-item>
            <Dropdown-item>炸酱面</Dropdown-item>
            <Dropdown-item disabled>豆汁儿</Dropdown-item>
            <Dropdown-item>冰糖葫芦</Dropdown-item>
            <Dropdown-item divided>北京烤鸭</Dropdown-item>
        </Dropdown-menu>
    </Dropdown>
</template>
<script>
    export default {
        
    }
</script>
`;

code.trigger = `
<template>
    <Dropdown>
        <a href="javascript:void(0)">
            hover 触发
            <Icon type="arrow-down-b"></Icon>
        </a>
        <Dropdown-menu slot="list">
            <Dropdown-item>驴打滚</Dropdown-item>
            <Dropdown-item>炸酱面</Dropdown-item>
            <Dropdown-item>豆汁儿</Dropdown-item>
            <Dropdown-item>冰糖葫芦</Dropdown-item>
            <Dropdown-item>北京烤鸭</Dropdown-item>
        </Dropdown-menu>
    </Dropdown>
    <Dropdown trigger="click" style="margin-left: 20px">
        <a href="javascript:void(0)">
            click 触发
            <Icon type="arrow-down-b"></Icon>
        </a>
        <Dropdown-menu slot="list">
            <Dropdown-item>驴打滚</Dropdown-item>
            <Dropdown-item>炸酱面</Dropdown-item>
            <Dropdown-item>豆汁儿</Dropdown-item>
            <Dropdown-item>冰糖葫芦</Dropdown-item>
            <Dropdown-item>北京烤鸭</Dropdown-item>
        </Dropdown-menu>
    </Dropdown>
    <Dropdown trigger="custom" :visible="visible" style="margin-left: 20px">
        <a href="javascript:void(0)" @click="handleOpen">
            custom 触发
            <Icon type="arrow-down-b"></Icon>
        </a>
        <Dropdown-menu slot="list">
            <p>常用于各种自定义下拉内容的场景。</p>
            <div style="text-align: right;margin:10px;">
                <i-button type="primary" @click="handleClose">关闭</i-button>
            </div>
        </Dropdown-menu>
    </Dropdown>
</template>
<script>
    export default {
        data () {
            return {
                visible: false
            }
        },
        methods: {
            handleOpen () {
                this.visible = true;
            },
            handleClose () {
                this.visible = false;
            }
        }
    }
</script>
`;

code.placement = `
<template>
    <Dropdown placement="bottom-start">
        <a href="javascript:void(0)">
            菜单(左)
            <Icon type="arrow-down-b"></Icon>
        </a>
        <Dropdown-menu slot="list">
            <Dropdown-item>驴打滚</Dropdown-item>
            <Dropdown-item>炸酱面</Dropdown-item>
            <Dropdown-item>豆汁儿</Dropdown-item>
            <Dropdown-item>冰糖葫芦</Dropdown-item>
            <Dropdown-item>北京烤鸭</Dropdown-item>
        </Dropdown-menu>
    </Dropdown>
    <Dropdown style="margin-left: 20px">
        <a href="javascript:void(0)">
            菜单(居中)
            <Icon type="arrow-down-b"></Icon>
        </a>
        <Dropdown-menu slot="list">
            <Dropdown-item>驴打滚</Dropdown-item>
            <Dropdown-item>炸酱面</Dropdown-item>
            <Dropdown-item>豆汁儿</Dropdown-item>
            <Dropdown-item>冰糖葫芦</Dropdown-item>
            <Dropdown-item>北京烤鸭</Dropdown-item>
        </Dropdown-menu>
    </Dropdown>
    <Dropdown style="margin-left: 20px" placement="bottom-end">
        <a href="javascript:void(0)">
            菜单(右)
            <Icon type="arrow-down-b"></Icon>
        </a>
        <Dropdown-menu slot="list">
            <Dropdown-item>驴打滚</Dropdown-item>
            <Dropdown-item>炸酱面</Dropdown-item>
            <Dropdown-item>豆汁儿</Dropdown-item>
            <Dropdown-item>冰糖葫芦</Dropdown-item>
            <Dropdown-item>北京烤鸭</Dropdown-item>
        </Dropdown-menu>
    </Dropdown>
</template>
<script>
    export default {
        
    }
</script>
`;

code.nest = `
<template>
    <Dropdown>
        <a href="javascript:void(0)">
            北京小吃
            <Icon type="arrow-down-b"></Icon>
        </a>
        <Dropdown-menu slot="list">
            <Dropdown-item>驴打滚</Dropdown-item>
            <Dropdown-item>炸酱面</Dropdown-item>
            <Dropdown-item>豆汁儿</Dropdown-item>
            <Dropdown placement="right-start">
                <Dropdown-item>
                    北京烤鸭
                    <Icon type="ios-arrow-right"></Icon>
                </Dropdown-item>
                <Dropdown-menu slot="list">
                    <Dropdown-item>挂炉烤鸭</Dropdown-item>
                    <Dropdown-item>焖炉烤鸭</Dropdown-item>
                </Dropdown-menu>
            </Dropdown>
            <Dropdown-item>冰糖葫芦</Dropdown-item>
        </Dropdown-menu>
    </Dropdown>
</template>
<script>
    export default {
        
    }
</script>
`;

export default code;