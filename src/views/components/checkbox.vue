<style scoped>
    .ivu-icon{
        font-size: 14px;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>Checkbox 多选框</h1>
            <Anchor title="概述" h2></Anchor>
            <p>基本组件-多选框。主要用于一组可选项多项选择，或者单独用于标记切换某种状态。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="单独使用">
                <div slot="demo">
                    <Checkbox :checked.sync="single">Checkbox</Checkbox>
                    <p class="demo-data">{{ single | json }}</p>
                </div>
                <div slot="desc">
                    <p>通过设置<code>checked</code>来标记是否选择，因为组件内部是使用<code>v-model</code>来绑定，所以需要将<code>checked</code>设置<code>.sync</code>实现数据的双向绑定，否则在改变状态时，使用者的数据并没有变化。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.single }}</i-code>
            </Demo>
            <Demo title="组合使用">
                <div slot="demo">
                    <Checkbox-group :model.sync="social">
                        <Checkbox value="twitter">
                            <Icon type="social-twitter"></Icon>
                            <span>Twitter</span>
                        </Checkbox>
                        <Checkbox value="facebook">
                            <Icon type="social-facebook"></Icon>
                            <span>Facebook</span>
                        </Checkbox>
                        <Checkbox value="github">
                            <Icon type="social-github"></Icon>
                            <span>Github</span>
                        </Checkbox>
                        <Checkbox value="snapchat">
                            <Icon type="social-snapchat"></Icon>
                            <span>Snapchat</span>
                        </Checkbox>
                    </Checkbox-group>
                    <p class="demo-data">{{ social | json }}</p>
                    <Checkbox-group :model.sync="fruit">
                        <Checkbox value="香蕉"></Checkbox>
                        <Checkbox value="苹果"></Checkbox>
                        <Checkbox value="西瓜"></Checkbox>
                    </Checkbox-group>
                    <p class="demo-data">{{ fruit | json }}</p>
                </div>
                <div slot="desc">
                    <p>使用<code>Checkbox-group</code>配合数组来生成组合。在组合使用时，<code>Checkbox</code>不再根据<code>checked</code>参数来判断状态，而是根据传入的数组和<code>value</code>的值自动判断。需要将<code>model</code>设置<code>.sync</code>实现数据的双向绑定，否则在改变状态时，使用者的数据并没有变化。每个 Checkbox 的内容可以自定义，如不填写则默认使用 value 的值。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.group }}</i-code>
            </Demo>
            <Demo title="不可用">
                <div slot="demo">
                    <Checkbox :checked.sync="disabledSingle" disabled>Checkbox</Checkbox>
                    <p class="demo-data">{{ disabledSingle | json }}</p>
                    <Checkbox-group :model.sync="disabledGroup">
                        <Checkbox value="香蕉" disabled></Checkbox>
                        <Checkbox value="苹果" disabled></Checkbox>
                        <Checkbox value="西瓜"></Checkbox>
                    </Checkbox-group>
                    <p class="demo-data">{{ disabledGroup | json }}</p>
                </div>
                <div slot="desc">
                    <p>通过设置<code>disabled</code>属性来禁用多选框。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.disabled }}</i-code>
            </Demo>
            <Demo title="与其它组件通信">
                <div slot="demo">
                    <Checkbox :checked.sync="checked" :disabled="disabled">
                        <span v-if="checked">选中</span>
                        <span v-else>取消</span>
                         - 
                        <span v-if="!disabled">可用</span>
                        <span v-else>不可用</span>
                    </Checkbox>
                    <br>
                    <i-button type="primary" @click="checked = !checked">
                        <span v-if="!checked">选中</span>
                        <span v-else>取消</span>
                    </i-button>
                    <i-button type="primary" @click="disabled = !disabled">
                        <span v-if="disabled">可用</span>
                        <span v-else>不可用</span>
                    </i-button>
                </div>
                <div slot="desc">
                    <p>与其它组件进行数据联动。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.communication }}</i-code>
            </Demo>
            <Demo title="全选">
                <div slot="demo">
                    <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
                        <Checkbox
                            :indeterminate="indeterminate"
                            :checked="checkAll"
                            @click.prevent="handleCheckAll">全选</Checkbox>
                    </div>
                    <Checkbox-group :model.sync="checkAllGroup" @on-change="checkAllGroupChange">
                        <Checkbox value="香蕉"></Checkbox>
                        <Checkbox value="苹果"></Checkbox>
                        <Checkbox value="西瓜"></Checkbox>
                    </Checkbox-group>
                </div>
                <div slot="desc">
                    <p>在实现全选效果时，你可能会用到 <code>indeterminate</code> 属性。示例代码只是一种写法，业务中可以用更多的方法，比如计算属性。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.indeterminate }}</i-code>
            </Demo>
            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Checkbox props" h3></Anchor>
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
                            <td>checked</td>
                            <td>只在单独使用时有效。绑定数据，需要使用<code>.sync</code>双向绑定，否则改变状态时并不能改变使用者的数据</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>只在组合使用时有效。指定当前选项的value值，组合会自动判断是否选中</td>
                            <td>String | Number | Boolean</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>是否禁用当前项</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>indeterminate</td>
                            <td>设置 indeterminate 状态，只负责样式控制</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Checkbox events" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>事件名</th>
                            <th>说明</th>
                            <th>返回值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>on-change</td>
                            <td>只在单独使用时有效。在选项状态发生改变时触发，通过修改外部的数据改变时不会触发</td>
                            <td>true | false</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="CheckboxGroup props" h3></Anchor>
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
                            <td>model</td>
                            <td>指定选中项目的集合，需要使用<code>.sync</code>双向绑定，否则改变状态时并不能改变使用者的数据<a href="https://github.com/vuejs/vue/issues/3307" target="_blank">#3307</a></td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="CheckboxGroup events" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>事件名</th>
                            <th>说明</th>
                            <th>返回值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>on-change</td>
                            <td>在选项状态发生改变时触发，返回已选中的数组。通过修改外部的数据改变时不会触发</td>
                            <td>[...]</td>
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
    import Code from '../../code/checkbox';
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
                single: false,
                social: ['facebook', 'github'],
                fruit: ['苹果'],
                disabledSingle: true,
                disabledGroup: ['苹果'],
                checked: true,
                disabled: false,
                indeterminate: true,
                checkAll: false,
                checkAllGroup: ['香蕉', '西瓜']
            }
        },
        methods: {
            handleCheckAll () {
                if (this.indeterminate) {
                    this.checkAll = false;
                } else {
                    this.checkAll = !this.checkAll;
                }
                this.indeterminate = false;

                if (this.checkAll) {
                    this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
                } else {
                    this.checkAllGroup = [];
                }
            },
            checkAllGroupChange (data) {
                if (data.length === 3) {
                    this.indeterminate = false;
                    this.checkAll = true;
                } else if (data.length > 0) {
                    this.indeterminate = true;
                    this.checkAll = false;
                } else {
                    this.indeterminate = false;
                    this.checkAll = false;
                }
            }
        }
    }
</script>