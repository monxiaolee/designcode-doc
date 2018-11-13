/**
 * Created by monxiaoLee on 18/4/2.
 */
const routers = [
    {
        path: '/',
        redirect: '/docs/guide/introduce',
        meta: {
            title: '设计原则'
        },
        component: (resolve) => require(['./views/guide/introduce.vue'], resolve)
        /*component: (resolve) => require(['./views/index.vue'], resolve)*/

    },
    {
        path: '/theme-default',
        meta: {
            title: '默认主题'
        },
        component: (resolve) => require(['./views/themes/theme-default/color.vue'], resolve)
    },
    {
        path: '/docs/theme-default/color',
        meta: {
            title: '默认主题'
        },
        component: (resolve) => require(['./views/themes/theme-default/color.vue'], resolve)
    },
    {
        path: '/docs/theme-default/font',
        meta: {
            title: '默认主题'
        },
        component: (resolve) => require(['./views/themes/theme-default/font.vue'], resolve)
    },
    {
        path: '/docs/theme-default/icon',
        meta: {
            title: '默认主题'
        },
        component: (resolve) => require(['./views/themes/theme-default/icon.vue'], resolve)
    },
    {
        path: '/theme-transparent',
        meta: {
            title: '透明主题'
        },
        component: (resolve) => require(['./views/themes/theme-transparent/color.vue'], resolve)
    },
    {
        path: '/docs/theme-transparent/color',
        meta: {
            title: '颜色透明主题'
        },
        component: (resolve) => require(['./views/themes/theme-transparent/color.vue'], resolve)
    },
    {
        path: '/docs/theme-transparent/font',
        meta: {
            title: '颜色透明主题'
        },
        component: (resolve) => require(['./views/themes/theme-transparent/font.vue'], resolve)
    },
    {
        path: '/docs/theme-transparent/icon',
        meta: {
            title: '颜色透明主题'
        },
        component: (resolve) => require(['./views/themes/theme-transparent/icon.vue'], resolve)
    },
    {
        path: '/overview',
        meta: {
            title: '概览'
        },
        component: (resolve) => require(['./views/guide/overview.vue'], resolve)
    },
    {
        path: '/docs/guide/introduce',
        meta: {
            title: 'staticR概述'
        },
        component: (resolve) => require(['./views/guide/introduce.vue'], resolve)
    },
    {
        path: '/docs/guide/design',
        meta: {
            title: '设计原则'
        },
        component: (resolve) => require(['./views/guide/design.vue'], resolve)
    },
    {
        path: '/docs/guide/layout',
        meta: {
            title: '布局'
        },
        component: (resolve) => require(['./views/guide/layout.vue'], resolve)
    },
    {
        path: '/docs/guide/d3layout',
        meta: {
            title: 'd3节点相关布局'
        },
        component: (resolve) => require(['./views/guide/d3FNetwork.vue'], resolve)
    },
    {
        path: '/d3Topo/index',
        meta: {
            title: 'd3拓扑图'
        },
        component: (resolve) => require(['./views/topo/index.vue'], resolve)
    },
    {
        path: '/d3FNetwork/ForestMatrixLayout',
        meta: {
            title: 'ForestMatrixLayout-demo'
        },
        component: (resolve) => require(['./views/d3FNetwork/ForestMatrix/index.vue'], resolve)
    },
    {
        path: '/d3FNetwork/UNDirectTreeMatix',
        meta: {
            title: 'UNDirectTreeMatix-demo'
        },
        component: (resolve) => require(['./views/d3FNetwork/UNDirectTreeMatix/index.vue'], resolve)
    },
    {
        path: '/docs/classicCase/case',
        meta: {
            title: '典型案例'
        },
        component: (resolve) => require(['./views/practice/case.vue'], resolve)
    },
    {
        path: '/docs/classicCase/independence-project',
        meta: {
            title: '独立工程'
        },
        component: (resolve) => require(['./views/practice/independence-project.vue'], resolve)
    },
    {
        path: '/docs/guide/install',
        meta: {
            title: '安装'
        },
        component: (resolve) => require(['./views/guide/install.vue'], resolve)
    },
    {
        path: '/docs/guide/theme',
        meta: {
            title: '定制主题'
        },
        component: (resolve) => require(['./views/guide/theme.vue'], resolve)
    },
    {
        path: '/docs/guide/iview-loader',
        meta: {
            title: 'iView Loader'
        },
        component: (resolve) => require(['./views/guide/iview-loader.vue'], resolve)
    },
    {
        path: '/docs/guide/update',
        meta: {
            title: '更新日志'
        },
        component: (resolve) => require(['./views/guide/update.vue'], resolve)
    },
    {
        path: '/components/grid',
        meta: {
            title: '栅格 Grid'
        },
        component: (resolve) => require(['./views/components/grid.vue'], resolve)
    },
    {
        path: '/components/layout',
        meta: {
            title: '布局 Layout'
        },
        component: (resolve) => require(['./views/guide/layout.vue'], resolve)
    },
    {
        path: '/components/color',
        meta: {
            title: '色彩 Color'
        },
        component: (resolve) => require(['./views/components/color.vue'], resolve)
    },
    {
        path: '/components/font',
        meta: {
            title: '字体 Font'
        },
        component: (resolve) => require(['./views/components/font.vue'], resolve)
    },
    {
        path: '/components/button',
        meta: {
            title: '按钮 Button'
        },
        component: (resolve) => require(['./views/components/button.vue'], resolve)
    },
    {
        path: '/components/icon',
        meta: {
            title: '图标 Icon'
        },
        component: (resolve) => require(['./views/components/icon.vue'], resolve)
    },
    {
        path: '/components/input',
        meta: {
            title: '输入框 Input'
        },
        component: (resolve) => require(['./views/components/input.vue'], resolve)
    },
    {
        path: '/components/radio',
        meta: {
            title: '单选框 Radio'
        },
        component: (resolve) => require(['./views/components/radio.vue'], resolve)
    },
    {
        path: '/components/checkbox',
        meta: {
            title: '多选框 Checkbox'
        },
        component: (resolve) => require(['./views/components/checkbox.vue'], resolve)
    },
    {
        path: '/components/switch',
        meta: {
            title: '开关 Switch'
        },
        component: (resolve) => require(['./views/components/switch.vue'], resolve)
    },
    {
        path: '/components/table',
        meta: {
            title: '表格 Table'
        },
        component: (resolve) => require(['./views/components/table.vue'], resolve)
    },
    {
        path: '/components/select',
        meta: {
            title: '选择器 Select'
        },
        component: (resolve) => require(['./views/components/select.vue'], resolve)
    },
    {
        path: '/components/slider',
        meta: {
            title: '滑块 Slider'
        },
        component: (resolve) => require(['./views/components/slider.vue'], resolve)
    },
    {
        path: '/components/date-picker',
        meta: {
            title: '日期选择器 DatePicker'
        },
        component: (resolve) => require(['./views/components/date-picker.vue'], resolve)
    },
    {
        path: '/components/time-picker',
        meta: {
            title: '时间选择器 TimePicker'
        },
        component: (resolve) => require(['./views/components/time-picker.vue'], resolve)
    },
    {
        path: '/components/cascader',
        meta: {
            title: '级联选择 Cascader'
        },
        component: (resolve) => require(['./views/components/cascader.vue'], resolve)
    },
    {
        path: '/components/transfer',
        meta: {
            title: '穿梭框 Transfer'
        },
        component: (resolve) => require(['./views/components/transfer.vue'], resolve)
    },
    {
        path: '/components/input-number',
        meta: {
            title: '数字输入框 InputNumber'
        },
        component: (resolve) => require(['./views/components/input-number.vue'], resolve)
    },
    {
        path: '/components/rate',
        meta: {
            title: '评分 Rate'
        },
        component: (resolve) => require(['./views/components/rate.vue'], resolve)
    },
    {
        path: '/components/upload',
        meta: {
            title: '上传 Upload'
        },
        component: (resolve) => require(['./views/components/upload.vue'], resolve)
    },
    {
        path: '/components/form',
        meta: {
            title: '表单 Form'
        },
        component: (resolve) => require(['./views/components/form.vue'], resolve)
    },
    {
        path: '/components/alert',
        meta: {
            title: '警告提示 Alert'
        },
        component: (resolve) => require(['./views/components/alert.vue'], resolve)
    },
    {
        path: '/components/card',
        meta: {
            title: '卡片 Card'
        },
        component: (resolve) => require(['./views/components/card.vue'], resolve)
    },
    {
        path: '/components/message',
        meta: {
            title: '全局提示 Message'
        },
        component: (resolve) => require(['./views/components/message.vue'], resolve)
    },
    {
        path: '/components/notice',
        meta: {
            title: '通知提醒 Notice'
        },
        component: (resolve) => require(['./views/components/notice.vue'], resolve)
    },
    {
        path: '/components/modal',
        meta: {
            title: '对话框 Modal'
        },
        component: (resolve) => require(['./views/components/modal.vue'], resolve)
    },
    {
        path: '/components/progress',
        meta: {
            title: '进度条 Progress'
        },
        component: (resolve) => require(['./views/components/progress.vue'], resolve)
    },
    {
        path: '/components/badge',
        meta: {
            title: '徽标数 Badge'
        },
        component: (resolve) => require(['./views/components/badge.vue'], resolve)
    },
    {
        path: '/components/collapse',
        meta: {
            title: '折叠面板 Collapse'
        },
        component: (resolve) => require(['./views/components/collapse.vue'], resolve)
    },
    {
        path: '/components/timeline',
        meta: {
            title: '时间轴 Timeline'
        },
        component: (resolve) => require(['./views/components/timeline.vue'], resolve)
    },
    {
        path: '/components/tag',
        meta: {
            title: '标签 Tag'
        },
        component: (resolve) => require(['./views/components/tag.vue'], resolve)
    },
    {
        path: '/components/tooltip',
        meta: {
            title: '文字提示 Tooltip'
        },
        component: (resolve) => require(['./views/components/tooltip.vue'], resolve)
    },
    {
        path: '/components/poptip',
        meta: {
            title: '气泡提示 Poptip'
        },
        component: (resolve) => require(['./views/components/poptip.vue'], resolve)
    },
    {
        path: '/components/carousel',
        meta: {
            title: '走马灯 Carousel'
        },
        component: (resolve) => require(['./views/components/carousel.vue'], resolve)
    },
    {
        path: '/components/tree',
        meta: {
            title: '树形控件 Tree'
        },
        component: (resolve) => require(['./views/components/tree.vue'], resolve)
    },
    {
        path: '/components/menu',
        meta: {
            title: '导航菜单 Menu'
        },
        component: (resolve) => require(['./views/components/menu.vue'], resolve)
    },
    {
        path: '/components/tabs',
        meta: {
            title: '标签页 Tabs'
        },
        component: (resolve) => require(['./views/components/tabs.vue'], resolve)
    },
    {
        path: '/components/dropdown',
        meta: {
            title: '下拉菜单 Dropdown'
        },
        component: (resolve) => require(['./views/components/dropdown.vue'], resolve)
    },
    {
        path: '/components/page',
        meta: {
            title: '分页 Page'
        },
        component: (resolve) => require(['./views/components/page.vue'], resolve)
    },
    {
        path: '/components/breadcrumb',
        meta: {
            title: '面包屑 Breadcrumb'
        },
        component: (resolve) => require(['./views/components/breadcrumb.vue'], resolve)
    },
    {
        path: '/components/steps',
        meta: {
            title: '步骤条 Steps'
        },
        component: (resolve) => require(['./views/components/steps.vue'], resolve)
    },
    {
        path: '/components/loading-bar',
        meta: {
            title: '加载进度条 LoadingBar'
        },
        component: (resolve) => require(['./views/components/loading-bar.vue'], resolve)
    },
    {
        path: '/components/circle',
        meta: {
            title: '进度环 Circle'
        },
        component: (resolve) => require(['./views/components/circle.vue'], resolve)
    },
    {
        path: '/components/affix',
        meta: {
            title: '图钉 Affix'
        },
        component: (resolve) => require(['./views/components/affix.vue'], resolve)
    },
    {
        path: '/components/back-top',
        meta: {
            title: '回到顶部 BackTop'
        },
        component: (resolve) => require(['./views/components/back-top.vue'], resolve)
    },
    {
        path: '/components/spin',
        meta: {
            title: '加载中 Spin'
        },
        component: (resolve) => require(['./views/components/spin.vue'], resolve)
    },
    {
        path: '/components/avatar',
        meta: {
            title: 'Avatar 头像'
        },
        component: (resolve) => require(['./views/components/avatar.vue'], resolve)
    },
    {
        path: '/components/color-picker',
        meta: {
            title: 'ColorPicker 颜色选择器'
        },
        component: (resolve) => require(['./views/components/color-picker.vue'], resolve)
    },
    {
        path: '/components/auto-complete',
        meta: {
            title: 'AutoComplete 自动完成'
        },
        component: (resolve) => require(['./views/components/auto-complete.vue'], resolve)
    },
    {
        path: '/components/scroll',
        meta: {
            title: 'Scroll 无限滚动'
        },
        component: (resolve) => require(['./views/components/scroll.vue'], resolve)
    },
    {
        path: '*',
        redirect: '/'
    }
];

export default routers;
