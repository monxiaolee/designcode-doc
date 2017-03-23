<template>
    <i-article>
        <article>
            <h1>Message 全局提示</h1>
            <Anchor title="概述" h2></Anchor>
            <p>轻量级的信息反馈组件，在顶部居中显示，并自动消失。有多种不同的提示状态可选择。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="普通提示">
                <div slot="demo">
                    <Button type="primary" @click="info">显示普通提示</Button>
                </div>
                <div slot="desc">
                    <p>最基本的提示，默认在1.5秒后消失。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.info }}</i-code>
            </Demo>
            <Demo title="提示类型">
                <div slot="demo">
                    <Button @click="success">显示成功提示</Button>
                    <Button @click="warning">显示警告提示</Button>
                    <Button @click="error">显示错误提示</Button>
                </div>
                <div slot="desc">
                    <p>不同的提示状态：成功、警告、错误。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.type }}</i-code>
            </Demo>
            <Demo title="加载中">
                <div slot="demo">
                    <Button @click="loading">显示加载中...</Button>
                </div>
                <div slot="desc">
                    <p>Loading 的状态，并异步在某个时机移除。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.loading }}</i-code>
            </Demo>
            <Demo title="自定义时长">
                <div slot="demo">
                    <Button @click="time">显示一个10秒的提示</Button>
                </div>
                <div slot="desc">
                    <p>自定义时长，也可以在<code>Message.config()</code>中全局配置，详见API。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.time }}</i-code>
            </Demo>
            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Message instance" h3></Anchor>
                <p>通过直接调用以下方法来使用组件：</p>
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
                <p>以上方法隐式的创建及维护Vue组件。参数说明如下：</p>
                <table>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>content</td>
                            <td>提示内容</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>duration</td>
                            <td>自动关闭的延时，单位秒，不关闭可以写 0</td>
                            <td>Number</td>
                            <td>1.5</td>
                        </tr>
                        <tr>
                            <td>onClose</td>
                            <td>关闭时的回调</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <p>另外提供了全局配置和全局销毁的方法：</p>
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
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>top</td>
                            <td>提示组件距离顶端的距离，单位像素</td>
                            <td>Number</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>duration</td>
                            <td>默认自动关闭的延时，单位秒</td>
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