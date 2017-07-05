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
    <div>
        <i-article>
            <article>
                <h1>Table</h1>
                <Anchor title="Brief Introduction" h2></Anchor>
                <p>Table is used to display a mass of structured data.</p>
                <p>It supports sorting, filtering, paging, custom operation, exporting to csv and many other complex functions.</p>
                <blockquote>Attention：Use <code>i-table</code> if not under template/render mode.</blockquote>
                <Anchor title="Examples" h2></Anchor>
                <Demo title="Basic Usage" vertical hide-code>
                    <div slot="demo">
                        <Table :columns="columns1" :data="data1"></Table>
                    </div>
                    <div slot="desc">
                        <p>The simplest usage.</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.base }}</i-code>
                </Demo>
                <Demo title="Stripe" vertical hide-code>
                    <div slot="demo">
                        <Table stripe :columns="columns1" :data="data1"></Table>
                    </div>
                    <div slot="desc">
                        <p>Set <code>stripe</code> prop to apply stripe style. It's used to differentiate adjacent rows.</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.stripe }}</i-code>
                </Demo>
                <Demo title="Bordered" vertical hide-code>
                    <div slot="demo">
                        <Table border :columns="columns1" :data="data1"></Table>
                    </div>
                    <div slot="desc">
                        <p>Add border to Table.</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.border }}</i-code>
                </Demo>
                <Demo title="Custom Style" vertical hide-code>
                    <div slot="demo">
                        <p>自定义行样式：</p>
                        <Table :row-class-name="rowClassName" :columns="columns1" :data="data1"></Table>
                        <p>自定义列样式：</p>
                        <Table :columns="columns9" :data="data1"></Table>
                        <p>自定义任意单元格样式：</p>
                        <Table :columns="columns1" :data="data8"></Table>
                    </div>
                    <div slot="desc">
                        <p><strong>Row</strong>: Set <code>row-class-name</code> prop with a function to assign a class name to certain rows.</p>
                        <p><strong>Column</strong>: Set <code>className</code> key to columns prop's object to assign a class name to a certain column.</p>
                        <p><strong>Cell</strong>: Set <code>cellClassName</code> key to data prop's object to assign a class name to a certain cell.</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.class }}</i-code>
                </Demo>
                <Demo title="Fixed Header" vertical hide-code>
                    <div slot="demo">
                        <Table height="200" :columns="columns1" :data="data2"></Table>
                    </div>
                    <div slot="desc">
                        <p>Set <code>height</code> prop to fix the height of the header. It'll make the header fixed on the top of Table.</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.height }}</i-code>
                </Demo>
                <Demo title="Fixed Column" vertical hide-code>
                    <div slot="demo">
                        <Table width="550" border :columns="columns2" :data="data3"></Table>
                    </div>
                    <div slot="desc">
                        <p>Set <code>fixed</code> key to <code>left</code> or <code>right</code> in <code>columns</code> prop to fix the column to the left or right.</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.fixed }}</i-code>
                </Demo>
                <Demo title="Fixed Header &amp; Column" vertical hide-code>
                    <div slot="demo">
                        <Table width="550" height="200" border :columns="columns2" :data="data4"></Table>
                    </div>
                    <div slot="desc">
                        <p>You can fix header and certain columns simultaneously by setting both props above.</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.fixedAll }}</i-code>
                </Demo>
                <Demo title="Single Choice" vertical hide-code>
                    <div slot="demo">
                        <Table highlight-row :columns="columns3" :data="data1"></Table>
                    </div>
                    <div slot="desc">
                        <p>Enable row selecting by setting <code>highlight-row</code> prop.</p>
                        <p>When a row is selected, <code>@on-current-change</code> is emitted. The event return two values: <code>currentRow</code>, <code>oldCurrentRow</code> (current selected row data, previous selected row data). You can customize operation by controlling the callback function.</p>
                        <p>Add an object with <code>type: 'index'</code> in <code>columns</code> can apply a index column starts with 1.</p>
                        <p>Set <code>_highlight: true</code> key to data can make the item selected by default.</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.highlight }}</i-code>
                </Demo>
                <Demo title="Multiple Choices" vertical hide-code>
                    <div slot="demo">
                        <Table border :columns="columns4" :data="data1"></Table>
                    </div>
                    <div slot="desc">
                        <p>Add an object with <code>type: 'selection'</code> in <code>columns</code> can apply multi-choices function.</p>
                        <p>Set <code>_checked: true</code> key to data can make the item selected by default.</p>
                        <p>Set <code>_disabled: true</code> key to data can disable the item.</p>
                        <p>You can realise many needed effects by using events below properly:</p>
                        <ul>
                            <li><code>@on-select</code>: Emitted when a row is selected. Return value: <code>selection</code> and <code>row</code>. (selected items array and latest selected item) </li>
                            <li><code>@on-select-all</code>: Emitted when click select-all checkbox. Return value: <code>selection</code> (selected items array) </li>
                            <li><code>@on-selection-change</code>: Emitted when select state is changed. Return value: <code>selection</code> (selected items array) </li>
                        </ul>
                    </div>
                    <i-code lang="html" slot="code">{{ code.selection }}</i-code>
                </Demo>
                <Demo title="Sort" vertical hide-code>
                    <div slot="demo">
                        <Table border :columns="columns5" :data="data5"></Table>
                    </div>
                    <div slot="desc">
                        <p>You can sort the data by setting <code>sortable: true</code> to a certain <code>columns</code> prop's item. </p>
                        <p>The sorting uses ascending order or descending order by default. You can customize sort method by setting <code>sortMethod</code> props with a function accepting 3 arguments: a, b and type.</p>
                        <p>If remote sorting is needed, you can set <code>sortable： 'custom'</code>, and do the remote sorting after <code>@on-sort-change</code> is emitted. After sorting, you have to set the new data manually. Details on API Doc.</p>
                        <p>Attention: Sorting won't affect source data.</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.sort }}</i-code>
                </Demo>
                <Demo title="Filter" vertical hide-code>
                    <div slot="demo">
                        <Table border :columns="columns6" :data="data5"></Table>
                    </div>
                    <div slot="desc">
                        <p>You can filter the data by setting <code>filters</code> to certain <code>columns</code> prop's items. It accepts an array. Details on Demo &amp; API Doc.</p>
                        <p>You must assign a filter function to <code>filterMethod</code> to enable the filter. filterMethod accepts two arguments: value and row. Details on Demo &amp; API Doc.</p>
                        <p>If <code>filterMultiple: false</code> is set, single choice is used. Default is multiple choices.</p>
                        <p>Attention: filter won't affect source data.</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.filter }}</i-code>
                </Demo>
                <Demo title="Custom Column Template" vertical hide-code>
                    <div slot="demo">
                        <Table border :columns="columns7" :data="data6"></Table>
                    </div>
                    <div slot="desc">
                        <p>You can render the column yourself by setting <code>render</code> to certain <code>columns</code> prop's items. It is based on Vue's Render function.</p>
                        <p><code>render</code> accepts two arguments: the first is h, the second is an object including <code>row</code>, <code>column</code> and <code>index</code> (current row's data, current column's data, current index).
                        <blockquote>
                            <p style="color: #f50">Content below only applies to version rc.13 or lower. <span style="font-weight: bold;">It's already abandoned since 2.0.0-rc.18.</span></p>
                            <p>You must set context for the old render function.</p>
                            The essence of <code>render</code> function is to return a string. Table compiles the string inside it. If you've used custom components inside render, you should pay more attention on the context. The rendered component's default context is same to <code>Table</code>'s context. If you want to compile the component in selected instance, you can set <code>context</code> prop to Table to set the context. In this example, we set current route page as the context. 一般情况不需要此配置，但如果你把 <code>Table</code> 作为一个 slot 封装在其它组件里，这时 <code>context</code> 属性就很有用，比如父级是 $parent，根组件 $root。
                        </blockquote>
                    </div>
                    <i-code lang="html" slot="code">{{ code.render }}</i-code>
                </Demo>
                <Demo title="Expandable" vertical hide-code>
                    <div slot="demo">
                        <Table :columns="columns10" :data="data9"></Table>
                    </div>
                    <div slot="desc">
                        <p>You can use it when content is too much to completely displayed at one time.</p>
                        <p>Add an object with <code>type: 'expand'</code> in <code>columns</code> can apply expand function.</p>
                        <p>Set <code>_expanded</code> to true for certain data item can let the row be expanded by default. Set <code>_disableExpand</code> to disable expanding on the row.</p>                        
                        <p>Simular to custom column template, we use render function to render expand area. If the content is complex, you can split it into components or use JSX.</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.expand }}</i-code>
                </Demo>
                <Demo title="Size" vertical hide-code>
                    <div slot="demo">
                        <Table size="large" :columns="columns1" :data="data1"></Table>
                        <br>
                        <Table size="small" :columns="columns1" :data="data1"></Table>
                    </div>
                    <div slot="desc">
                        <p>Set <code>size</code> prop to <code>large</code> or <code>small</code> or <code>default</code> to adjust the size of the table to large or small or default size. Default is medium.</p>
                    </div>
                    <i-code lang="html" slot="code">{{ code.size }}</i-code>
                </Demo>
                <Demo title="Export csv" vertical hide-code>
                    <div slot="demo">
                        <Table :columns="columns8" :data="data7" size="small" ref="table"></Table>
                        <br>
                        <Button type="primary" size="large" @click="exportData(1)"><Icon type="ios-download-outline"></Icon> 导出原始数据</Button>
                        <Button type="primary" size="large" @click="exportData(2)"><Icon type="ios-download-outline"></Icon> 导出排序和过滤后的数据</Button>
                        <Button type="primary" size="large" @click="exportData(3)"><Icon type="ios-download-outline"></Icon> 导出自定义数据</Button>
                    </div>
                    <div slot="desc">
                        <p>You can export the data to <code>.csv</code> document file by calling <code>exportCsv()</code> method. Details on API Doc.</p>
                        <p>Description:</p>
                        <ul>
                            <li>It supports IE9 ~ IE 11, Edge, Chrome, Safari, Firefox.</li>
                            <li>You need to add <code>.csv</code> extension manually after downloading the file.</li>
                            <li>Temporarily, IE9 only supports English data. Chinese will be messy code.</li>
                        </ul>
                    </div>
                    <i-code lang="html" slot="code">{{ code.csv }}</i-code>
                </Demo>
                <Anchor title="Advanced Examples" h2></Anchor>
                <p>Examples above basically cover all the functions of Table. We provides some complex examples on the basis of real business scenarios:</p>
                <Button type="primary" size="large" @click="table1 = true">Complex Table with Paging</Button>
                <Button type="primary" size="large" @click="table2 = true">Table with Multi-cols Filter</Button>
                <Button type="primary" size="large" @click="table3 = true">Table with Many Styles</Button>
                <div class="api">
                    <Anchor title="API" h2></Anchor>
                    <Anchor title="Table props" h3></Anchor>
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
                            <td>Structured data displayed. Key cellClassName is used to set any cell's class name, so your data cannot use the key with such name. For more details, see <strong>Custom Style</strong>.</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>columns</td>
                            <td>Column configuration. Details are mentioned below.</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>stripe</td>
                            <td>Show stripe or not.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>border</td>
                            <td>Show vertical border or not.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>show-header</td>
                            <td>Show header or not.</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>width</td>
                            <td>The width of the table. Unit: px</td>
                            <td>Number | String</td>
                            <td>auto</td>
                        </tr>
                        <tr>
                            <td>height</td>
                            <td>The height of the table. Unit: px / When this prop is set, if the content height is larger then the set value, the header will be fixed at the top.</td>
                            <td>Number | String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabled-hover</td>
                            <td>Disable highlight effect when mouse hovering.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>highlight-row</td>
                            <td>Highlight selected row or not.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>row-class-name</td>
                            <td>
                                Callback function for row's class name. Accept two arguments:
                                <ul>
                                    <li><code>row</code>: current row's data.</li>
                                    <li><code>index</code>: current row's index</li>
                                </ul>
                            </td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>The size of the table. Optional value: <code>large</code>, <code>small</code>, <code>default</code> or leave empty.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td><del>context</del></td>
                            <td><span style="color: #f50; font-weight: bold;">Deprecated</span> Set context for custom component rendered in the cell. For example, if parent component is $parent, root component is $root. When <code>Table</code> is encapsulated in other components as a slot, the prop will be useful. You must set context if you are still using old-styled render function.</td>
                            <td>Object</td>
                            <td>Table's context.</td>
                        </tr>
                        <tr>
                            <td>no-data-text</td>
                            <td>Tip text when data is empty.</td>
                            <td>String</td>
                            <td>No Data</td>
                        </tr>
                        <tr>
                            <td>no-filtered-data-text</td>
                            <td>Tip text when filtered data is empty.</td>
                            <td>String</td>
                            <td>No filter data</td>
                        </tr>
                        </tbody>
                    </table>
                    <Anchor title="Table events" h3></Anchor>
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
                            <td>on-current-change</td>
                            <td>It works when <code>highlight-row</code> is enabled. Emitted when current row is changed.</td>
                            <td>
                                <ul>
                                    <li><code>currentRow</code>: Current highlighted row's data.</li>
                                    <li><code>oldCurrentRow</code>: Last highlighted row's data.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>on-select</td>
                            <td>It works in multi-choices mode. Emitted when a certain row is selected.</td>
                            <td>
                                <ul>
                                    <li><code>selection</code>: Selected rows' data array</li>
                                    <li><code>row</code>: Latest selected row's data.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>on-select-all</td>
                            <td>It works in multi-choices mode. Emitted when clicking select-all checkbox.</td>
                            <td>
                                <ul>
                                    <li><code>selection</code>: selected rows' data array.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>on-selection-change</td>
                            <td>It works in multi-choices mode. Emitted when selected item's state changes.</td>
                            <td>
                                <ul>
                                    <li><code>selection</code>: selected rows' data array.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>on-sort-change</td>
                            <td>It works during sorting. Emitted when clicking sorting button.</td>
                            <td>
                                <ul>
                                    <li><code>column</code>: current column's data.</li>
                                    <li><code>key</code>: sort-by key.</li>
                                    <li><code>order</code>: Sorting order. Value: <code>asc</code>, <code>desc</code></li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>on-row-click</td>
                            <td>Emitted when clicking a certain row.</td>
                            <td>
                                Current row's data.
                            </td>
                        </tr>
                        <tr>
                            <td>on-row-dblclick</td>
                            <td>Emitted when double clicking a certain row.</td>
                            <td>
                                Current row's data.
                            </td>
                        </tr>
                        <tr>
                            <td>on-expand</td>
                            <td>Emitted when expand or fold a certain row.</td>
                            <td>
                                <ul>
                                    <li><code>row</code>: Current row's data.</li>
                                    <li><code>status</code>: Current row's state.</li>
                                </ul>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <Anchor title="Table slot" h3></Anchor>
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>header</td>
                            <td>Table header</td>
                        </tr>
                        <tr>
                            <td>footer</td>
                            <td>Table footer</td>
                        </tr>
                        </tbody>
                    </table>
                    <Anchor title="Table methods" h3></Anchor>
                    <table>
                        <thead>
                        <tr>
                            <th>Method Name</th>
                            <th>Description</th>
                            <th>Parameter</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>exportCsv</td>
                            <td>
                                Export the data as <code>.csv</code> file. Description:
                                <ul>
                                    <li>It supports IE9 ~ IE 11, Edge, Chrome, Safari, Firefox.</li>
                                    <li>You need to add <code>.csv</code> extension manually after downloading the file.</li>
                                    <li>Temporarily, IE9 only supports English data. Chinese will be messy code.</li>
                                </ul>
                            </td>
                            <td>
                                params(Object):
                                <ul>
                                    <li>
                                        <strong>filename</strong>
                                        Filename. Default: table.csv
                                    </li>
                                    <li>
                                        <strong>original</strong>
                                        Exported as original data. Default: true
                                    </li>
                                    <li>
                                        <strong>noHeader</strong>
                                        No header. Default: false
                                    </li>
                                    <li>
                                        <strong>columns</strong>
                                        Customize columns to be exported.
                                    </li>
                                    <li>
                                        <strong>data</strong>
                                        Customize rows to be exported.
                                    </li>
                                </ul>
                                Notice: columns and data should be declared simultaneously. If are declared, only selected data will be exported.
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <Anchor title="column" h3></Anchor>
                    <p>One of the item in columns. It describes the column data.</p>
                    <table>
                        <thead>
                        <tr>
                            <th>Property</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Return Value</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>title</td>
                            <td>Column title.</td>
                            <td>String</td>
                            <td>#</td>
                        </tr>
                        <tr>
                            <td>key</td>
                            <td>Data key.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>width</td>
                            <td>Column width.</td>
                            <td>Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>align</td>
                            <td>Alignment way. Optional value: <code>left</code>, <code>right</code> or <code>center</code>.</td>
                            <td>String</td>
                            <td>left</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>Column's class name.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>fixed</td>
                            <td>Fix the column at the left / right or not. Optional value: <code>left</code> or <code>right</code></td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>ellipsis</td>
                            <td>If this prop is set, line wrap will be disabled. The overflowing content will be displayed as ellipsis.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>render</td>
                            <!--<td>自定义渲染列，传入三个参数 row、column 和 index，分别指当前行数据，当前列数据，当前行索引，详见示例</td>-->
                            <td>Custom column renderer. It uses Vue's render function. It accepts two arguments:  the first is h, the second is an object including <code>row</code>, <code>column</code> and <code>index</code> (current row's data, current column's data, current index). Details on the demo above. <span style="color: #f50; font-weight: bold;">We have stopped supporting old-styled render function since rc.18. It's already abandoned.</span></td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>renderHeader</td>
                            <td>Custom column header renderer. It accepts two arguments: <code>column</code> and <code>index</code> (current col's data &amp; current index). It doesn't support custom component rendering.</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>sortable</td>
                            <td>The column is sortable or not. If set to<code>custom</code>, it means user wants a remote sorting. So you shall listen on-sort-change event on Table.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>sortMethod</td>
                            <td>Custom sort function. It accepts 3 arguments: a, b , type. It works when <code>sortable: true</code> is set. The value of type argument can be asc or desc.</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>filters</td>
                            <td>Options for filter. It accepts an array. Each item of the array contains <code>label</code> and <code>value</code> props. You should config filterMethod simultaneously to enable filter.</td>
                            <td>Array</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>filterMethod</td>
                            <td>The way to use filter options. If it is a multi-choices filter, for each piece of data, the filter will be executed more than once. The data will be displayed as long as one true value is returned.</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>filterMultiple</td>
                            <td>Enable multiple filters or not.</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>filteredValue</td>
                            <td>Enable filtering during initialization. It accepts an array of the values need to be filtered.</td>
                            <td>Array</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>filterRemote</td>
                            <td>Enable remote flitering.</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </article>
        </i-article>
        <Modal v-model="table1" title="Complex Table with Paging" width="1000" :styles="{top: '20px'}">
            <div v-if="table1">
                <div class="ivu-article">
                    <blockquote>
                        <p>The table comes from TalkingData's <a href="https://www.talkingdata.com/product-MarketingCloud.jsp" target="_blank">MarketingCloud</a> product. It shows the list of the crowd portrait. The data is fake. The paging effect is simulated in the front end, not got from the server side.</p>
                    </blockquote>
                </div>
                <Table :data="tableData1" :columns="tableColumns1" stripe></Table>
                <div style="margin: 10px;overflow: hidden">
                    <div style="float: right;">
                        <Page :total="100" :current="1" @on-change="changePage"></Page>
                    </div>
                </div>
                <i-code lang="html" bg>{{ code.table1 }}</i-code>
            </div>
        </Modal>
        <Modal v-model="table2" title="Table with Multi-cols Filter" width="1000" :styles="{top: '20px'}">
            <div v-if="table2">
                <div class="ivu-article">
                    <blockquote>
                        <p>The table comes from TalkingData's <a href="https://www.talkingdata.com/product-AdTracking.jsp">Ad Tracking</a> product. It shows different metrics of different kinds of promotion activities. The data is fake.</p>
                        <p>The demo mainly shows fixed columns, custom column count and sorting.</p>
                    </blockquote>
                </div>
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
                <br>
                <i-code lang="html" bg>{{ code.table2 }}</i-code>
            </div>
        </Modal>
        <Modal v-model="table3" title="Table with Many Styles" width="1000" :styles="{top: '20px'}">
            <div v-if="table3">
                <div class="ivu-article">
                    <blockquote>
                        <p>The demo shows many different styles on Table.</p>
                    </blockquote>
                </div>
                <div style="margin: 10px">
                    Display border <i-switch v-model="showBorder" style="margin-right: 5px"></i-switch>
                    Display stripe <i-switch v-model="showStripe" style="margin-right: 5px"></i-switch>
                    Display index <i-switch v-model="showIndex" style="margin-right: 5px"></i-switch>
                    Display multi choice <i-switch v-model="showCheckbox" style="margin-right: 5px"></i-switch>
                    Display header <i-switch v-model="showHeader" style="margin-right: 5px"></i-switch>
                    Table scrolling <i-switch v-model="fixedHeader" style="margin-right: 5px"></i-switch>
                    <br>
                    <br>
                    Table size
                    <Radio-group v-model="tableSize" type="button">
                        <Radio label="large">large</Radio>
                        <Radio label="default">medium(default)</Radio>
                        <Radio label="small">small</Radio>
                    </Radio-group>
                </div>
                <Table :border="showBorder" :stripe="showStripe" :show-header="showHeader" :height="fixedHeader ? 250 : ''" :size="tableSize" :data="tableData3" :columns="tableColumns3"></Table>
                <br>
                <i-code lang="html" bg>{{ code.table3 }}</i-code>
            </div>
        </Modal>
    </div>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import Code from '../../code/table';
    import Anchor from '../../components/anchor.vue';

    import expandRow from './table-expand.vue';
    import studyRender from '../../components/study.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            Anchor,
            expandRow,
            studyRender
        },
        data () {
            return {
                code: Code,
                table1: false,
                table2: false,
                table3: false,
                tableData1: this.mockTableData1(),
                tableData2: this.mockTableData2(),
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
                ],
                tableColumns2: [],
                tableColumnsChecked: ['show', 'weak', 'signin', 'click', 'active', 'day7', 'day30', 'tomorrow', 'day', 'week', 'month'],
                showBorder: false,
                showStripe: false,
                showHeader: true,
                showIndex: true,
                showCheckbox: false,
                fixedHeader: false,
                tableSize: 'default',
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
                columns10: [
                    {
                        type: 'expand',
                        width: 50,
                        render: (h, params) => {
                            return h(expandRow, {
                                props: {
                                    row: params.row
                                }
                            })
                        }
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
                ],
                data9: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居',
                        job: '数据工程师',
                        interest: '羽毛球',
                        birthday: '1991-05-14',
                        book: '乔布斯传',
                        movie: '致命魔术',
                        music: 'I Cry'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗',
                        job: '数据科学家',
                        interest: '排球',
                        birthday: '1989-03-18',
                        book: '我的奋斗',
                        movie: '罗马假日',
                        music: 'My Heart Will Go On'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道',
                        job: '数据产品经理',
                        interest: '网球',
                        birthday: '1992-01-31',
                        book: '赢',
                        movie: '乔布斯',
                        music: 'Don’t Cry'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道',
                        job: '数据分析师',
                        interest: '桌球，跑步',
                        birthday: '1988-7-25',
                        book: '红楼梦',
                        movie: '倩女幽魂',
                        music: '演员'
                    }
                ]
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
        },
        methods: {
            rowClassName (row, index) {
                if (index === 1) {
                    return 'demo-table-info-row';
                } else if (index === 3) {
                    return 'demo-table-error-row';
                }
                return '';
            },
            show (index) {
                this.$Modal.info({
                    title: '用户信息',
                    content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            },
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
                this.tableData1 = this.mockTableData1();
            },
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
            },
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
        },
        mounted () {
            this.changeTableColumns();
        }
    }
</script>