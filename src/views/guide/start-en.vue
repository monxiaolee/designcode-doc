<template>
    <i-article>
        <article>
            <h1>Quick Start</h1>
            <Anchor title="Before Start" h2></Anchor>
            <p>Before using iView, we encourage you to read guide of Vue.js first.</p>
            <ul>
                <li>
                    <a href="https://vuejs.org/v2/guide/components.html" target="_blank">Vue Components</a>
                </li>
                <li>
                    <a href="https://vuejs.org/v2/guide/single-file-components.html" target="_blank">Single File Components</a>
                </li>
            </ul>
            <p>And understand the following concepts of Vue:</p>
            <ul>
                <li>
                    <code>props</code> Transfer Data
                </li>
                <li>
                    <code>slot</code> Content Distribution
                </li>
                <li>
                    <code>events</code> <code>$emit</code> <code>@click</code> Event
                </li>
            </ul>
            <Anchor title="iView CLI (Recommend)" h2></Anchor>
            <p>iView provide an <router-link to="/cli">CLI</router-link> for quickly construct a project with iView.</p>
            <Anchor title="Starter Kit" h2></Anchor>
            <p>We provide a starter kit <a href="https://github.com/iview/iview-project" target="_blank">iview-project</a> for you.</p>
            <p>If you are using it, you are ready for developing and can skip the following part. We recommend it to you since it can save your time.</p>
            <br/>
            <p>If you prefer not to use them or use other utilities like <a href="https://github.com/vuejs/vue-cli" target="_blank">vue-cli</a>, please keep reading.</p>
            <Anchor title="Import iView" h2></Anchor>
            <p>Import iView in the entry file (<code>main.js</code> as usual) of webpack:</p>
            <i-code lang="js" bg>{{ code.install.import }}</i-code>
            <Anchor title="Import on demand" h2></Anchor>
            <p>Only import components what we need will help reduce size.</p>
            <i-code bg>{{ code.install.need }}</i-code>
            <Anchor title="Reminder" h2></Anchor>
            <ul>
                <li>Partial import will only effect logic level; you still need to import all the styles, which means add <code>import 'iview/dist/styles/iview.css';</code> to <strong>main.js</strong> or the root component.</li>
                <li>Partial import depends on babel, so it's necessary to add module to webpack in order to let it compiled:</li>
                <i-code lang="js" bg>{{ code.install.warning }}</i-code>
            </ul>
            <Anchor title="How to pass value to components" h2></Anchor>
            <p>Many components require adding <code>:</code> before properties for passing integer and boolean:</p>
            <i-code lang="html" bg>{{ code.standard.prop }}</i-code>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Code from '../../code/guide';
    import Anchor from '../../components/anchor.vue';

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
        methods: {

        }
    }
</script>
