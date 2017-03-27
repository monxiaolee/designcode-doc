<style>
    .doc-update .ivu-timeline .ivu-timeline-item-content{
        top: -14px;
    }
    .doc-update h2{
        margin: 0;
        font-weight: normal;
    }
    .doc-update code{
        margin: 8px 0 10px;
    }
    .doc-update ul{
        padding-left: 22px !important;
    }
    .doc-update-important{
        color: #3399ff;
    }
    .doc-update-loop.ivu-load-loop{
        animation-duration: 3s;
    }
</style>
<template>
    <i-article>
        <h1>更新日志</h1>
        <article class="doc-update">
            <Timeline pending>
                <Timeline-item>
                    <Anchor title="2.0.0-rc.7" h2></Anchor>
                    <p>
                        <code>2017-03-27</code>
                    </p>
                    <ul>
                        <li>重构 <code>Tree</code> 组件。<issue id="468"></issue></li>
                        <li>修复 <code>Cascader</code> 数据置为空时，视图并没有更新的bug。<issue id="488"></issue></li>
                        <li>修复 <code>Form</code> 无法对 <code>Date</code> 类型的组件及时验证的bug。<issue id="494"></issue></li>
                        <li>优化 <code>Radio</code> 组合使用时，无法识别 label 为 0 的情况。<issue id="425"></issue></li>
                        <li><code>Tabs</code> 新增附加内容 slot <code>extra</code>。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.0.0-rc.6" h2></Anchor>
                    <p>
                        <code>2017-03-22</code>
                    </p>
                    <ul>
                        <li>Table 的上下文 prop：content 更名为 <code>context</code>。</li>
                        <li>修复 Table 在生产环境时，自定义单元格渲染上下文失效的bug。<issue id="454"></issue></li>
                        <li>iCol 增加名称 <code>Col</code>。</li>
                        <li>iForm 增加名称 <code>Form</code>。</li>
                        <li>修复 Input 使用 number 模式时，不能正确返回数字类型的bug。</li>
                        <li>Card 增加内部间距 prop：padding。<mention id="muei"></mention></li>
                        <li>Tag 增加 prop：name。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.0.0-rc.5" h2></Anchor>
                    <p>
                        <code>2017-03-15</code>
                    </p>
                    <ul>
                        <li>Table 的 自定义单元格支持 data、methods。</li>
                        <li>修复 Table 内通过点击操作删除一行数据时，报错的问题。</li>
                        <li>Button 增加自定义事件 @click，可以不用通过 @click.native 来使用了。</li>
                        <li>修复 Modal 不能自定义 header 的 bug。<issue id="407" /></li>
                        <li>优化 RadioGroup、CheckboxGroup、Menu，可以与其它组件进行嵌套使用。</li>
                        <li>修复 Transfer 在没有使用 slot 时报错的 bug。</li>
                        <li>优化 Form 在验证带有搜索功能的 Transfer 组件时，搜索框样式显示错误的问题。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.0.0-rc.4" h2></Anchor>
                    <p>
                        <code>2017-03-14</code>
                    </p>
                    <ul>
                        <li>修复警告。</li>
                        <li>修复 Table 筛选下拉菜单不关闭的 bug。</li>
                        <li>修复含有 Input 的组件在 Form 内使用时，on-form-change 事件触发错误的逻辑。</li>
                        <li>优化 Select 广播事件重复的问题。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.0.0-rc.3" h2></Anchor>
                    <p>
                        <code>2017-03-13</code>
                    </p>
                    <ul>
                        <li>修复部分组件在非 template 内书写时不被识别的问题。部分组件新增别名，并兼任1.0版别名。
                            详见 <a href="https://github.com/iview/iview/blob/2.0/src/index.js#L49" target="_blank">https://github.com/iview/iview/blob/2.0/src/index.js#L49</a></li>
                    </ul>
                </Timeline-item>
                <Timeline-item color="green">
                    <Icon type="trophy" size="18" slot="dot"></Icon>
                    <Anchor title="2.0.0-rc.2" h2></Anchor>
                    <p>
                        <code>2017-03-10</code>
                    </p>
                    <ul>
                        <li>Button 支持组件名 <code>Button</code>，兼容 <code>iButton</code>。</li>
                        <li>Input 支持组件名 <code>Input</code>，兼容 <code>iInput</code>，支持 v-model。</li>
                        <li>RadioGroup 支持 v-model。</li>
                        <li>Radio value 改为了 label，使用 v-model，废弃 checked。</li>
                        <li>Checkbox 支持 v-model。</li>
                        <li>CheckboxGroup value 改为了 label，使用 v-model，废弃 checked。</li>
                        <li>Switch 更名为 <code>iSwitch</code>，废弃checked， 改为了 value，使用 v-model。</li>
                        <li>Badge class 改为了 className。</li>
                        <li>InputNumber 使用 v-model。</li>
                        <li>Progress 支持组件名 <code>iProgress</code>，兼容 <code>Progress</code>，新增 on-status-change 事件。</li>
                        <li>Upload 父级不能通过 computed 获取 Upload 的 fileList 了。</li>
                        <li>Collapse 废弃 activeKey，使用 v-model，key 更名为 name。</li>
                        <li>Carousel 废弃 activeIndex，使用 v-model。</li>
                        <li>Circle 更名为 <code>iCircle</code>。</li>
                        <li>Tabs 废弃 activeKey，改用 value，使用 v-model，key 更名为 name。</li>
                        <li>DropdownItem key 改为 name, Dropdown 的 visible 要使用 @on-visible-change 捕获，不再 sync</li>
                        <li>Menu 支持组件名 <code>iMenu</code>，兼容 <code>Menu</code>，MenuItem 和 Submenu 的 key 改为了 name，Menu 的 activeKey 改为 activeName,openKeys 改为 openNames。</li>
                        <li>Select 支持组件名 <code>Select</code>，兼容 <code>iSelect</code>，model 改为 value，支持 v-model。</li>
                        <li>Page class 改为 className。</li>
                        <li>DatePicker 使用 v-model。</li>
                        <li>Modal visible 改为 value，使用 v-model，style 改为 styles。</li>
                        <li>Table 支持组件名 <code>Table</code>，兼容 <code>iTable</code>。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Button type="ghost" size="large" @click="handleBefore">查看 1.x 版本的日志</Button>
                </Timeline-item>
            </Timeline>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Code from '../../code/guide';
    import Anchor from '../../components/anchor.vue';
    import issue from '../../components/issue.vue';
    import mention from '../../components/mention.vue';

    import version from '../../config/config';

    export default {
        components: {
            iArticle,
            iCode,
            Anchor,
            issue,
            mention
        },
        data () {
            return {
                code: Code
            }
        },
        mounted () {
            window.localStorage.setItem('version', version.version);
        },
        methods: {
            handleBefore () {
                window.open('http://v1.iviewui.com/docs/guide/update');
            }
        }
    }
</script>