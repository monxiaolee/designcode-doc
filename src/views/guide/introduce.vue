<template>
    <i-article>
        <article>
            <h1>关于iView</h1>
            <p>iView 是一套基于 Vue.js 的开源 UI 组件库，主要服务于 PC 界面的中后台产品。</p>
            <Anchor title="特性" h2></Anchor>
            <ul>
                <li>高质量、功能丰富</li>
                <li>友好的 API ，自由灵活地使用空间</li>
                <li>事无巨细的文档</li>
                <li>细致、漂亮的 UI</li>
                <li>使用单文件的 Vue 组件化开发模式</li>
                <li>基于 npm + webpack + babel 开发，支持 ES2015</li>
                <!--<li>可选择多套皮肤或自定义皮肤</li>-->
                <!-- <li>封装常用业务套件</li> -->
            </ul>
            <Anchor title="安装" h2></Anchor>
            <p>使用 npm</p>
            <i-code lang="auto" bg>{{ code.introduce.install }}</i-code>
            <p>或使用 &lt;script&gt; 全局引用</p>
            <i-code lang="html" bg>{{ code.introduce.script }}</i-code>
            <Anchor title="示例" h2></Anchor>
            <i-code lang="html" bg>{{ code.introduce.demo }}</i-code>
            <p>效果</p>
            <Slider :value.sync="value" range></Slider>
            <Anchor title="版本" h2></Anchor>
            <p>
                <a href="https://www.npmjs.com/package/iview" target="_blank">
                    <img src="https://img.shields.io/npm/v/iview.svg?style=flat-square">
                </a>
            </p>
            <Anchor title="兼容" h2></Anchor>
            <p>目前只支持 Vue.js 1.x 版本。</p>
            <p>由于 <a href="http://v1-cn.vuejs.org/guide/reactivity.html" target="_blank">Vue.js</a> 是基于Object.defineProperty实现数据追踪，故不支持IE8及更低版本的浏览器。</p>
            <Anchor title="相关链接" h2></Anchor>
            <ul>
                <li>
                    <a href="http://v1-cn.vuejs.org/" target="_blank">Vue官方文档</a>
                </li>
                <li>
                    <a href="http://webpack.github.io/" target="_blank">webpack</a>
                </li>
                <li>
                    <a href="http://es6.ruanyifeng.com/" target="_blank">ES2015</a>
                </li>
                <li>
                    <a href="http://router.vuejs.org/zh-cn/index.html" target="_blank">vue-router</a>
                </li>
                <li>
                    <a href="https://git.oschina.net/icarusion/iview" target="_blank">码云</a>
                </li>
            </ul>
            <Anchor title="相关开源项目" h2></Anchor>
            <p>iView 部分组件和样式代码参考了以下项目：</p>
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
            <Anchor title="Todo" h2></Anchor>
            <ul>
                <li><Checkbox disabled :checked="true"></Checkbox> iView 很快会支持不依赖 webpack 的 umd 使用方法。</li>
                <li><Checkbox disabled :checked="true"></Checkbox> 目前的 UI 是以 Ant.Design 为雏形，我们已在 0.9.7 版本开始逐步优化和迭代，使 iView 不仅好用，还很好看。</li>
                <li><Checkbox disabled :checked="false"></Checkbox> iView 目前是基于 Vue.js 1.0的，我们会在将来新开一个分支来支持 Vue 2.0，我们也认为 2.0 是未来的趋势。</li>
                <li><Checkbox disabled :checked="false"></Checkbox> iView 明年会启动英文文档翻译计划，也希望喜欢和支持 iView ，同时英语不错的同学可以加入我们，一起参与翻译。<br>邮件申请文档翻译计划 <a href="mailto:admin@aresn.com">admin@aresn.com</a></li>
            </ul>
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