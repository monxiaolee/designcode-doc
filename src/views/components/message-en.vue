<template>
    <i-article>
        <article>
            <h1>Message</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>A lightweight feedback message appearing at the top of the screen, fading automatically. Has many different options for different situations.</p>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Normal Prompt">
                <div slot="demo">
                    <Button type="primary" @click="info">显示普通提示</Button>
                </div>
                <div slot="desc">
                    <p>Basic promt, fades after 1.5 seconds by default.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.info }}</i-code>
            </Demo>
            <Demo title="Prompt Type">
                <div slot="demo">
                    <Button @click="success">显示成功提示</Button>
                    <Button @click="warning">显示警告提示</Button>
                    <Button @click="error">显示错误提示</Button>
                </div>
                <div slot="desc">
                    <p>Different prompt types: success, warning, error.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.type }}</i-code>
            </Demo>
            <Demo title="Loading Prompt">
                <div slot="demo">
                    <Button @click="loading">显示加载中...</Button>
                </div>
                <div slot="desc">
                    <p>Loading status, dismissed asynchronously.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.loading }}</i-code>
            </Demo>
            <Demo title="Custom Prompt Duration">
                <div slot="demo">
                    <Button @click="time">显示一个10秒的提示</Button>
                </div>
                <div slot="desc">
                    <p>Customize prompt duration. Can also be configured in <code>Message.config()</code>, refer to API section below.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.time }}</i-code>
            </Demo>
            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Message instance" h3></Anchor>
                <p>This component can be used with the following static methods:</p>
                <ul>
                    <li>
                        <code>this.$Message.info(content, duration, onClose)</code>
                    </li>
                    <li>
                        <code>this.$Message.success(content, duration, onClose)</code>
                    </li>
                    <li>
                        <code>this.$Message.warning(content, duration, onClose)</code>
                    </li>
                    <li>
                        <code>this.$Message.error(content, duration, onClose)</code>
                    </li>
                    <li>
                        <code>this.$Message.loading(content, duration, onClose)</code>
                    </li>
                </ul>
                <p>The methods above implicitly create and maintain Vue components. Parameters are explained below:</p>
                <table>
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>content</td>
                            <td>Prompt's message content</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>duration</td>
                            <td>Time before prompt dismisses, in seconds. Use 0 to not dismiss</td>
                            <td>Number</td>
                            <td>1.5</td>
                        </tr>
                        <tr>
                            <td>onClose</td>
                            <td>Function to be called after the prompt is closed</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <p>Methods for global configuration and disposal are also provided:</p>
                <ul>
                    <li>
                        <code>this.$Message.config(options)</code>
                    </li>
                    <li>
                        <code>this.$Message.destroy()</code>
                    </li>
                </ul>
                <br>
                <i-code bg>{{ code.config }}</i-code>
                <br>
                <table>
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>top</td>
                            <td>Prompt's distance from top, in pixels</td>
                            <td>Number</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>duration</td>
                            <td>Default time before prompt dismisses, in seconds.</td>
                            <td>Number</td>
                            <td>1.5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import Code from '../../code/message';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            Anchor
        },
        data () {
            return {
                code: Code
            }
        },
        methods: {
            info () {
                this.$Message.info('这是一条普通的提示');
            },
            success () {
                this.$Message.success('这是一条成功的提示');
            },
            warning () {
                this.$Message.warning('这是一条警告的提示');
            },
            error () {
                this.$Message.error('对方不想说话，并且向你抛出了一个异常');
            },
            loading () {
                const msg = this.$Message.loading('正在加载中...', 0);
                setTimeout(msg, 3000);
            },
            time () {
                this.$Message.info('我将在10秒后消失', 10);
            }
        }
    }
</script>