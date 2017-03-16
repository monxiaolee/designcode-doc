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
            <Timeline>
                <Timeline-item>
                    <Anchor title="1.0.1" h2></Anchor>
                    <p>
                        <code>2017-02-28</code>
                    </p>
                    <ul>
                        <li>增加 iView Cli 页面。<a v-link="{path: '/cli'}">查看</a></li>
                        <li>Modal 组件：</li>
                        <ul>
                            <li>调整遮罩层 .ivu-modal-mask 的位置，以修复其遮挡滚动条的 bug，<span style="color: #f50;">不再支持在 Modal 组件上直接使用 class 属性</span>，需使用 props <code>class-name</code>。<a href="https://github.com/iview/iview/commit/09bce8de8399cb19fd8dc625851a6d5d61fb898e" target="_blank">commit</a></li>
                            <li>修复在 Chrome 55版本下，内容过长滚动时遮罩层显示的bug。<a href="https://github.com/iview/iview/commit/09bce8de8399cb19fd8dc625851a6d5d61fb898e" target="_blank">commit</a></li>
                            <li>通过 $Modal 创建的模态也支持属性 <code>scrollable</code>。<a href="https://github.com/iview/iview/issues/293" target="_blank">#293</a> <a href="https://github.com/rijn" target="_blank">@rijn</a></li>
                        </ul>
                        <li>Table 在多选模式下，支持设置 data 项的特殊 key <code>_disabled</code> 来禁止选择当前项。<a href="https://github.com/iview/iview/pull/286" target="_blank">commit</a> <a href="https://github.com/iview/iview/issues/265" target="_blank">#265</a> <a href="https://github.com/GITleonine1989" target="_blank">@GITleonine1989</a></li>
                        <li>修复 InputNumber 无法直接输入 0 的bug。<a href="https://github.com/iview/iview/commit/f78d6ab89391d7ee1be82761e494faa7d363c6b5" target="_blank">commit</a> <a href="https://github.com/rijn" target="_blank">@rijn</a></li>
                        <li>Slider 新增显示选项 <code>showTip</code>。<a href="https://github.com/iview/iview/issues/295" target="_blank">#295</a> <a href="https://github.com/rijn" target="_blank">@rijn</a></li>
                        <li>Tooltip 新增显示选项 <code>always</code>。<a href="https://github.com/rijn" target="_blank">@rijn</a></li>
                    </ul>
                </Timeline-item>
                <Timeline-item color="green">
                    <Icon type="trophy" size="18" slot="dot"></Icon>
                    <Anchor title="1.0.0" h2></Anchor>
                    <p>
                        <code>2017-02-20</code>
                    </p>
                    <ul>
                        <li>新增树形控件组件 <a v-link="{path: '/components/tree'}">Tree</a>。</li>
                        <li>新增常用布局示例 <a v-link="{path: '/docs/guide/layout'}">Layout</a>。</li>
                        <li>新增定制主题。<a v-link="{path: '/docs/guide/theme'}">查看</a></li>
                        <li>文档全新改版。</li>
                        <li>Form 组件：</li>
                        <ul>
                            <li>FormItem 新增 slot <code>label</code>。</li>
                            <li>修复 FormItem 部分情况无法对 Switch、Input 等表单重置的bug。<a href="https://github.com/iview/iview/commit/38646a11711eebb4837bb8a5b37c585efd020b35" target="_blank">commit</a></li>
                        </ul>
                        <li>Select 组件：</li>
                        <ul>
                            <li>修复在单选、可搜索模式下，主动赋值无法及时更新视图的bug。<a href="https://github.com/iview/iview/issues/251" target="_blank">#251</a> <a href="https://github.com/iview/iview/commit/8f48491aa6efbea3c4a60794c0260a9782048a2f" target="_blank">commit</a> <a href="https://github.com/YikaJ" target="_blank">@YikaJ</a></li>
                            <li>修复在单选、可搜索模式下，动态更新 Option 时，无法及时更新视图的bug。<a href="https://github.com/iview/iview/commit/8f48491aa6efbea3c4a60794c0260a9782048a2f" target="_blank">commit</a> <a href="https://github.com/YikaJ" target="_blank">@YikaJ</a></li>
                        </ul>
                        <li>Table 在单选或多选模式下，支持设置 data 项的特殊 key <code>_highlight</code> 和 <code>_checked</code> 来默认选中当前项。<a href="https://github.com/iview/iview/commit/c13e7cea814d5496357a4cff456edf1f77f99bda" target="_blank">commit</a> <a href="https://github.com/iview/iview/issues/265" target="_blank">#265</a></li>
                        <li>Checkbox 新增半选状态属性 <code>indeterminate</code>。</li>
                        <li>Modal 新增是否可滚动属性 <code>scrollable</code>。<a href="https://github.com/iview/iview/issues/241" target="_blank">#241</a> <a href="https://github.com/rijn" target="_blank">@rijn</a></li>
                        <li>优化 Notice 关闭时的动画。<a href="https://github.com/iview/iview/issues/30" target="_blank">#30</a> <a href="https://github.com/rijn" target="_blank">@rijn</a></li>
                        <li>修复 Carousel 在 IE 下的一个bug。<a href="https://github.com/iview/iview/issues/269" target="_blank">#269</a> <a href="https://github.com/rijn" target="_blank">@rijn</a></li>
                        <li>修复 Transfer 的 render-format 不能渲染 HTML 元素的bug。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="0.9.17" h2>
                        <span class="doc-update-important">Happy New Year!</span>
                    </Anchor>
                    <p>
                        <code>2017-01-23</code>
                    </p>
                    <ul>
                        <li>新增上传组件 <a v-link="{path: '/components/upload'}">Upload</a>。</li>
                        <li>新增走马灯组件 <a v-link="{path: '/components/carousel'}">Crousel</a>。<a href="https://github.com/rijn" target="_blank">@rijn</a></li>
                        <li>Form 支持对 Upload 组件的验证。</li>
                        <li>Tag 不再自动关闭，需结合 @on-close 来手动控制。<a
                                href="https://github.com/iview/iview/commit/e0f238f957f2d734f8619a14a1f223dcd252421d" target="_blank">commit</a></li>
                        <li>修复 Menu 从外部改变 activeKey 时，MenuItem 不更新的 bug。<a href="https://github.com/iview/iview/issues/230" target="_blank">#230</a></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="0.9.16" h2></Anchor>
                    <p>
                        <code>2017-01-17</code>
                    </p>
                    <ul>
                        <li>新增评分组件 <a v-link="{path: '/components/rate'}">Rate</a>。</li>
                        <li>Form 支持对 Rate 组件的验证。</li>
                        <li>Cascader 支持单独使用，不局限于输入框。<a
                                href="https://github.com/iview/iview/commit/75e5c6a51ea070a2c9d40ddae18267f48c409be9" target="_blank">commit</a></li>
                        <li>Poptip <code>trigger = 'focus'</code> 时，优化对输入框的处理。</li>
                        <li>Alert 新增 banner 属性，用于顶部公告样式。</li>
                        <li>Select 组件：</li>
                        <ul>
                            <li>修复在单选可搜索模式下，Option 没有设置 label，主动设置 value 初始化时，label 显示错误的bug。<a href="https://github.com/iview/iview/issues/211" target="_blank">#211</a></li>
                            <li>修复在搜索模式下，输入一些特定符号报错的问题。<a href="https://github.com/iview/iview/issues/215" target="_blank">#215</a></li>
                        </ul>
                        <li>Table 自定义排序可判断是升序还是降序。<a href="https://github.com/iview/iview/issues/174" target="_blank">#174</a></li>
                        <li>TabPane 新增 closable 属性，可单独对某一项设置是否可关闭。<a href="https://github.com/iview/iview/issues/206" target="_blank">#206</a></li>
                        <li>Form 新增 show-message 属性，可以设置是否显示错误提示。</li>
                        <li>修复 DatePicker、Select 在 Table 内使用时，浮层显示不正常的bug。<a href="https://github.com/iview/iview/issues/205" target="_blank">#205</a> <a
                                href="https://github.com/iview/iview/commit/b89a982e64ecc6a7018b0c879118c8df44d9a888" target="_blank">commit</a></li>
                        <li>修复 Menu 在横向模式下，css 为 fixed 固定时，二级菜单浮层显示的bug。<a href="https://github.com/iview/iview/issues/212" target="_blank">#212</a></li>
                        <li>优化 InputNumber 在输入一个值后，按下键盘的上键或下键时的逻辑。</li>
                        <li>优化 Poptip 在 Table 内的样式。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="0.9.15" h2></Anchor>
                    <p>
                        <code>2017-01-16</code>
                    </p>
                    <ul>
                        <li>Dropdown 新增 custom 和 visible 属性，可以自定义控制展示逻辑。</li>
                        <li>Input 在 Form 验证时的触发方式 <strong>change</strong> 的触发时机修改为实时。<a
                                href="https://github.com/iview/iview/commit/8bca10707b9f9497e34688f5ac02440c46b2387b" target="_blank">commit</a></li>
                        <li>Select 组件：</li>
                        <ul>
                            <li>修复在有分组可搜索模式下，分组内无匹配项时分组标题仍然显示的bug。<a href="https://github.com/iview/iview/issues/186" target="_blank">#186</a></li>
                            <li>修复在 Table 内使用时的显示bug。<a href="https://github.com/iview/iview/issues/192" target="_blank">#192</a></li>
                            <li>修复在 Modal 中使用，不设置 Select 宽度时展开列表宽度错误的bug。<a href="https://github.com/iview/iview/issues/196" target="_blank">#196</a></li>
                            <li>优化在多选可搜索模式下的体验。<a href="https://github.com/iview/iview/issues/182" target="_blank">#182</a></li>
                        </ul>
                        <li>Table 组件：</li>
                        <ul>
                            <li>修复设置高度后，无数据时不显示提示的bug。<a href="https://github.com/iview/iview/issues/194" target="_blank">#194</a> <a href="https://github.com/rijn" target="_blank">@rijn</a></li>
                            <li>修复设置高度后，表格实际高度小于设置高度时，宽度计算错误的bug。<a href="https://github.com/iview/iview/issues/193" target="_blank">#193</a></li>
                            <li>修复设置高度后，有固定列，且不可左右滚动时，固定列高度计算错误的bug。</li>
                        </ul>
                        <li>修复 DatePicker 在 type = 'datetime' 时，在选择时间状态关闭浮层，再次打开选择按钮文案显示错误的bug。<a href="https://github.com/iview/iview/issues/201" target="_blank">#201</a></li>
                        <li>优化 Modal 关闭时的效果。<a href="https://github.com/iview/iview/issues/197" target="_blank">#197</a></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="0.9.14" h2></Anchor>
                    <p>
                        <code>2017-01-12</code>
                    </p>
                    <ul>
                        <li>支持国际化。<a v-link="{path: '/docs/guide/i18n'}">查看</a></li>
                        <li>Table 组件：</li>
                        <ul>
                            <li>columns 新增列的 className。</li>
                            <li>data 属性可以通过设置 cellClassName 字段来自定义任意单元格的样式名称。</li>
                        </ul>
                        <li>修复 Cascader 组件在 change-on-select 模式下，主动修改 value 后，无法立即重新渲染的bug。<a href="https://github.com/iview/iview/issues/183" target="_blank">#183</a></li>
                        <li>修复 Tabs 组件在禁用动画模式下，主动修改 active-key 后，内容不更新的bug。<a href="https://github.com/iview/iview/issues/185" target="_blank">#185</a></li>
                        <li>修复 Dropdown 在 Table 内使用时的显示bug。<a href="https://github.com/iview/iview/issues/188" target="_blank">#188</a></li>
                        <li>优化 Select 在搜索模式下，失焦时的表现。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="0.9.13" h2>
                        <span class="doc-update-important">Hello 2017!</span>
                    </Anchor>
                    <p>
                        <code>2017-01-06</code>
                    </p>
                    <ul>
                        <li>新增表单组件 <a v-link="{path: '/components/form'}">Form</a>。</li>
                        <li>表单类组件（Input、Radio、Checkbox、Switch、Select、Slider、DatePicker、TimePicker、Cascader、Transfer、InputNumber）支持与 Form 组件进行数据验证。</li>
                        <li>Table 组件：</li>
                        <ul>
                            <li>columns 新增 ellipsis 选项，用于设置文本不换行，显示省略号。<a href="https://github.com/iview/iview/issues/118" target="_blank">#118</a></li>
                            <li>新增 @on-row-click 和 @on-row-dblclick 事件。<a href="https://github.com/iview/iview/issues/140" target="_blank">#140</a></li>
                            <li>新增数据为空的两个 props: no-data-text 和 no-filtered-data-text。<a href="https://github.com/iview/iview/issues/151" target="_blank">#151</a> <a href="https://github.com/rijn" target="_blank">@rijn</a></li>
                            <li>修复在有滚动条的浏览器下，表头和表格错位的bug。<a href="https://github.com/iview/iview/issues/167" target="_blank">#167</a></li>
                        </ul>
                        <li>Radio 组件：</li>
                        <ul>
                            <li>RadioGroup 新增垂直选项 vertical。</li>
                            <li>修复 RadioGroup 内的 Radio 动态使用时，无法识别为 group 的bug。</li>
                            <li>Radio 单用时，增加事件 @on-change。</li>
                        </ul>
                        <li>Input 组件：</li>
                        <ul>
                            <li>增加 number prop，用于将输入转换为 Number 类型。</li>
                            <li>与 Form 组件联合使用时，增加正在验证中的状态。</li>
                        </ul>
                        <li>Slider 新增事件 @on-input。</li>
                        <li>修复无法动态添加 Tab-pane 的bug。<a href="https://github.com/iview/iview/issues/155" target="_blank">#155</a></li>
                        <li>修复 Select 在单选搜索模式下，如果设置了 model，初始化时不显示 label 的bug。<a href="https://github.com/iview/iview/issues/159" target="_blank">#159</a></li>
                        <li>优化 TimePicker 在 windows 下滚动条常驻的问题。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="0.9.12" h2>
                        <span class="doc-update-important">Bye 2016!</span>
                    </Anchor>
                    <p>
                        <code>2016-12-30</code>
                    </p>
                    <ul>
                        <li>新增时间选择组件 <a v-link="{path: '/components/time-picker'}">TimePicker</a>。</li>
                        <li>DatePicker 组件：</li>
                        <ul>
                            <li>新增带有时间选择的两种新类型：datetime 和 datetimerange。</li>
                            <li>修复在没有设置 options 时，修改输入框日期报错的bug。</li>
                            <li>优化 type = daterange 时，@on-change 返回一个数组。</li>
                        </ul>
                        <li>Layout 组件：</li>
                        <ul>
                            <li>修复子元素等宽排列（space-between）的bug。</li>
                            <li>修复 i-col span 为 0 时，显示为 display:block 的bug。<a href="https://github.com/iview/iview/issues/153" target="_blank">#153</a></li>
                        </ul>
                        <li>BackTop 增加过渡动画，并增加持续时间 props。</li>
                        <li>修复 CheckboxGroup 内的 Checkbox 动态使用时，无法识别为 group 的bug。</li>
                        <li>修复 Table 当 data 数量为空时，表头的 Checkbox 默认为选中状态的bug。<a href="https://github.com/iview/iview/issues/142" target="_blank">#142</a></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Icon type="ios-snowy" size="32" slot="dot" color="#dc3233" class="ivu-load-loop doc-update-loop"></Icon>
                    <Anchor title="0.9.11" h2>
                        <span class="doc-update-important">Merry Christmas</span>
                    </Anchor>
                    <p>
                        <code>2016-12-24</code>
                    </p>
                    <ul>
                        <li>新增日期选择组件 <a v-link="{path: '/components/date-picker'}">DatePicker</a>。</li>
                        <li>Input 组件：</li>
                        <ul>
                            <li><strong>value</strong> 不再强制双向绑定。</li>
                            <li>调整 <strong>@on-change</strong> 事件触发时机，使用 input 原生的 change 事件时机。</li>
                            <li><strong>@on-change</strong> 事件不再直接返回 value，而是返回 event。</li>
                            <li>修复前置/后置 slot 仅对 text 类型支持的bug。<a href="https://github.com/iview/iview/issues/123" target="_blank">#123</a></li>
                        </ul>
                        <li>Table 组件：</li>
                        <ul>
                            <li>修复使用自定义排序，改变 data 后，又执行一遍排序的bug。</li>
                            <li>修复表格将具有定位的元素剪裁的bug。<a href="https://github.com/iview/iview/issues/121" target="_blank">#121</a></li>
                        </ul>
                        <li>Page 组件：</li>
                        <ul>
                            <li>新增 class 和 style 参数。<a href="https://github.com/iview/iview/issues/134" target="_blank">#134</a></li>
                            <li>切换每页条数时，触发自定义事件 on-page-size-change。<a href="https://github.com/iview/iview/issues/136" target="_blank">#136</a></li>
                        </ul>
                        <li>Menu 组件：</li>
                        <ul>
                            <li>修复在水平模式下，子菜单宽度有滚动条的bug。<a href="https://github.com/iview/iview/issues/131" target="_blank">#131</a></li>
                            <li>在水平模式下，子菜单高度修改为自适应。</li>
                        </ul>
                        <li>Dropdown 组件：</li>
                        <ul>
                            <li>修复列表过多时高度显示的问题。<a href="https://github.com/iview/iview/issues/138" target="_blank">#138</a></li>
                            <li>增加显示状态改变时的事件 @on-visible-change。</li>
                        </ul>
                        <li>修复 Cascader 组件主动修改 value 后，无法立即重新渲染的bug。<a href="https://github.com/iview/iview/issues/130" target="_blank">#130</a></li>
                        <li>修复 CheckboxGroup 组件修改 model 后，选项状态无法立即改变的bug。</li>
                        <li>修复 LoadingBar 组件多次触发 start 方法的显示bug。<a href="https://github.com/iview/iview/issues/133" target="_blank">#133</a></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="0.9.10" h2></Anchor>
                    <p>
                        <code>2016-12-09</code>
                    </p>
                    <ul>
                        <li>新增下拉菜单组件 <a v-link="{path: '/components/dropdown'}">Dropdown</a>。</li>
                        <li>新增导航菜单组件 <a v-link="{path: '/components/menu'}">Menu</a>。</li>
                        <li>新增标签页组件 <a v-link="{path: '/components/tabs'}">Tabs</a>。</li>
                        <li>iTable 支持将数据导出为 .csv 文件。</li>
                        <li>Layout 栅格支持响应式。</li>
                        <li>iSelect 增加清空搜索词的方法。<a href="https://github.com/iview/iview/issues/116" target="_blank">#116</a></li>
                        <li>优化 iTable 样式。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="0.9.9" h2></Anchor>
                    <p>
                        <code>2016-12-02</code>
                    </p>
                    <ul>
                        <li>新增表格组件 <a v-link="{path: '/components/table'}">Table</a>。</li>
                        <li><code>ButtonGroup</code> 增加垂直排列属性 <code>vertical</code>，感谢 <a href="https://github.com/rijn" target="_blank">@rijn</a>。</li>
                        <li><code>Input</code> 增加 <code>name</code> 属性。<a href="https://github.com/iview/iview/issues/101" target="_blank">#101</a></li>
                        <li><code>Poptip</code> 和 <code>Tooltip</code> 增加事件 <code>on-popper-hide</code>。</li>
                        <li>修复 <code>Cascader</code> 总是有横向滚动条的bug。</li>
                        <li>修复 <code>Modal</code> 在没有隐藏时，前端路由后无法滚动页面的bug。</li>

                        <li>清理不必要的 less 函数。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item color="green">
                    <Icon type="information-circled" size="18" slot="dot"></Icon>
                    <Anchor title="0.9.8" h2>
                        <span class="doc-update-important">重要更新</span>
                    </Anchor>
                    <p>
                        <code>2016-11-21</code>
                    </p>
                    <ul>
                        <li>新增滑块组件 <a v-link="{path: '/components/slider'}">Slider</a>。</li>
                        <li>新增级联选择组件 <a v-link="{path: '/components/cascader'}">Cascader</a>。</li>
                        <li>新增穿梭框组件 <a v-link="{path: '/components/transfer'}">Transfer</a>。</li>
                        <li>优化多个组件 UI 细节。</li>
                        <li>按钮组件 <code>iButton</code> 新增四个颜色类 <code>type</code>，新增属性 <code>long</code> 用于设置按钮宽度为 100%。</li>
                        <li>图标组件 <code>Icon</code> 新增颜色属性 color 。</li>
                        <li>输入框组件 <code>Input</code> 新增 <code>password</code> 类型，新增 <code>readonly</code> 属性，新增聚焦和失焦事件。</li>
                        <li>调整 <code>Modal</code>、<code>Poptip</code> 部分样式。</li>
                        <li>废弃<code>iOptionGroup</code>模块，改名为<code>OptionGroup</code>模块。</li>
                        <li>支持通过 <code>&lt;script&gt;</code> 引用 iView，不再依赖 webpack，感谢 <a href="https://github.com/jingsam" target="_blank">@jingsam</a>。</li>
                    </ul>
                    <p><strong>说明</strong></p>
                    从这个版本开始，iView 默认使用预编译好的 <code>iview.js</code> 文件，并全局注册了所有的组件，通过 <code>Vue.use(iView)</code> 的形式使用，不再用 <code>import</code> 导入组件，查看文档<a v-link="{path: '/docs/guide/start'}">快速上手</a>
                </Timeline-item>
                <Timeline-item color="green">
                    <Icon type="information-circled" size="18" slot="dot"></Icon>
                    <Anchor title="0.9.7" h2>
                        <span class="doc-update-important">重要更新</span>
                    </Anchor>
                    <p>
                        <code>2016-11-10</code>
                    </p>
                    <ul>
                        <li>大部分组件 UI 调整。</li>
                        <li>新增输入框组件 <a v-link="{path: '/components/input'}">Input</a>。</li>
                        <li>栅格组件 <code>Row</code> 新增间距属性 <code>gutter</code>。</li>
                        <li>按钮组件 <code>iButton</code> 新增虚线和纯文字两种样式，<code>shape</code> 参数支持圆角按钮，按钮组 <code>ButtonGroup</code> 增加 <code>shape</code> 参数，支持圆角。</li>
                        <li>开关组件 <code>Switch</code> 新增大尺寸，用于容纳2个汉字。</li>
                        <li>标签组件 <code>Tag</code> 新增 <code>type</code> 属性，支持两种新的样式。</li>
                        <li>通知提醒组件 <code>Notice</code> 优化在没有描述内容时的样式。</li>
                        <li>对话框组件 <code>Modal</code> 修复改变 loading 状态时，按钮状态不改变的bug。</li>
                        <li>修复选择器 <code>iSelect</code> 在 <code>Modal</code> 里使用，下拉框显示的bug。<a href="https://github.com/iview/iview/issues/44" target="_blank">#44</a></li>
                        <li>修复部分用户安装 iView 后，因 Vue 版本不同问题导致无法使用的bug。<a href="https://github.com/iview/iview/issues/16" target="_blank">#16</a></li>
                    </ul>
                    <p><strong>不兼容更新</strong></p>
                    <ul>
                        <li>选择器组件 <code>iSelect</code> 支持 <code>iOption</code> 动态改变（IE只支持到11+）。<a href="https://github.com/iview/iview/issues/46" target="_blank">#46</a></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="0.9.6" h2></Anchor>
                    <p>
                        <code>2016-10-31</code>
                    </p>
                    <ul>
                        <li>废弃<code>Button</code>模块，改名为<code>iButton</code>模块，<code>import { iButton } from 'iview'</code>。</li>
                        <li>修复部分组件在IE9、10、11下的样式缺失bug。<a href="https://github.com/iview/iview/issues/34" target="_blank">#34</a></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="0.9.5" h2></Anchor>
                    <p>
                        <code>2016-10-27</code>
                    </p>
                    <ul>
                        <li>新增文字提示组件 <a v-link="{path: '/components/tooltip'}">Tooltip</a>。</li>
                        <li>新增气泡提示组件 <a v-link="{path: '/components/poptip'}">Poptip</a>。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="0.9.4" h2></Anchor>
                    <p>
                        <code>2016-10-25</code>
                    </p>
                    <ul>
                        <li>新增选择器组件 <a v-link="{path: '/components/select'}">Select</a>。</li>
                        <li>分页组件<code>Page</code>的页数切换使用<code>Select</code>替换原生选择器。</li>
                        <li>修复数字输入框<code>InputNumber</code>的两个bug。<a href="https://github.com/iview/iview/issues/28" target="_blank">#28</a></li>
                        <li>废弃<code>Col</code>模块，改名为<code>iCol</code>模块，<code>import { iCol } from 'iview'</code>。</li>
                        <li>增加<code>ButtonGroup</code>模块，来代替<code>Button.Group</code>，可以直接使用<code>import { ButtonGroup } from 'iview'</code>。</li>
                        <li>增加<code>RadioGroup</code>模块，来代替<code>Radio.Group</code>，可以直接使用<code>import { RadioGroup } from 'iview'</code>。</li>
                        <li>增加<code>CheckboxGroup</code>模块，来代替<code>Checkbox.Group</code>，可以直接使用<code>import { CheckboxGroup } from 'iview'</code>。</li>
                        <li>增加<code>Panel</code>模块，来代替<code>Collapse.Panel</code>，可以直接使用<code>import { Panel } from 'iview'</code>。</li>
                        <li>增加<code>TimelineItem</code>模块，来代替<code>Timeline.Item</code>，可以直接使用<code>import { TimelineItem } from 'iview'</code>。</li>
                        <li>增加<code>BreadcrumbItem</code>模块，来代替<code>Breadcrumb.Item</code>，可以直接使用<code>import { BreadcrumbItem } from 'iview'</code>。</li>
                        <li>增加<code>Step</code>模块，来代替<code>Steps.Step</code>，可以直接使用<code>import { Step } from 'iview'</code>。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="0.9.3" h2></Anchor>
                    <p>
                        <code>2016-10-10</code>
                    </p>
                    <ul>
                        <li>修复分页组件<code>Page</code>在页码为1或总数为0时的bug。<a href="https://github.com/iview/iview/issues/21" target="_blank">#21</a></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="0.9.2" h2></Anchor>
                    <p>
                        <code>2016-09-28</code>
                    </p>
                    <ul>
                        <li>新增对话框组件 <a v-link="{path: '/components/modal'}">Modal</a>。</li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="0.9.1" h2></Anchor>
                    <p>
                        <code>2016-09-24</code>
                    </p>
                    <ul>
                        <li>修复在Vue.js 1.0.27 版本下 Checkbox-group 组件 model 无法双向绑定的问题。<a href="https://github.com/vuejs/vue/issues/3307" target="_blank">#3307</a></li>
                    </ul>
                </Timeline-item>
                <Timeline-item color="green">
                    <Icon type="trophy" size="18" slot="dot"></Icon>
                    <Anchor title="0.9.0" h2></Anchor>
                    <p>
                        <code>2016-09-23</code>
                    </p>
                    <p>发布里程碑版本，包含了24个常用组件。</p>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="0.0.1" h2></Anchor>
                    <p>
                        <code>2016-07-28</code>
                    </p>
                    <p>立项。</p>
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

    import version from '../../config/config';

    export default {
        components: {
            iArticle,
            iCode,
            Anchor
        },
        data () {
            return {
                code: Code
            }
        },
        ready () {
            window.localStorage.setItem('version', version.version);
        }
    }
</script>