<template>
    <i-article>
        <article>
            <h1>Notice</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>Show global notice at the right top of the page. Often used in such scenarios: </p>
            <ul>
                <li>The content of the notice includes description info.</li>
                <li>Active push by system.</li>
            </ul>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <Button type="primary" @click="open(false)">打开提醒</Button>
                    <Button @click="open(true)">打开提醒（仅标题）</Button>
                </div>
                <div slot="desc">
                    <p>Basic usage. It'll be closed after 4.5 sec by default. If <code>desc</code> prop is empty or not set, Title-Only style will be used.</p>
                    <p>We suggest that the title should be as clear as possiblem like "Delete Sucessfully" etc. Detail content can be placed into description area.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.open }}</i-code>
            </Demo>
            <Demo title="Notice Type">
                <div slot="demo">
                    <p>带描述信息</p>
                    <Button @click="info(false)">消息</Button>
                    <Button @click="success(false)">成功</Button>
                    <Button @click="warning(false)">警告</Button>
                    <Button @click="error(false)">错误</Button>
                    <p>仅标题</p>
                    <Button @click="info(true)">消息</Button>
                    <Button @click="success(true)">成功</Button>
                    <Button @click="warning(true)">警告</Button>
                    <Button @click="error(true)">错误</Button>
                </div>
                <div slot="desc">
                    <p>Notice with status icon.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.type }}</i-code>
            </Demo>
            <Demo title="Custom Duration">
                <div slot="demo">
                    <Button type="primary" @click="time">打开提醒</Button>
                </div>
                <div slot="desc">
                    <p>Set duration to 0 to disable auto close. You can also configure Notice globally in <code>Notice.config()</code>. Details on API Doc.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.time }}</i-code>
            </Demo>
            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Notice instance" h3></Anchor>
                <p>Use the component by directly calling methods below:</p>
                <ul>
                    <li>
                        <code>this.$Notice.open(config)</code>
                    </li>
                    <li>
                        <code>this.$Notice.info(config)</code>
                    </li>
                    <li>
                        <code>this.$Notice.success(config)</code>
                    </li>
                    <li>
                        <code>this.$Notice.warning(config)</code>
                    </li>
                    <li>
                        <code>this.$Notice.error(config)</code>
                    </li>
                </ul>
                <p>The methods above create and maintain Vue component implicitly. The only parameter is a config object. It's details are mentioned below:</p>
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
                            <td>title</td>
                            <td>The title of Notice.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>desc</td>
                            <td>The content of Notice. If empty or not set, Title-Only style will be used.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>duration</td>
                            <td>Close Notice automatically after the duration. 0 means never close.</td>
                            <td>Number</td>
                            <td>4.5</td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td>The unique identifier of current Notice.</td>
                            <td>String</td>
                            <td>Auto set</td>
                        </tr>
                        <tr>
                            <td>onClose</td>
                            <td>Callback when closing Notice.</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <p>Some global methods are also provided: (config, close and destroy)</p>
                <ul>
                    <li>
                        <code>this.$Notice.config(options)</code>
                    </li>
                    <li>
                        <code>this.$Notice.close(name)</code>
                    </li>
                    <li>
                        <code>this.$Notice.destroy()</code>
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
                            <td>The distance from Notice to page top. Unit: px</td>
                            <td>Number</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>duration</td>
                            <td>Default auto close duration. Unit: second</td>
                            <td>Number</td>
                            <td>4.5</td>
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
    import Code from '../../code/notice';
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
            open (nodesc) {
                this.$Notice.open({
                    title: '这是通知标题',
                    desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
                });
            },
            info (nodesc) {
                this.$Notice.info({
                    title: '这是通知标题',
                    desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
                });
            },
            success (nodesc) {
                this.$Notice.success({
                    title: '这是通知标题',
                    desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
                });
            },
            warning (nodesc) {
                this.$Notice.warning({
                    title: '这是通知标题',
                    desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
                });
            },
            error (nodesc) {
                this.$Notice.error({
                    title: '这是通知标题',
                    desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
                });
            },
            time () {
                this.$Notice.open({
                    title: '这是通知标题',
                    desc: '这条通知不会自动关闭，需要点击关闭按钮才可以关闭。',
                    duration: 0
                });
            }
        }
    }
</script>