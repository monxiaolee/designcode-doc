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