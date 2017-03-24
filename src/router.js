/**
 * Created by aresn on 16/8/22.
 */
const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: require('./views/index.vue')
    },
    {
        path: '/cli',
        meta: {
            title: 'iView Cli 可视化脚手架'
        },
        component: require('./views/cli.vue')
    },
    {
        path: '/live',
        meta: {
            title: '讲堂'
        },
        component: require('./views/live.vue')
    },
    {
        path: '/overview',
        meta: {
            title: '概览'
        },
        component: require('./views/guide/overview.vue')
    },
    {
        path: '/docs/guide/introduce',
        meta: {
            title: 'iView介绍'
        },
        component: require('./views/guide/introduce.vue')
    },
    {
        path: '/docs/guide/introduce-en',
        meta: {
            title: 'Introduction'
        },
        component: require('./views/guide/introduce-en.vue')
    },
    {
        path: '/docs/guide/design',
        meta: {
            title: '设计原则'
        },
        component: require('./views/guide/design.vue')
    },
    {
        path: '/docs/guide/design-en',
        meta: {
            title: 'Design Principle'
        },
        component: require('./views/guide/design-en.vue')
    },
    {
        path: '/docs/guide/layout',
        meta: {
            title: '布局'
        },
        component: require('./views/guide/layout.vue')
    },
    {
        path: '/docs/guide/layout-en',
        meta: {
            title: 'Layout'
        },
        component: require('./views/guide/layout-en.vue')
    },
    {
        path: '/docs/guide/standard',
        meta: {
            title: '参与贡献'
        },
        component: require('./views/guide/standard.vue')
    },
    {
        path: '/docs/practice/case',
        meta: {
            title: '实践案例'
        },
        component: require('./views/practice/case.vue')
    },
    {
        path: '/docs/practice/logo',
        meta: {
            title: 'iView Logo 设计思路'
        },
        component: require('./views/practice/logo.vue')
    },
    {
        path: '/docs/guide/install',
        meta: {
            title: '安装'
        },
        component: require('./views/guide/install.vue')
    },
    {
        path: '/docs/guide/start',
        meta: {
            title: '快速上手'
        },
        component: require('./views/guide/start.vue')
    },
    {
        path: '/docs/guide/i18n',
        meta: {
            title: '国际化'
        },
        component: require('./views/guide/i18n.vue')
    },
    {
        path: '/docs/guide/theme',
        meta: {
            title: '定制主题'
        },
        component: require('./views/guide/theme.vue')
    },
    {
        path: '/docs/guide/update',
        meta: {
            title: '更新日志'
        },
        component: require('./views/guide/update.vue')
    },
    {
        path: '/components/grid',
        meta: {
            title: '栅格 Grid'
        },
        component: require('./views/components/grid.vue')
    },
    {
        path: '/components/layout',
        meta: {
            title: '布局 Layout'
        },
        component: require('./views/guide/layout.vue')
    },
    {
        path: '/components/color',
        meta: {
            title: '色彩 Color'
        },
        component: require('./views/components/color.vue')
    },
    {
        path: '/components/font',
        meta: {
            title: '字体 Font'
        },
        component: require('./views/components/font.vue')
    },
    {
        path: '/components/button',
        meta: {
            title: '按钮 Button'
        },
        component: require('./views/components/button.vue')
    },
    {
        path: '/components/button-en',
        meta: {
            title: 'Button'
        },
        component: require('./views/components/button-en.vue')
    },
    {
        path: '/components/icon',
        meta: {
            title: '图标 Icon'
        },
        component: require('./views/components/icon.vue')
    },
    {
        path: '/components/input',
        meta: {
            title: '输入框 Input'
        },
        component: require('./views/components/input.vue')
    },
    {
        path: '/components/radio',
        meta: {
            title: '单选框 Radio'
        },
        component: require('./views/components/radio.vue')
    },
    {
        path: '/components/checkbox',
        meta: {
            title: '多选框 Checkbox'
        },
        component: require('./views/components/checkbox.vue')
    },
    {
        path: '/components/switch',
        meta: {
            title: '开关 Switch'
        },
        component: require('./views/components/switch.vue')
    },
    {
        path: '/components/table',
        meta: {
            title: '表格 Table'
        },
        component: require('./views/components/table.vue')
    },
    {
        path: '/components/select',
        meta: {
            title: '选择器 Select'
        },
        component: require('./views/components/select.vue')
    },
    {
        path: '/components/slider',
        meta: {
            title: '滑块 Slider'
        },
        component: require('./views/components/slider.vue')
    },
    {
        path: '/components/date-picker',
        meta: {
            title: '日期选择器 DatePicker'
        },
        component: require('./views/components/date-picker.vue')
    },
    {
        path: '/components/time-picker',
        meta: {
            title: '时间选择器 TimePicker'
        },
        component: require('./views/components/time-picker.vue')
    },
    {
        path: '/components/cascader',
        meta: {
            title: '级联选择 Cascader'
        },
        component: require('./views/components/cascader.vue')
    },
    {
        path: '/components/transfer',
        meta: {
            title: '穿梭框 Transfer'
        },
        component: require('./views/components/transfer.vue')
    },
    {
        path: '/components/input-number',
        meta: {
            title: '数字输入框 InputNumber'
        },
        component: require('./views/components/input-number.vue')
    },
    {
        path: '/components/rate',
        meta: {
            title: '评分 Rate'
        },
        component: require('./views/components/rate.vue')
    },
    {
        path: '/components/upload',
        meta: {
            title: '上传 Upload'
        },
        component: require('./views/components/upload.vue')
    },
    {
        path: '/components/form',
        meta: {
            title: '表单 Form'
        },
        component: require('./views/components/form.vue')
    },
    {
        path: '/components/alert',
        meta: {
            title: '警告提示 Alert'
        },
        component: require('./views/components/alert.vue')
    },
    {
        path: '/components/alert-en',
        meta: {
            title: 'Alert'
        },
        component: require('./views/components/alert-en.vue')
    },
    {
        path: '/components/card',
        meta: {
            title: '卡片 Card'
        },
        component: require('./views/components/card.vue')
    },
    {
        path: '/components/message',
        meta: {
            title: '全局提示 Message'
        },
        component: require('./views/components/message.vue')
    },
    {
        path: '/components/notice',
        meta: {
            title: '通知提醒 Notice'
        },
        component: require('./views/components/notice.vue')
    },
    {
        path: '/components/modal',
        meta: {
            title: '对话框 Modal'
        },
        component: require('./views/components/modal.vue')
    },
    {
        path: '/components/progress',
        meta: {
            title: '进度条 Progress'
        },
        component: require('./views/components/progress.vue')
    },
    {
        path: '/components/badge',
        meta: {
            title: '徽标数 Badge'
        },
        component: require('./views/components/badge.vue')
    },
    {
        path: '/components/collapse',
        meta: {
            title: '折叠面板 Collapse'
        },
        component: require('./views/components/collapse.vue')
    },
    {
        path: '/components/timeline',
        meta: {
            title: '时间轴 Timeline'
        },
        component: require('./views/components/timeline.vue')
    },
    {
        path: '/components/tag',
        meta: {
            title: '标签 Tag'
        },
        component: require('./views/components/tag.vue')
    },
    {
        path: '/components/tooltip',
        meta: {
            title: '文字提示 Tooltip'
        },
        component: require('./views/components/tooltip.vue')
    },
    {
        path: '/components/poptip',
        meta: {
            title: '气泡提示 Poptip'
        },
        component: require('./views/components/poptip.vue')
    },
    {
        path: '/components/carousel',
        meta: {
            title: '走马灯 Carousel'
        },
        component: require('./views/components/carousel.vue')
    },
    {
        path: '/components/tree',
        meta: {
            title: '树形控件 Tree'
        },
        component: require('./views/components/tree.vue')
    },
    {
        path: '/components/menu',
        meta: {
            title: '导航菜单 Menu'
        },
        component: require('./views/components/menu.vue')
    },
    {
        path: '/components/tabs',
        meta: {
            title: '标签页 Tabs'
        },
        component: require('./views/components/tabs.vue')
    },
    {
        path: '/components/dropdown',
        meta: {
            title: '下拉菜单 Dropdown'
        },
        component: require('./views/components/dropdown.vue')
    },
    {
        path: '/components/page',
        meta: {
            title: '分页 Page'
        },
        component: require('./views/components/page.vue')
    },
    {
        path: '/components/breadcrumb',
        meta: {
            title: '面包屑 Breadcrumb'
        },
        component: require('./views/components/breadcrumb.vue')
    },
    {
        path: '/components/steps',
        meta: {
            title: '步骤条 Steps'
        },
        component: require('./views/components/steps.vue')
    },
    {
        path: '/components/loading-bar',
        meta: {
            title: '加载进度条 LoadingBar'
        },
        component: require('./views/components/loading-bar.vue')
    },
    {
        path: '/components/circle',
        meta: {
            title: '进度环 Circle'
        },
        component: require('./views/components/circle.vue')
    },
    {
        path: '/components/affix',
        meta: {
            title: '图钉 Affix'
        },
        component: require('./views/components/affix.vue')
    },
    {
        path: '/components/affix-en',
        meta: {
            title: 'Affix'
        },
        component: require('./views/components/affix-en.vue')
    },
    {
        path: '/components/back-top',
        meta: {
            title: '回到顶部 BackTop'
        },
        component: require('./views/components/back-top.vue')
    },
    {
        path: '/components/back-top-en',
        meta: {
            title: 'BackTop'
        },
        component: require('./views/components/back-top-en.vue')
    },
    {
        path: '/components/spin',
        meta: {
            title: '加载中 Spin'
        },
        component: require('./views/components/spin.vue')
    },
    {
        path: '*',
        redirect: '/'
    }
];

export default routers;