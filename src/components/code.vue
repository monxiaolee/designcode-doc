<style scoped>
    div{
        position: relative;
        font-size: 14px;
    }
    span.copy, span.scale, span.open-fiddle{
        border-radius: 0 0 3px 3px;
        padding: 2px 5px;
        position: absolute;
        top: 5px;
        right: 0;
        color: #b2b2b2;
        cursor: pointer;
    }
    span.scale{
        right: 25px;
    }
    span.open-fiddle{
        right: 50px;
    }
    .bg + span.copy{
        right: 5px;
    }
    span.copy:hover, span.scale:hover, span.open-fiddle:hover{
        color: #5c6b77;
    }
</style>
<style>
    .code-scale-modal .ivu-modal-body{
        background-color: #f7f7f7;
    }
    .code-scale-modal pre{
        font-size: 14px;
    }
</style>
<template>
    <div>
        <pre :class="{bg: bg}"><code :class="language" ref="code"><slot></slot></code></pre>
        <span class="open-fiddle" @click="openFiddle">
            <Icon type="code-working" size="18" />
            <form action="http://jsfiddle.net/api/post/library/pure/" ref="fiddle" method="POST" target="_blank">
                <input type="hidden" name="wrap" value="d" />
                <input type="hidden" name="js" :value="jsFiddleData.js" />
                <input type="hidden" name="css" :value="jsFiddleData.css" />
                <input type="hidden" name="html" :value="jsFiddleData.html" />
                <input type="hidden" name="title" :value="jsFiddleData.title" />
            </form>
        </span>
        <span class="scale" @click="scale">
            <Icon type="qr-scanner" size="18"></Icon>
        </span>
        <span class="copy" @click="clip">
            <Icon type="clipboard" size="18" v-show="!copied"></Icon>
            <Icon type="checkmark" size="18" v-show="copied" style="color:#5cb85c"></Icon>
        </span>
        <Modal class-name="code-scale-modal" :title="title" width="65" v-model="openScale">
            <pre :class="{bg: bg}"><code :class="language" ref="code2"></code></pre>
        </Modal>
    </div>
</template>
<script>
    import hljs from 'hljs';
    import Clipboard from 'clipboard';

    export default {
        props: {
            lang: {
                type: String,
                default: 'javascript'
            },
            bg: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                openScale: false,
                code: '',
                copied: false,
                docLang: this.$lang,
                title: 'Code',
                jsFiddleData: {}
            }
        },
        computed: {
            language () {
                if (this.lang == 'auto') {
                    return ''
                } else {
                    return this.lang;
                }
            }
        },
        mounted () {
            this.code = this.$refs.code.innerHTML.replace(/\n/, '');
            this.$refs.code.innerHTML = this.code;
            hljs.highlightBlock(this.$refs.code);

            this.$refs.code2.innerHTML = this.code;
            hljs.highlightBlock(this.$refs.code2);

            const Demo = this.$parent.$parent.$parent;
            if (Demo.$options.name === 'Demo') {
                this.title = Demo.title;
            }
        },
        methods: {
            clip () {
                const code = this.code.replace(/&lt;/g,'<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
                const clipboard = new Clipboard('.copy', {
                    text () {
                        return code
                    }
                });

                clipboard.on('success', (e) => {
                    e.clearSelection();
                    clipboard.destroy();
                    this.copied = true;
                    if (this.docLang === 'zh-CN') {
                        this.$Message.success('代码已复制到剪贴板');
                    } else {
                        this.$Message.success('Code copied');
                    }
                    setTimeout(() => {
                        this.copied = false;
                    }, 2000);
                });
            },
            scale () {
                this.openScale = true;
            },
            openFiddle(){
                const form = this.$refs.fiddle;
                const input = form.firstElementChild;
                const source = this.$refs.code.textContent;

                let js = source.match(/<script>[\s\S]*?<\/script>/g);
                let style = source.match(/<style>[\s\S]*?<\/style>/g);
                let template = source.match(/<template>[\s\S]*?<\/template>/g);

                js = js ? js[0].slice(8, -9).trim() : '';
                style = style ? style[0].slice(7, -8).trim() : '';
                template = template ? template[0].slice(10, -11).trim().replace(/[\n\t\r]|\s\s/g, '') : '';

                const objectOpen = js.indexOf('{')
                const jsContructorObject = eval('(' + js.slice(objectOpen) + ')');
                jsContructorObject.el = '#app';
                jsContructorObject.template = `<div>${template}</div>`;

                const APIData = {
                  title: 'Component title',
                  js: `new Vue(${JSON.stringify(jsContructorObject, null, '  ')});`,
                  css: style + '\n#component {padding: 20px;}',
                  html: [
                      '<link rel="stylesheet" type="text/css" href="//unpkg.com/iview/dist/styles/iview.css">',
                      '<script src="//unpkg.com/vue/dist/vue.min.js"></sc' + 'ript>',
                      '<script src="//unpkg.com/iview/dist/iview.min.js"></sc' + 'ript>',
                      '<div id="component"><div id="app"></div></div>'
                  ].join('\n'),
                }
                this.jsFiddleData = APIData
                this.$nextTick(() => form.submit());
            }
        }
    }
</script>
