<template>
    <i-article>
        <article>
            默认皮肤标准色
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../../components/article.vue';
    import iCode from '../../../components/code.vue';
    import Code from '../../../code/guide';
    import Anchor from '../../../components/anchor.vue';

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