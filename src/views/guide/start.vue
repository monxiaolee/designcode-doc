<template>
    <i-article>
        <article>
            <h1>快速上手</h1>
            <Anchor title="使用之前" h2></Anchor>
            <p>高效的开发，离不开基础工程的搭建。在开始使用 iView 之前，有必要先了解以下基础知识，我们也假设您已经写过 Vue，并掌握了下面的内容。</p>
            <ul>
                <li>
                    <a href="http://v1-cn.vuejs.org/guide/components.html" target="_blank">Vue组件</a>
                </li>
                <li>
                    <a href="http://v1-cn.vuejs.org/guide/application.html" target="_blank">基于Vue构建大型应用</a>
                </li>
            </ul>
            <p>以下概念贯穿 iView 前后，建议开发者花点时间来了解。</p>
            <ul>
                <li>
                    <code>props</code> 传递数据，以及<code>:prop</code> <code>:prop.sync</code> <code>:prop.once</code>的区别
                </li>
                <li>
                    <code>slot</code> 内容分发
                </li>
                <li>
                    <code>events</code> <code>$emit</code> <code>@click</code> 事件
                </li>
            </ul>
            <Anchor title="使用脚手架 iView Cli（推荐）" h2></Anchor>
            <p>使用 <a v-link="{path: '/cli'}">iView Cli</a> 可以通过可视化的方式快速构建 iView 工程，并且可以根据业务进行丰富的配置。</p>
            <Anchor title="使用推荐工程" h2></Anchor>
            <p>我们已经为您准备好了基础工程和一些详细的教程，以此为基础开发，可以为您省去大量配置和调试环境的时间。</p>
            <p>
                推荐工程：<a href="https://github.com/iview/iview-project" target="_blank">iview-project</a>
            </p>
            <p>教程（如果您初次接触 webpack，建议阅读）：</p>
            <ul>
                <li>
                    <a href="https://www.talkingcoder.com/article/6310080842228107877?from=iview" target="_blank">《Vue+Webpack开发可复用的单页面富应用教程（配置篇）》</a>
                </li>
                <li>
                    <a href="https://www.talkingcoder.com/article/6310724958473489215?from=iview" target="_blank">《Vue+Webpack开发可复用的单页面富应用教程（组件篇）》</a>
                </li>
                <li>
                    <a href="https://www.talkingcoder.com/article/6310756346094488391?from=iview" target="_blank">《Vue+Webpack开发可复用的单页面富应用教程（技巧篇）》</a>
                </li>
                <li>
                    <a href="https://www.talkingcoder.com/article/6309726065044556372?from=iview" target="_blank">《Vue+Webpack使用规范》</a>
                </li>
            </ul>
            <p>如果您使用了我们推荐的工程，可以略过下面的内容直接进入开发阶段，我们也推荐使用这套工程来构建您的项目。</p>
            <p>如果您希望自己配置或使用其它工程，比如 <a href="https://github.com/vuejs/vue-cli" target="_blank">vue-cli</a>，请继续往下阅读。</p>
            <Anchor title="引入 iView" h2></Anchor>
            <p>一般在 webpack 入口页面 <code>main.js</code> 中如下配置：</p>
            <i-code lang="js" bg>{{ code.install.import }}</i-code>
            <Anchor title="按需引用" h2></Anchor>
            <p>如果您想在 webpack 中按需使用组件，减少文件体积，可以这样写：</p>
            <i-code bg>{{ code.install.need }}</i-code>
            <Anchor title="特别提醒" h2></Anchor>
            <ul>
                <li>按需引用仍然需要导入样式，即在 <strong>main.js</strong> 或根组件执行 <code>import 'iview/dist/styles/iview.css';</code></li>
                <li>按需引用是直接引用的组件库源代码，需要借助 babel 进行编译，以 webpack 为例：</li>
                <i-code lang="js" bg>{{ code.install.warning }}</i-code>
            </ul>
            <Anchor title="组件使用规范" h2></Anchor>
            <p>使用<code>:prop</code>传递数据格式为 数字、布尔值或函数时，必须带<code>:</code>(兼容String除外，具体看组件文档)，比如：</p>
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