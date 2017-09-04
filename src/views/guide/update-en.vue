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
        <h1>Change Log</h1>
        <article class="doc-update">
            <Timeline pending>
                <Timeline-item>
                    <Anchor title="2.3.0 Lumino City" h2></Anchor>
                    <p>
                        <code>2017-09-05</code>
                    </p>
                    <ul>
                        <li>Switch add new property <code>true-value</code> and <code>false-value</code>. <issue id="1399"></issue></li>
                        <li>Input add new property <code>autocomplete</code>.</li>
                        <li>Table column add <code>type: html</code> to avoid XSS. <issue id="993"></issue></li>
                        <li>When the Table column is expandable, it can set the title or renderHeader.</li>
                        <li>Improve Select rendering performance. <issue id="1777"></issue></li>
                        <li>Fix the bug when Table columns are empty. <issue id="1736"></issue></li>
                        <li>Fix Table bug in selection mode when all columns are disabled, the header will be checked. <issue id="1751"></issue></li>
                        <li>Fix Select bug that select an Option, the html tag will be included. <issue id="1690"></issue></li>
                        <li>Fix Select bug in remote mode, when clear data, the label will not be clear. <issue id="1743"></issue></li>
                        <li>Fix Rate bug in allow-half mode. <issue id="1761"></issue></li>
                        <li>Fix Date bug that unable to display the initial value in IE 11. <issue id="1422"></issue></li>
                        <li>Fix Date bug in <code>datetime</code> type, clear date and select again, the time is wrong. <issue id="1223"></issue></li>
                        <li>Fix Date bug without default value, sometimes choose the time one day ahead. <issue id="1734"></issue></li>
                        <li>Fix Tabs bug that bottom border is not correct in IE 11. <issue id="695"></issue></li>
                        <li>Fix Tooltip bug in always mode, the position is wrong. <issue id="1568"></issue></li>
                        <li>Fix Slider bug when dbclick, it will jump to the left. <issue id="1354"></issue></li>
                        <li>Fix Cascader bug in transfer mode, the style is wrong. <issue id="1728"></issue></li>
                        <li>Add Indonesian. <mention id="IndraGunawan"></mention></li>
                        <blockquote>Special thanks to <mention id="SergioCrisostomo"></mention></blockquote>
                    </ul>
                </Timeline-item>
                <Timeline-item color="red">
                    <Icon type="ios-heart" size="18" slot="dot"></Icon>
                    <Anchor title="2.2.0 Shadowmatic" h2></Anchor>
                    <p>
                        <code>2017-08-28</code>
                    </p>
                    <ul>
                        <li>Add Avatar component. <router-link to="/components/avatar-en">View</router-link></li>
                        <li>Add ColorPicker component. <router-link to="/components/color-picker-en">View</router-link></li>
                        <li>Add AutoComplete component.<router-link to="/components/auto-complete-en">View</router-link></li>
                        <li>Form supports validation of ColorPicker and AutoComplete components.</li>
                        <li>Radio and RadioGroup add <code>size</code> property.</li>
                        <li>Checkbox and CheckboxGroup add <code>size</code> property.</li>
                        <li>Components with size property add <code>default</code> value.</li>
                        <li>Fix the bug that the Select can still input when opening the disabled in the filterable mode. <issue id="1547"></issue></li>
                        <li>Fix Poptip in the transfer mode, using the confirm style bug. <issue id="1612"></issue></li>
                        <li>Fix a problem with InputNumber. <issue id="1654"></issue></li>
                        <li>Optimize the Grid component for gutter settings. <issue id="1661"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.1.0 Alto's Adventure" h2></Anchor>
                    <p>
                        <code>2017-08-14</code>
                    </p>
                    <ul>
                        <li>TimePicker add new property <code>steps</code>, You can set the interval of hours, minutes, and seconds. <mention id="SergioCrisostomo"></mention></li>
                        <li>Radio、Checkbox add new property <code>true-value</code> and <code>false-value</code>. <issue id="1191"></issue></li>
                        <li>The current of the Page supports the <code>.sync</code> modifier.</li>
                        <li>Poptip、Tooltip add event <code>on-popper-show</code>.</li>
                        <li>Optimize the export of csv in the Safari browser.</li>
                        <li>Fix Cascader bug in <code>change-on-select</code> mode that when you choose item again, the panel does not reset the sublist. <issue id="1553"></issue></li>
                        <li>Fix Cascader bug in the dynamic load option, when the child's data is empty, recursively triggered the requested.</li>
                        <li>Fix InputNumber bug that sometimes to calculate inaccurate. <issue id="1452"></issue></li>
                        <li>Fix InputNumber bug that not watch for min and max. <issue id="1134"></issue></li>
                        <li>Fix Page when changing the <code>total</code>, the page number is incorrect. <issue id="1543"></issue></li>
                        <li>Fix Date in datetimerange mode, the data is incorrectly returned. <issue id="1220"></issue></li>
                        <li>Fix the bug that the Tree automatically checked when children were empty. <issue id="1504"></issue></li>
                        <li>Fix a bug that after the replacement of the Form, some of the components can not be verified for the first time. <issue id="1534"></issue></li>
                        <li>Add Vietnamese. <mention id="hckhanh"></mention></li>
                        <li>Add Portuguese. <mention id="SergioCrisostomo"></mention></li>
                        <li>Add Swedish. <mention id="SergioCrisostomo"></mention></li>
                    </ul>
                </Timeline-item>
                <Timeline-item color="green">
                    <Icon type="trophy" size="18" slot="dot"></Icon>
                    <Anchor title="2.0.0 Leo's Fortune" h2></Anchor>
                    <p>
                        <code>2017-07-28</code>
                    </p>
                    <ul>
                        <li>Nuxt.js support internationalization. <router-link to="/docs/guide/i18n-en">View</router-link></li>
                        <li>Modal width will be displayed as a percentage when less than 100.</li>
                        <li>Progress add new property <code>vertical</code>. <issue id="629"></issue></li>
                        <li>Table add property <code>sortType</code> to achieve the default sort. <issue id="1403"></issue></li>
                        <li>Table will prevent bubbling under selection mode. <issue id="1271"></issue></li>
                        <li>Table replace <code>renderHeader</code> to a Render function. <issue id="1357"></issue></li>
                        <li>When sorting using Table, click the header title can also be sorted. <issue id="122"></issue></li>
                        <li>Fixed Table bug that using Select, Dropdown and other components can not be folded. <issue id="1341"></issue></li>
                        <li>Fixed Table bug that fixed column height is incorrect when data is empty. <issue id="1387"></issue></li>
                        <li>Fixed Table bug that column without width will be disappeared when data is empty. <issue id="658"></issue></li>
                        <li>Fixed Table bug, set the height and add some data, the height is incorrect when data is empty. <a href="https://github.com/iview/iview/commit/119eeafedea02d984650b82920abdcdf4e809f79" target="_blank">commit</a></li>
                        <li>
                            Modal, Poptip, Tooltip, Dropdown, Select, Date, Cascader add property <code>transfer</code>, it will be inserted to body when the value is true. <issue id="830"></issue> <issue id="844"></issue> <issue id="1187"></issue>
                            <blockquote>A component with a floating layer, when used in Tabs or a fixed Table column, suggests adding this property, it will not be affected by the parent style, resulting in better results.</blockquote>
                        </li>
                        <li>Input add event @on-keyup, @on-keydown, @on-keypress. </li>
                        <li>Fixed Select bug that using in Modal, the layer position is not correct under remote mode. <issue id="1099"></issue></li>
                        <li>Fixed bug that when Tabs contains other Tabs, the outer one disable animation, the inner can not be clicked. <issue id="1427"></issue></li>
                        <li>Add Korean. <mention id="dokenzy"></mention></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="2.0.0-rc.19" h2></Anchor>
                    <p>
                        <code>2017-07-17</code>
                    </p>
                    <ul>
                        <li>Support Vue 2.4.1</li>
                        <li>Support SSR and Nuxt.js.<issue id="1315"></issue></li>
                        <li>Page supports keypad operation.<issue id="1318"></issue></li>
                        <li>Table add new event <code>@on-select-cancel</code> to cancel select row. <issue id="705"></issue></li>
                        <li>Fixed Select bug in remote mode that set <code>label</code> does not take effect.<issue id="1286"></issue></li>
                        <li>Fixed Table, Cascader, Tree bug in Vue 2.4.1 <issue id="1353"></issue></li>
                    </ul>
                </Timeline-item>
                <Timeline-item>
                    <Button type="ghost" size="large" @click="handleBefore">View 1.x Change Log</Button>
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