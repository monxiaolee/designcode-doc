<template>
    <i-article>
        <article>
            <h1>Form 表单</h1>
            <Anchor title="概述" h2></Anchor>
            <p>具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。</p>
            <blockquote>注意：非 template/render 模式下，需使用 <code>i-form</code>。</blockquote>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="行内表单">
                <div slot="demo">
                    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                        <FormItem prop="user">
                            <Input type="text" v-model="formInline.user" placeholder="Username">
                                <Icon type="ios-person-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="formInline.password" placeholder="Password">
                                <Icon type="ios-locked-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
                        </FormItem>
                    </Form>
                </div>
                <div slot="desc">
                    <p>设置属性 <code>inline</code>，表单元素可以水平排列。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.inline }}</i-code>
            </Demo>
            <Demo title="表单控件">
                <div slot="demo">
                    <Form :model="formItem" :label-width="80">
                        <FormItem label="输入框">
                            <Input v-model="formItem.input" placeholder="请输入"></Input>
                        </FormItem>
                        <FormItem label="选择器">
                            <Select v-model="formItem.select" placeholder="请选择">
                                <Option value="beijing">北京市</Option>
                                <Option value="shanghai">上海市</Option>
                                <Option value="shenzhen">深圳市</Option>
                            </Select>
                        </FormItem>
                        <FormItem label="日期控件">
                            <Row>
                                <Col span="11">
                                    <DatePicker type="date" placeholder="选择日期" v-model="formItem.date"></DatePicker>
                                </Col>
                                <Col span="2" style="text-align: center">-</Col>
                                <Col span="11">
                                    <TimePicker type="time" placeholder="选择时间" v-model="formItem.time"></TimePicker>
                                </Col>
                            </Row>
                        </FormItem>
                        <FormItem label="单选框">
                            <RadioGroup v-model="formItem.radio">
                                <Radio label="male">男</Radio>
                                <Radio label="female">女</Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem label="多选框">
                            <CheckboxGroup v-model="formItem.checkbox">
                                <Checkbox label="吃饭"></Checkbox>
                                <Checkbox label="睡觉"></Checkbox>
                                <Checkbox label="跑步"></Checkbox>
                                <Checkbox label="看电影"></Checkbox>
                            </CheckboxGroup>
                        </FormItem>
                        <FormItem label="开关">
                            <i-switch v-model="formItem.switch" size="large">
                                <span slot="open">开启</span>
                                <span slot="close">关闭</span>
                            </i-switch>
                        </FormItem>
                        <FormItem label="滑块">
                            <Slider v-model="formItem.slider" range></Slider>
                        </FormItem>
                        <FormItem label="文本域">
                            <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary">提交</Button>
                            <Button type="ghost" style="margin-left: 8px">取消</Button>
                        </FormItem>
                    </Form>
                </div>
                <div slot="desc">
                    <p>在 <code>Form</code> 内，每个表单域由 <code>FormItem</code> 组成，可包含的控件有：Input、Radio、Checkbox、Switch、Select、Slider、DatePicker、TimePicker、Cascader、Transfer、InputNumber、Rate、Upload、AutoComplete、ColorPicker。</p>
                    <p>给 <code>FormItem</code> 设置属性 <code>label</code> 可以显示表单域的标签，需要给 Form 设置 <code>label-width</code>。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.item }}</i-code>
            </Demo>
            <Demo title="对齐方式">
                <div slot="demo">
                    <Form :model="formLeft" label-position="left" :label-width="100">
                        <FormItem label="标题">
                            <Input v-model="formLeft.input1"></Input>
                        </FormItem>
                        <FormItem label="标题名称">
                            <Input v-model="formLeft.input2"></Input>
                        </FormItem>
                        <FormItem label="标题名称对齐">
                            <Input v-model="formLeft.input3"></Input>
                        </FormItem>
                    </Form>
                    <Form :model="formRight" label-position="right" :label-width="100">
                        <FormItem label="标题">
                            <Input v-model="formRight.input1"></Input>
                        </FormItem>
                        <FormItem label="标题名称">
                            <Input v-model="formRight.input2"></Input>
                        </FormItem>
                        <FormItem label="标题名称对齐">
                            <Input v-model="formRight.input3"></Input>
                        </FormItem>
                    </Form>
                    <Form :model="formTop" label-position="top">
                        <FormItem label="标题">
                            <Input v-model="formTop.input1"></Input>
                        </FormItem>
                        <FormItem label="标题名称">
                            <Input v-model="formTop.input2"></Input>
                        </FormItem>
                        <FormItem label="标题名称对齐">
                            <Input v-model="formTop.input3"></Input>
                        </FormItem>
                    </Form>
                </div>
                <div slot="desc">
                    <p>设置属性 <code>label-position</code>，可以改变表单域标签的位置，left 为左对齐，right 为右对齐，top 会置于表单域顶部。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.position }}</i-code>
            </Demo>
            <Demo title="表单验证">
                <div slot="demo">
                    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                        <FormItem label="姓名" prop="name">
                            <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
                        </FormItem>
                        <FormItem label="邮箱" prop="mail">
                            <Input v-model="formValidate.mail" placeholder="请输入邮箱"></Input>
                        </FormItem>
                        <FormItem label="城市" prop="city">
                            <Select v-model="formValidate.city" placeholder="请选择所在地">
                                <Option value="beijing">北京市</Option>
                                <Option value="shanghai">上海市</Option>
                                <Option value="shenzhen">深圳市</Option>
                            </Select>
                        </FormItem>
                        <FormItem label="选择日期">
                            <Row>
                                <Col span="11">
                                    <FormItem prop="date">
                                        <DatePicker type="date" placeholder="选择日期" v-model="formValidate.date"></DatePicker>
                                    </FormItem>
                                </Col>
                                <Col span="2" style="text-align: center">-</Col>
                                <Col span="11">
                                    <FormItem prop="time">
                                        <TimePicker type="time" placeholder="选择时间" v-model="formValidate.time"></TimePicker>
                                    </FormItem>
                                </Col>
                            </Row>
                        </FormItem>
                        <FormItem label="性别" prop="gender">
                            <RadioGroup v-model="formValidate.gender">
                                <Radio label="male">男</Radio>
                                <Radio label="female">女</Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem label="爱好" prop="interest">
                            <CheckboxGroup v-model="formValidate.interest">
                                <Checkbox label="吃饭"></Checkbox>
                                <Checkbox label="睡觉"></Checkbox>
                                <Checkbox label="跑步"></Checkbox>
                                <Checkbox label="看电影"></Checkbox>
                            </CheckboxGroup>
                        </FormItem>
                        <FormItem label="介绍" prop="desc">
                            <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                            <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
                        </FormItem>
                    </Form>
                </div>
                <div slot="desc">
                    <p>Form 组件基于 <a href="https://github.com/yiminghe/async-validator" target="_blank"><Icon type="social-github"></Icon> async-validator</a> 实现的数据验证，给 Form 设置属性 <code>rules</code>，同时给需要验证的 FormItem 设置属性 <code>prop</code> 指向对应字段即可。</p>
                    <p>完整的验证规则请参照开源项目 async-validator。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.validate }}</i-code>
            </Demo>
            <Demo title="自定义验证">
                <div slot="demo">
                    <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
                        <FormItem label="密码" prop="passwd">
                            <Input type="password" v-model="formCustom.passwd"></Input>
                        </FormItem>
                        <FormItem label="确认密码" prop="passwdCheck">
                            <Input type="password" v-model="formCustom.passwdCheck"></Input>
                        </FormItem>
                        <FormItem label="年龄" prop="age">
                            <Input type="text" v-model="formCustom.age" number></Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" @click="handleSubmit('formCustom')">提交</Button>
                            <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>
                        </FormItem>
                    </Form>
                </div>
                <div slot="desc">
                    <p>可以完全自定义验证规则来完成更复杂的验证，比如某些数据需要在服务端验证时。示例展示的是密码的二次确认及模拟的一个异步验证。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.custom }}</i-code>
            </Demo>
            <Demo title="动态增减表单项">
                <div slot="demo">
                    <Form ref="formDynamic" :model="formDynamic" :label-width="80">
                        <FormItem
                            v-for="(item, index) in formDynamic.items"
                            :key="index"
                            :label="'项目' + (index + 1)"
                            :prop="'items.' + index + '.value'"
                            :rules="{required: true, message: '项目' + (index + 1) +'不能为空', trigger: 'blur'}">
                            <Row>
                                <Col span="18">
                                    <Input type="text" v-model="item.value" placeholder="请输入..."></Input>
                                </Col>
                                <Col span="4" offset="1">
                                    <Button type="ghost" @click="handleRemove(index)">删除</Button>
                                </Col>
                            </Row>
                        </FormItem>
                        <FormItem>
                            <Row>
                                <Col span="12">
                                    <Button type="dashed" long @click="handleAdd" icon="plus-round">新增</Button>
                                </Col>
                            </Row>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" @click="handleSubmit('formDynamic')">提交</Button>
                            <Button type="ghost" @click="handleReset('formDynamic')" style="margin-left: 8px">重置</Button>
                        </FormItem>
                    </Form>
                </div>
                <div slot="desc">
                    <p>当需要动态维护 FormItem 时，也可以直接给 FormItem 设置属性 <code>rules</code> 来单独为该域做验证。</p>
                    <p>动态设置 FormItem 的 prop 属性时，会依据上层的 Form 组件的 model 来获取，查看示例代码。</p>
                    <p>FormItem 还可以独立设置 required、error 等属性，详见 API。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.dynamic }}</i-code>
            </Demo>
            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Form props" h3></Anchor>
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
                            <td>表单数据对象</td>
                            <td>Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>rules</td>
                            <td>表单验证规则，具体配置查看 <a href="https://github.com/yiminghe/async-validator" target="_blank"><Icon type="social-github"></Icon> async-validator</a></td>
                            <td>Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>inline</td>
                            <td>是否开启行内表单模式</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>label-position</td>
                            <td>表单域标签的位置，可选值为 <code>left</code>、<code>right</code>、<code>top</code></td>
                            <td>String</td>
                            <td>right</td>
                        </tr>
                        <tr>
                            <td>label-width</td>
                            <td>表单域标签的宽度，所有的 FormItem 都会继承 Form 组件的 label-width 的值</td>
                            <td>Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>show-message</td>
                            <td>是否显示校验错误信息</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Form methods" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>方法名</th>
                            <th>说明</th>
                            <th>参数</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>validate</td>
                            <td>对整个表单进行校验，参数为检验完的回调，会返回一个 Boolean 表示成功与失败</td>
                            <td>callback</td>
                        </tr>
                        <tr>
                            <td>validateField</td>
                            <td>对部分表单字段进行校验的方法，参数1为需校验的 prop，参数2为检验完回调，返回错误信息</td>
                            <td>callback</td>
                        </tr>
                        <tr>
                            <td>resetFields</td>
                            <td>对整个表单进行重置，将所有字段值重置为空并移除校验结果</td>
                            <td>无</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="FormItem props" h3></Anchor>
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
                            <td>prop</td>
                            <td>对应表单域 model 里的字段</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>label</td>
                            <td>标签文本</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>label-width</td>
                            <td>表单域标签的的宽度</td>
                            <td>Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>required</td>
                            <td>是否必填，如不设置，则会根据校验规则自动生成</td>
                            <td>Boolean</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>rules</td>
                            <td>表单验证规则</td>
                            <td>Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>error</td>
                            <td>表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>show-message</td>
                            <td>是否显示校验错误信息</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="FormItem slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>无</td>
                            <td>内容</td>
                        </tr>
                        <tr>
                            <td>label</td>
                            <td>label 内容</td>
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
    import Code from '../../code/form';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            Anchor
        },
        data () {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.formCustom.passwdCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formCustom.validateField('passwdCheck');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.formCustom.passwd) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            const validateAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                // 模拟异步验证效果
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 18) {
                            callback(new Error('必须年满18岁'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };

            return {
                code: Code,
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                },
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                },
                formLeft: {
                    input1: '',
                    input2: '',
                    input3: ''
                },
                formRight: {
                    input1: '',
                    input2: '',
                    input3: ''
                },
                formTop: {
                    input1: '',
                    input2: '',
                    input3: ''
                },
                formValidate: {
                    name: '',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    date: '',
                    time: '',
                    desc: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '姓名不能为空', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: '邮箱不能为空', trigger: 'blur' },
                        { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
                    ],
                    city: [
                        { required: true, message: '请选择城市', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: '请选择性别', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change' },
                        { type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
                    ],
                    time: [
                        { required: true, type: 'date', message: '请选择时间', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请输入个人介绍', trigger: 'blur' },
                        { type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur' }
                    ]
                },
                formCustom: {
                    passwd: '',
                    passwdCheck: '',
                    age: ''
                },
                ruleCustom: {
                    passwd: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    passwdCheck: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ],
                    age: [
                        { validator: validateAge, trigger: 'blur' }
                    ]
                },
                formDynamic: {
                    items: [
                        {
                            value: ''
                        }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            handleAdd () {
                this.formDynamic.items.push({
                    value: ''
                });
            },
            handleRemove (index) {
                this.formDynamic.items.splice(index, 1);
            }
        }
    }
</script>