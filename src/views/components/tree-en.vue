<template>
    <i-article>
        <article>
            <h1>Tree</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>When To Use?</p>
            <p>Almost anything can be represented in a tree structure. Examples include directories, organization hierarchies, biological classifications, countries, etc. The Tree component is a way of representing the hierarchical relationship between these things. You can also expand, collapse, and select a treeNode within a Tree.</p>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <Tree :data="baseData" show-checkbox></Tree>
                </div>
                <div slot="desc">
                    <p>The most basic usage, tell you how to use checkable, selectable, disabled, defaultExpandKeys, and etc.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Tree props" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>data</td>
                            <td>An array of nestable node properties that generates tree data.</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>multiple</td>
                            <td>Allows selecting multiple treeNodes.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>show-checkbox</td>
                            <td>Adds a Checkbox before the treeNodes.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Tree events" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Event Name</th>
                            <th>Description</th>
                            <th>Return Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>on-select-change</td>
                            <td>Emitted when the tree node is clicked.</td>
                            <td>The currently selected node array.</td>
                        </tr>
                        <tr>
                            <td>on-check-change</td>
                            <td>Emitted when the checkbox is clicked.</td>
                            <td>An array of nodes is currently checked.</td>
                        </tr>
                        <tr>
                            <td>on-toggle-expand</td>
                            <td>Emitted when when the list is expanded or dropped.</td>
                            <td>An array of current nodes.</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Tree methods" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Method Name</th>
                            <th>Description</th>
                            <th>Arguments</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>getCheckedNodes</td>
                            <td>Gets the checked node.</td>
                            <td>None</td>
                        </tr>
                        <tr>
                            <td>getSelectedNodes</td>
                            <td>Gets the selected node.</td>
                            <td>None</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="children" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>title</td>
                            <td>Title</td>
                            <td>String | Element String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>expand</td>
                            <td>Whether to expand the child node.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>Disables the treeNode</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>disableCheckbox</td>
                            <td>Disables the checkbox of the treeNode.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>selected</td>
                            <td>Whether to select a child node.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>checked</td>
                            <td>Whether to check node (if checked, the child node will check all).</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>children</td>
                            <td>An array of child nodes</td>
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