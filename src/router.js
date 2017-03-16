/**
 * Created by aresn on 16/8/22.
 */
const routers = {
    '/': {
        title: '',
        component (resolve) {
            require(['./views/index.vue'], resolve);
        }
    },
    '/cli': {
        title: 'iView Cli 可视化脚手架',
        component (resolve) {
            require(['./views/cli.vue'], resolve);
        }
    },
    '/docs/guide/introduce': {
        title: 'iView介绍',
        component (resolve) {
            require(['./views/guide/introduce.vue'], resolve);
        }
    },
    '/docs/guide/design': {
        title: '设计原则',
        component (resolve) {
            require(['./views/guide/design.vue'], resolve);
        }
    },
    '/docs/guide/layout': {
        title: '布局',
        component (resolve) {
            require(['./views/guide/layout.vue'], resolve);
        }
    },
    '/docs/guide/install': {
        title: '安装',
        component (resolve) {
            require(['./views/guide/install.vue'], resolve);
        }
    },
    '/docs/guide/start': {
        title: '快速上手',
        component (resolve) {
            require(['./views/guide/start.vue'], resolve);
        }
    },
    '/docs/guide/i18n': {
        title: '国际化',
        component (resolve) {
            require(['./views/guide/i18n.vue'], resolve);
        }
    },
    '/docs/guide/standard': {
        title: '参与贡献',
        component (resolve) {
            require(['./views/guide/standard.vue'], resolve);
        }
    },
    '/docs/guide/theme': {
        title: '定制主题',
        component (resolve) {
            require(['./views/guide/theme.vue'], resolve);
        }
    },
    '/docs/guide/update': {
        title: '更新日志',
        component (resolve) {
            require(['./views/guide/update.vue'], resolve);
        }
    },
    '/overview': {
        title: '概览',
        component (resolve) {
            require(['./views/guide/overview.vue'], resolve);
        }
    },
    '/components/button': {
        title: '按钮 Button',
        component (resolve) {
            require(['./views/components/button.vue'], resolve);
        }
    },
    '/components/grid': {
        title: '栅格 Grid',
        component (resolve) {
            require(['./views/components/grid.vue'], resolve);
        }
    },
    '/components/layout': {
        title: '布局 Layout',
        component (resolve) {
            require(['./views/guide/layout.vue'], resolve);
        }
    },
    '/components/affix': {
        title: '图钉 Affix',
        component (resolve) {
            require(['./views/components/affix.vue'], resolve);
        }
    },
    '/components/back-top': {
        title: '回到顶部 BackTop',
        component (resolve) {
            require(['./views/components/back-top.vue'], resolve);
        }
    },
    '/components/icon': {
        title: '图标 Icon',
        component (resolve) {
            require(['./views/components/icon.vue'], resolve);
        }
    },
    '/components/badge': {
        title: '徽标数 Badge',
        component (resolve) {
            require(['./views/components/badge.vue'], resolve);
        }
    },
    '/components/breadcrumb': {
        title: '面包屑 Breadcrumb',
        component (resolve) {
            require(['./views/components/breadcrumb.vue'], resolve);
        }
    },
    '/components/checkbox': {
        title: '多选框 Checkbox',
        component (resolve) {
            require(['./views/components/checkbox.vue'], resolve);
        }
    },
    '/components/radio': {
        title: '单选框 Radio',
        component (resolve) {
            require(['./views/components/radio.vue'], resolve);
        }
    },
    '/components/circle': {
        title: '进度环 Circle',
        component (resolve) {
            require(['./views/components/circle.vue'], resolve);
        }
    },
    '/components/input-number': {
        title: '数字输入框 InputNumber',
        component (resolve) {
            require(['./views/components/input-number.vue'], resolve);
        }
    },
    '/components/page': {
        title: '分页 Page',
        component (resolve) {
            require(['./views/components/page.vue'], resolve);
        }
    },
    '/components/progress': {
        title: '进度条 Progress',
        component (resolve) {
            require(['./views/components/progress.vue'], resolve);
        }
    },
    '/components/spin': {
        title: '加载中 Spin',
        component (resolve) {
            require(['./views/components/spin.vue'], resolve);
        }
    },
    '/components/steps': {
        title: '步骤条 Steps',
        component (resolve) {
            require(['./views/components/steps.vue'], resolve);
        }
    },
    '/components/switch': {
        title: '开关 Switch',
        component (resolve) {
            require(['./views/components/switch.vue'], resolve);
        }
    },
    '/components/tag': {
        title: '标签 Tag',
        component (resolve) {
            require(['./views/components/tag.vue'], resolve);
        }
    },
    '/components/timeline': {
        title: '时间轴 Timeline',
        component (resolve) {
            require(['./views/components/timeline.vue'], resolve);
        }
    },
    '/components/alert': {
        title: '警告提示 Alert',
        component (resolve) {
            require(['./views/components/alert.vue'], resolve);
        }
    },
    '/components/collapse': {
        title: '折叠面板 Collapse',
        component (resolve) {
            require(['./views/components/collapse.vue'], resolve);
        }
    },
    '/components/card': {
        title: '卡片 Card',
        component (resolve) {
            require(['./views/components/card.vue'], resolve);
        }
    },
    '/components/message': {
        title: '全局提示 Message',
        component (resolve) {
            require(['./views/components/message.vue'], resolve);
        }
    },
    '/components/notice': {
        title: '通知提醒 Notice',
        component (resolve) {
            require(['./views/components/notice.vue'], resolve);
        }
    },
    '/components/loading-bar': {
        title: '加载进度条 LoadingBar',
        component (resolve) {
            require(['./views/components/loading-bar.vue'], resolve);
        }
    },
    '/components/modal': {
        title: '对话框 Modal',
        component (resolve) {
            require(['./views/components/modal.vue'], resolve);
        }
    },
    '/components/select': {
        title: '选择器 Select',
        component (resolve) {
            require(['./views/components/select.vue'], resolve);
        }
    },
    '/components/tooltip': {
        title: '文字提示 Tooltip',
        component (resolve) {
            require(['./views/components/tooltip.vue'], resolve);
        }
    },
    '/components/poptip': {
        title: '气泡提示 Poptip',
        component (resolve) {
            require(['./views/components/poptip.vue'], resolve);
        }
    },
    '/components/color': {
        title: '色彩 Color',
        component (resolve) {
            require(['./views/components/color.vue'], resolve);
        }
    },
    '/components/font': {
        title: '字体 Font',
        component (resolve) {
            require(['./views/components/font.vue'], resolve);
        }
    },
    '/components/input': {
        title: '输入框 Input',
        component (resolve) {
            require(['./views/components/input.vue'], resolve);
        }
    },
    '/components/slider': {
        title: '滑块 Slider',
        component (resolve) {
            require(['./views/components/slider.vue'], resolve);
        }
    },
    '/components/cascader': {
        title: '级联选择 Cascader',
        component (resolve) {
            require(['./views/components/cascader.vue'], resolve);
        }
    },
    '/components/transfer': {
        title: '穿梭框 Transfer',
        component (resolve) {
            require(['./views/components/transfer.vue'], resolve);
        }
    },
    '/components/table': {
        title: '表格 Table',
        component (resolve) {
            require(['./views/components/table.vue'], resolve);
        }
    },
    '/components/dropdown': {
        title: '下拉菜单 Dropdown',
        component (resolve) {
            require(['./views/components/dropdown.vue'], resolve);
        }
    },
    '/components/tabs': {
        title: '标签页 Tabs',
        component (resolve) {
            require(['./views/components/tabs.vue'], resolve);
        }
    },
    '/components/menu': {
        title: '导航菜单 Menu',
        component (resolve) {
            require(['./views/components/menu.vue'], resolve);
        }
    },
    '/components/date-picker': {
        title: '日期选择器 DatePicker',
        component (resolve) {
            require(['./views/components/date-picker.vue'], resolve);
        }
    },
    '/components/time-picker': {
        title: '时间选择器 TimePicker',
        component (resolve) {
            require(['./views/components/time-picker.vue'], resolve);
        }
    },
    '/components/form': {
        title: '表单 Form',
        component (resolve) {
            require(['./views/components/form.vue'], resolve);
        }
    },
    '/components/rate': {
        title: '评分 Rate',
        component (resolve) {
            require(['./views/components/rate.vue'], resolve);
        }
    },
    '/components/carousel': {
        title: '走马灯 Carousel',
        component (resolve) {
            require(['./views/components/carousel.vue'], resolve);
        }
    },
    '/components/upload': {
        title: '上传 Upload',
        component (resolve) {
            require(['./views/components/upload.vue'], resolve);
        }
    },
    '/components/tree': {
        title: '树形控件 Tree',
        component (resolve) {
            require(['./views/components/tree.vue'], resolve);
        }
    },
    '/docs/practice/case': {
        title: '实践案例',
        component (resolve) {
            require(['./views/practice/case.vue'], resolve);
        }
    },
    '/docs/practice/logo': {
        title: 'iView Logo 设计思路',
        component (resolve) {
            require(['./views/practice/logo.vue'], resolve);
        }
    },
    '/test/theme': {
        title: '主题测试',
        component (resolve) {
            require(['./views/practice/logo.vue'], resolve);
        }
    },
    '/live': {
        title: '讲堂',
        component (resolve) {
            require(['./views/live.vue'], resolve);
        }
    },
};
export default routers;