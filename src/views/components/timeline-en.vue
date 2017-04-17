<style scoped>
    .time{
        font-size: 14px;
        font-weight: bold;
        margin: 0;
    }
    .content{
        padding-left: 5px;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Timeline 时间轴</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>Used to vertically display a series of information ordered by time.</p>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <Timeline>
                        <Timeline-item>
                            <p class="time">1976</p>
                            <p class="content">Apple I is released</p>
                        </Timeline-item>
                        <Timeline-item>
                            <p class="time">1984</p>
                            <p class="content">Macintosh is released</p>
                        </Timeline-item>
                        <Timeline-item>
                            <p class="time">2007</p>
                            <p class="content">iPhone is released</p>
                        </Timeline-item>
                        <Timeline-item>
                            <p class="time">2010</p>
                            <p class="content">iPad is released</p>
                        </Timeline-item>
                        <Timeline-item>
                            <p class="time">10/05/2011</p>
                            <p class="content">Steve Jobs passes away</p>
                        </Timeline-item>
                    </Timeline>
                </div>
                <div slot="desc">
                    <p>Simplest usage of a timeline.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="Circle Colors">
                <div slot="demo">
                    <Timeline>
                        <Timeline-item color="green">Version 1.0 release</Timeline-item>
                        <Timeline-item color="green">Version 2.0 release</Timeline-item>
                        <Timeline-item color="red">Critical failure</Timeline-item>
                        <Timeline-item color="blue">Version 3.0 release</Timeline-item>
                    </Timeline>
                </div>
                <div slot="desc">
                    <p>Use various colors to indicate different situations. You can use <code>green</code>, <code>red</code>, <code>blue</code> or custom defined colors. Default color is blue.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.color }}</i-code>
            </Demo>
            <Demo title="Last Item">
                <div slot="demo">
                    <Timeline pending>
                        <Timeline-item>Version 1.0 release</Timeline-item>
                        <Timeline-item>Version 2.0 release</Timeline-item>
                        <Timeline-item>Version 3.0 release</Timeline-item>
                        <Timeline-item><a href="#">See more</a></Timeline-item>
                    </Timeline>
                </div>
                <div slot="desc">
                    <p>Passing a <code>pending</code> property marks the last item as a ghost node, indicating incompleteness.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.pending }}</i-code>
            </Demo>
            <Demo title="Custom Timeline Items">
                <div slot="demo">
                    <Timeline>
                        <Timeline-item color="green">
                            <Icon type="trophy" slot="dot"></Icon>
                            <span>Milestone version release</span>
                        </Timeline-item>
                        <Timeline-item>Version 1.0 release</Timeline-item>
                        <Timeline-item>Version 2.0 release</Timeline-item>
                        <Timeline-item>Version 3.0 release</Timeline-item>
                    </Timeline>
                </div>
                <div slot="desc">
                    <p>Accepts a slot to customize the timeline item's content, such as the icon.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.dot }}</i-code>
            </Demo>
            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Timeline props" h3></Anchor>
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
                            <td>pending</td>
                            <td>Indicates if the last item is a ghost node</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="TimelineItem props" h3></Anchor>
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
                            <td>color</td>
                            <td>Circle color. Can choose between <code>blue</code>, <code>red</code>, <code>green</code>, or custom defined.</td>
                            <td>String</td>
                            <td>blue</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="TimelineItem slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>dot</td>
                            <td>Custom defined timeline item content</td>
                        </tr>
                        <tr>
                            <td>None</td>
                            <td>Basic content</td>
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
    import Code from '../../code/timeline';
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
        }
    }
</script>