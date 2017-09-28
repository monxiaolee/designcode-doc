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
        <span class="open-fiddle" v-if="title !== 'Code'" @click="openFiddle">
            <Icon type="code-working" size="18" />
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
    import tag_map from './tag-map';

    function replaceTag(source, tagMap) {
        Object.keys(tagMap).forEach(i => {
            source = source.replace(new RegExp(`<${i}(?!-)`, 'g'), `<${tagMap[i]}`)
                .replace(new RegExp(`<\/${i}>`, 'g'), `<\/${tagMap[i]}>`);
        })
        return source;
    }

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
                const source = this.$refs.code.textContent;

                let script = source.match(/<script>[\s\S]*?<\/script>/g);
                let style = source.match(/<style[\s\S]*?>[\s\S]*?<\/style>/g);
                let template = source.match(/<template>[\s\S]*?<\/template>/g);

                script = script ? script[0].replace(/<script>/, '').replace(/<\/script>/, '').replace(/export default/, 'var Main =') : '';
                style = style ? style[0].replace(/<style[\s\S]*?>/, '').replace(/<\/style>/, '') : '';
                template = template ? template[0].replace(/<template>/, `<div id="app">`).replace(/<\/template>/, '</div>') : '';

                if (template) {
                    template = replaceTag(template, tag_map);
                }

                const html = '<script src="//unpkg.com/vue/dist/vue.js"></scr' + 'ipt>\n' +
                             '<script src="//unpkg.com/iview/dist/iview.min.js"></scr' + 'ipt>\n' +
                             template;

                const css = '@import url("//unpkg.com/iview/dist/styles/iview.css");\n' + style;
                const js = script + '\nvar Component = Vue.extend(Main)\nnew Component().$mount(\'#app\')';

                const data = {
                    js: js,
                    css: css,
                    html: html,
                    panel_css: 1,
                    panel_js: 3
                };

                const form = document.getElementById('fiddle-form') || document.createElement('form');
                form.innerHTML = '';
                const node = document.createElement('textarea');
                form.method = 'post';
                form.action = 'https://jsfiddle.net/api/post/library/pure/';
                form.target = '_blank';
                for (let name in data) {
                    node.name = name;
                    node.value = data[name].toString();
                    form.appendChild(node.cloneNode());
                }
                form.setAttribute('id', 'fiddle-form');
                form.style.display = 'none';
                document.body.appendChild(form);
                form.submit();
            }
        }
    }
</script>
