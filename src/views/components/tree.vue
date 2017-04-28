<template>
    <i-article>
        <article>
            <h1>Tree 树形控件</h1>
            <Anchor title="概述" h2></Anchor>
            <p>文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <Tree :data="baseData" show-checkbox></Tree>
                </div>
                <div slot="desc">
                    <p>最简单的用法，展示可勾选，可选中，禁用，默认展开等功能。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Tree props" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>data</td>
                            <td>可嵌套的节点属性的数组，生成 tree 的数据</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>multiple</td>
                            <td>是否支持多选</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>show-checkbox</td>
                            <td>是否显示多选框</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Tree events" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>事件名</th>
                            <th>说明</th>
                            <th>返回值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>on-select-change</td>
                            <td>点击树节点时触发</td>
                            <td>当前已选中的节点数组</td>
                        </tr>
                        <tr>
                            <td>on-check-change</td>
                            <td>点击复选框时触发</td>
                            <td>当前已勾选节点的数组</td>
                        </tr>
                        <tr>
                            <td>on-toggle-expand</td>
                            <td>展开和收起子列表时触发</td>
                            <td>当前节点的数组</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Tree methods" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>方法名</th>
                            <th>说明</th>
                            <th>参数</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>getCheckedNodes</td>
                            <td>获取被勾选的节点</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>getSelectedNodes</td>
                            <td>获取被选中的节点</td>
                            <td>无</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="children" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>title</td>
                            <td>标题</td>
                            <td>String | Element String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>expand</td>
                            <td>是否展开直子节点</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>禁掉响应</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>disableCheckbox</td>
                            <td>禁掉 checkbox</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>selected</td>
                            <td>是否选中子节点</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>checked</td>
                            <td>是否勾选(如果勾选，子节点也会全部勾选)</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>children</td>
                            <td>子节点属性数组</td>
                            <td>Array</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import Code from '../../code/tree';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            Anchor
        },
        data () {
            return {
                code: Code,
                baseData: [{
                    expand: true,
                    title: 'parent 1',
                    children: [{
                        title: 'parent 1-0',
                        expand: true,
                        disabled: true,
                        children: [{
                            title: 'leaf',
                            disableCheckbox: true
                        }, {
                            title: 'leaf',
                        }]
                    }, {
                        title: 'parent 1-1',
                        expand: true,
                        checked: true,
                        children: [{
                            title: '<span style="color: red">leaf</span>',
                        }]
                    }]
                }]
            }
        },
        methods: {

        }
    };
</script>