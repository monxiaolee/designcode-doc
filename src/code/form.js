let code = {};

code.inline = `
<template>
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
</template>
<script>
    export default {
        data () {
            return {
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
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            }
        }
    }
</script>
`;

code.item = `
<template>
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
</template>
<script>
    export default {
        data () {
            return {
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
                }
            }
        }
    }
</script>
`;

code.position = `
<template>
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
</template>
<script>
    export default {
        data () {
            return {
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
                }
            }
        }
    }
</script>
`;

code.validate = `
<template>
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
</template>
<script>
    export default {
        data () {
            return {
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
            }
        }
    }
</script>
`;

code.custom = `
<template>
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
</template>
<script>
    export default {
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
            }
        }
    }
</script>
`;

code.dynamic = `
<template>
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
</template>
<script>
    export default {
        data () {
            return {
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
`;

export default code;