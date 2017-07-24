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