<template>
    <i-article>
        <article>
            <h1>Introduction</h1>
            <p>iView is a set of UI components and widgets built on Vue.js.</p>
            <Anchor title="Features" h2></Anchor>
            <ul>
                <li>Dozens of useful and beautiful components.</li>
                <li>Friendly API. It's made for people with all skill levels.</li>
                <li>Extensive documentation.</li>
                <li>Customized theme.</li>
            </ul>
            <Anchor title="Example" h2></Anchor>
            <i-code lang="html" bg>{{ code.introduce.demo }}</i-code>
            <p>Result</p>
            <Slider v-model="value" range></Slider>
            <Anchor title="Version" h2></Anchor>
            <p>
                <a href="https://www.npmjs.com/package/iview" target="_blank">
                    <img src="https://img.shields.io/npm/v/iview.svg?style=flat-square">
                </a>
            </p>
            <Anchor title="Compatibility" h2></Anchor>
            <ul>
                <li>Support Vue.js 2.x</li>
                <li>Support Vue.js 1.x <a href="http://v1.iviewui.com">Visit 1.0 doc</a></li>
                <li>Support SSR</li>
                <li><a href="http://electron.atom.io/" target="_blank">Electron</a></li>
                <li>iView does not support IE8 or below since <a href="https://vuejs.org/v2/guide/reactivity.html" target="_blank">Vue.js</a> is using Object.defineProperty which do not be supported by these browsers to track changes.</li>
            </ul>
            <Anchor title="Related Links" h2></Anchor>
            <ul>
                <li>
                    <a href="https://vuejs.org/" target="_blank">Vue.js</a>
                </li>
                <li>
                    <a href="http://webpack.github.io/" target="_blank">webpack</a>
                </li>
                <li>
                    <a href="http://es6.ruanyifeng.com/" target="_blank">ES2015</a>
                </li>
                <li>
                    <a href="http://router.vuejs.org/en/" target="_blank">vue-router</a>
                </li>
                <li>
                    <a href="https://git.oschina.net/icarusion/iview" target="_blank">码云</a>
                </li>
            </ul>
            <Anchor title="Related Projects" h2></Anchor>
            <p>Some components of iView refer to the following projects:</p>
            <ul>
                <li>
                    <a href="https://github.com/ant-design/ant-design/" target="_blank">Ant Design</a>
                </li>
                <li>
                    <a href="https://github.com/ElemeFE/element" target="_blank">Element</a>
                </li>
                <li>
                    <a href="https://github.com/okoala/vue-antd" target="_blank">vue-antd</a>
                </li>
                <li>
                    <a href="https://github.com/FE-Driver/vue-beauty" target="_blank">vue-beauty</a>
                </li>
                <li>
                    <a href="https://github.com/airyland/vux" target="_blank">Vux</a>
                </li>
            </ul>
            <Anchor title="License" h2></Anchor>
            <p>iView is released under <a href="https://github.com/iview/iview/blob/2.0/LICENSE" target="_blank">MIT license</a></p>
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
                code: Code,
                value: [20, 50]
            }
        },
        methods: {

        }
    }
</script>
