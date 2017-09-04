<template>
    <i-article>
        <article>
            <h1>国际化</h1>
            <p>iView 的所有组件文案默认使用的是中文，通过设置可以使用其它语言，以英文为例，在 <strong>main.js</strong> 中：</p>
            <i-code lang="js" bg>{{ code.i18n.demo }}</i-code>
            <Anchor title="兼容 vue-i18n" h2></Anchor>
            <p>iView 兼容 <a href="https://github.com/kazupon/vue-i18n" target="_blank">vue-i18n</a>，搭配使用能更方便地实现多语言切换。</p>
            <i-code lang="js" bg>{{ code.i18n.vue }}</i-code>
            <p>在导入 iView 的语言包前，需 babel 支持：</p>
            <i-code lang="js" bg>{{ code.install.warning }}</i-code>
            <Anchor title="支持的语言" h2></Anchor>
            <p>iView 目前已支持以下语言：</p>
            <ul>
                <li>简体中文（zh-CN）</li>
                <li>繁体中文（zh-TW）</li>
                <li>英文（en-US）</li>
                <li>土耳其语（tr-TR）</li>
                <li>西班牙语（es-ES）</li>
                <li>日语（ja-JP）</li>
                <li>俄语（ru-RU）</li>
                <li>法语（fr-FR）</li>
                <li>德语（de-DE）</li>
                <li>巴西葡萄牙语（pt-BR）</li>
                <li>葡萄牙语（pt-PT）</li>
                <li>韩语（ko-KR）</li>
                <li>越南语（vi-VN）</li>
                <li>瑞典语（sv-SE）</li>
                <li>印尼语（id-ID）</li>
            </ul>
            <p>欢迎贡献代码，以支持更多语言：<a href="https://github.com/iview/iview/tree/2.0/src/locale/lang" target="_blank">查看</a></p>
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