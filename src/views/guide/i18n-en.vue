<template>
    <i-article>
        <article>
            <h1>Internationalization</h1>
            <p>The default language is Chinese. To use other languages, you need to do some customization.</p>
            <p>Take English as an example. If you did fully importing and wish to use English, you can modify <strong>main.js</strong> as the following:</p>
            <i-code lang="js" bg>{{ code.i18n.demo }}</i-code>
            <Anchor title="Compatible with vue-i18n" h2></Anchor>
            <p>iView is compatible with <a href="https://github.com/kazupon/vue-i18n" target="_blank">vue-i18n</a>, which makes it eaiser to switch between multiple languages.</p>
            <i-code lang="js" bg>{{ code.i18n.vue }}</i-code>
            <p>We need the help of Babel to import iView language packages:</p>
            <i-code lang="js" bg>{{ code.install.warning }}</i-code>
            <Anchor title="Supported Languages" h2></Anchor>
            <p>iView have beed translated from Chinese to the following languages:</p>
            <ul>
                <li>Chinese Simplified(zh-CN)</li>
                <li>Chinese Traditional(zh-TW)</li>
                <li>English(en-US)</li>
                <li>Turkish(tr-TR)</li>
                <li>Spanish(es-ES)</li>
                <li>Japanese(ja-JP)</li>
                <li>Russian(ru-RU)</li>
                <li>French(fr-FR)</li>
                <li>German(de-DE)</li>
                <li>Brazilian Portuguese(pt-BR)</li>
                <li>Portuguese(pt-PT)</li>
                <li>Korean(ko-KR)</li>
                <li>Vietnamese(vi-VN)</li>
                <li>Swedish(sv-SE)</li>
                <li>Indonesian(id-ID)</li>
            </ul>
            <p>If your target language is not included, you are more than welcome to contribute: <a href="https://github.com/iview/iview/tree/2.0/src/locale/lang" target="_blank">Supported Languages</a></p>
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
