<template>
    <i-article>
        <article>
            <h1>Form</h1>
            <Anchor title="Brief Introduction" h2></Anchor>
            <p>Forms with abilities of data collecting, validating, and submitting, which includes checkbox, radio, dropdown etc.</p>
            <blockquote>Attention: <code>i-form</code> is needed if not under template/render mode.</blockquote>
            <Anchor title="Examples" h2></Anchor>
            <Demo title="Inline Form">
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
                    <p>Set  <code>inline</code> prop to let Form arrange vertically.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.inline }}</i-code>
            </Demo>
            <Demo title="Form Control">
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
                    <p>In <code>Form</code>, each form consists of <code>FormItem</code>s. Available Control: Input, Radio, Checkbox, Switch, Select, Slider, DatePicker, TimePicker, Cascader, Transfer, InputNumber, Rate, Upload, AutoComplete, ColorPicker.</p>
                    <p>Setting <code>label</code> prop to <code>FormItem</code> can display the label of the form. <code>label-width</code> needs to be set on Form.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.item }}</i-code>
            </Demo>
            <Demo title="Alignment">
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
                    <p>Set <code>label-position</code> prop to change the position of the label. Optional: left, right, top.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.position }}</i-code>
            </Demo>
            <Demo title="Form Validation">
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
                    <p>The validation module of Form is based on <a href="https://github.com/yiminghe/async-validator" target="_blank"><Icon type="social-github"></Icon> async-validator</a>. Set <code>rules</code> to Form and set <code>prop</code> prop to FormItem that needs to be validated.</p>
                    <p>For complete validation rules, please visit async-validator project site.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.validate }}</i-code>
            </Demo>
            <Demo title="Custom Validation">
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
                    <p>You can customize your own rule to complete complex validation like data that needs to be validated on server side. The demo shows a rechecking on password and a simulation of async validation.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.custom }}</i-code>
            </Demo>
            <Demo title="Dynamic Adding / Removing">
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
                    <p>When you need to maintain FormItem dynamiclly, you can directly set <code>rules</code> prop to FormItem to validate the field individually.</p>
                    <p>When setting prop prop dynamiclly, FormItem will rely on its parent Form's model to get its content. Details on demo code.</p>
                    <p>You can set required, error or some other props on FormItem. Details on API Doc.</p>
                </div>
                <i-code lang="html" slot="code">{{ code.dynamic }}</i-code>
            </Demo>
            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="Form props" h3></Anchor>
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
                            <td>model</td>
                            <td>Form's data object.</td>
                            <td>Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>rules</td>
                            <td>Validation rules of Form. For more details, visit <a href="https://github.com/yiminghe/async-validator" target="_blank"><Icon type="social-github"></Icon> async-validator</a>.</td>
                            <td>Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>inline</td>
                            <td>Enable inline-form mode or not.</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>label-position</td>
                            <td>The position of Form's labels. Optional value: <code>left</code>, <code>right</code>, <code>top</code></td>
                            <td>String</td>
                            <td>right</td>
                        </tr>
                        <tr>
                            <td>label-width</td>
                            <td>Width of Form's labels. All Form-items in Form will inherit the value.</td>
                            <td>Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>show-message</td>
                            <td>Show validation failing info or not.</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="Form methods" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Method Name</th>
                            <th>Description</th>
                            <th>Parameter</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>validate</td>
                            <td>Validate the whole form. The parameter is the callback function after validating. It'll return a Boolean value to notice success of failure.</td>
                            <td>callback</td>
                        </tr>
                        <tr>
                            <td>validateField</td>
                            <td>Validate some field of the form, arg 1 is prop that needs to be validated, arg2 is callback function. It'll return the error message.</td>
                            <td>callback</td>
                        </tr>
                        <tr>
                            <td>resetFields</td>
                            <td>Reset the whole form. Remove the content of every field and reset the validation result.</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="FormItem props" h3></Anchor>
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
                            <td>prop</td>
                            <td>Target to the field in Form's model.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>label</td>
                            <td>Label text.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>label-width</td>
                            <td>Label width.</td>
                            <td>Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>required</td>
                            <td>Required or not. If not set, it'll be generated accroding to validation rules.</td>
                            <td>Boolean</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>rules</td>
                            <td>Validation rules.</td>
                            <td>Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>error</td>
                            <td>Error message of the form. Setting this prop will cause the validation state of the form changing to error, and the error message will be shown.</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>show-message</td>
                            <td>Show validation error data or not.</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="FormItem slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>-</td>
                            <td>content</td>
                        </tr>
                        <tr>
                            <td>label</td>
                            <td>Content of the label.</td>
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