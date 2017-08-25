<template>
    <i-article>
        <article>
            <h1>InputNumber</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>Input a range of standard number by mouse or keyboard.</p>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Basic Usage">
                <div slot="demo">
                    <InputNumber :max="10" :min="1" v-model="value1"></InputNumber>
                </div>
                <div slot="desc">
                    <p>Change the number by inputing, clicking or tapping up / down button.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="Decimal">
                <div slot="demo">
                    <InputNumber :max="10" :min="1" :step="1.2" v-model="value2"></InputNumber>
                </div>
                <div slot="desc">
                    <p>Set <code>step</code> prop to control the step length of each change.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.step }}</i-code>
            </Demo>
            <Demo title="Size">
                <div slot="demo">
                    <InputNumber v-model="value3" size="small"></InputNumber>
                    <InputNumber v-model="value4"></InputNumber>
                    <InputNumber v-model="value5" size="large"></InputNumber>
                </div>
                <div slot="desc">
                    <p>Change the size of the input block to large or small by setting <code>size</code> prop to <code>large</code> or <code>small</code>. Default is medium size.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.size }}</i-code>
            </Demo>
            <Demo title="Disabled">
                <div slot="demo">
                    <InputNumber v-model="value6" :disabled="disabled"></InputNumber>
                    <Button type="primary" @click="disabled = !disabled">Toggle Disabled</Button>
                </div>
                <div slot="desc">
                    <p>Set <code>disabled</code> prop to disable InputNumber. Click the button to change disable status.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.disabled }}</i-code>
            </Demo>
            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="InputNumber props" h3></Anchor>
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
                            <td>max</td>
                            <td>Maximum value.</td>
                            <td>Number</td>
                            <td>Infinity</td>
                        </tr>
                        <tr>
                            <td>min</td>
                            <td>Minimum value.</td>
                            <td>Number</td>
                            <td>-Infinity</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>Current value, use v-model to enable a two-way binding.</td>
                            <td>Number</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>step</td>
                            <td>每次改变的步伐，可以是小数</td>
                            <td>Number</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>Size of InputNumber. Optional value: <code>large</code>, <code>small</code>, <code>default</code> or leave blank.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>Set disable status.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="InputNumber events" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Event Name</th>
                            <th>Description</th>
                            <th>Return Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>on-change</td>
                            <td>Callback when number changes. Return the current value.</td>
                            <td>current value</td>
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
    import Code from '../../code/input-number';
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
                code: Code,
                disabled: true,
                value1: 1,
                value2: 1,
                value3: 2,
                value4: 2,
                value5: 2,
                value6: 1
            }
        }
    }
</script>