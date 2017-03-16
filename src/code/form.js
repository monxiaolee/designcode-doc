let code = {};

code.inline = `
<template>
    <i-form v-ref:form-inline :model="formInline" :rules="ruleInline" inline>
        <Form-item prop="user">
            <i-input type="text" :value.sync="formInline.user" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </i-input>
        </Form-item>
        <Form-item prop="password">
            <i-input type="password" :value.sync="formInline.password" placeholder="Password">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </i-input>
        </Form-item>
        <Form-item>
            <i-button type="primary" @click="handleSubmit('formInline')">登录</i-button>
        </Form-item>
    </i-form>
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
    <i-form :model="formItem" :label-width="80">
        <Form-item label="输入框">
            <i-input :value.sync="formItem.input" placeholder="请输入"></i-input>
        </Form-item>
        <Form-item label="选择器">
            <i-select :model.sync="formItem.select" placeholder="请选择">
                <i-option value="beijing">北京市</i-option>
                <i-option value="shanghai">上海市</i-option>
                <i-option value="shenzhen">深圳市</i-option>
            </i-select>
        </Form-item>
        <Form-item label="日期控件">
            <Row>
                <i-col span="11">
                    <Date-picker type="date" placeholder="选择日期" :value.sync="formItem.date"></Date-picker>
                </i-col>
                <i-col span="2" style="text-align: center">-</i-col>
                <i-col span="11">
                    <Time-picker type="time" placeholder="选择时间" :value.sync="formItem.time"></Time-picker>
                </i-col>
            </Row>
        </Form-item>
        <Form-item label="单选框">
            <Radio-group :model.sync="formItem.radio">
                <Radio value="male">男</Radio>
                <Radio value="female">女</Radio>
            </Radio-group>
        </Form-item>
        <Form-item label="多选框">
            <Checkbox-group :model.sync="formItem.checkbox">
                <Checkbox value="吃饭"></Checkbox>
                <Checkbox value="睡觉"></Checkbox>
                <Checkbox value="跑步"></Checkbox>
                <Checkbox value="看电影"></Checkbox>
            </Checkbox-group>
        </Form-item>
        <Form-item label="开关">
            <Switch :checked.sync="formItem.switch" size="large">
                <span slot="open">开启</span>
                <span slot="close">关闭</span>
            </Switch>
        </Form-item>
        <Form-item label="滑块">
            <Slider :value.sync="formItem.slider" range></Slider>
        </Form-item>
        <Form-item label="文本域">
            <i-input :value.sync="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></i-input>
        </Form-item>
        <Form-item>
            <i-button type="primary">提交</i-button>
            <i-button type="ghost" style="margin-left: 8px">取消</i-button>
        </Form-item>
    </i-form>
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
    <i-form :model="formLeft" label-position="left" :label-width="100">
        <Form-item label="标题">
            <i-input :value.sync="formLeft.input1"></i-input>
        </Form-item>
        <Form-item label="标题名称">
            <i-input :value.sync="formLeft.input2"></i-input>
        </Form-item>
        <Form-item label="标题名称对齐">
            <i-input :value.sync="formLeft.input3"></i-input>
        </Form-item>
    </i-form>
    <i-form :model="formRight" label-position="right" :label-width="100">
        <Form-item label="标题">
            <i-input :value.sync="formRight.input1"></i-input>
        </Form-item>
        <Form-item label="标题名称">
            <i-input :value.sync="formRight.input2"></i-input>
        </Form-item>
        <Form-item label="标题名称对齐">
            <i-input :value.sync="formRight.input3"></i-input>
        </Form-item>
    </i-form>
    <i-form :model="formTop" label-position="top">
        <Form-item label="标题">
            <i-input :value.sync="formTop.input1"></i-input>
        </Form-item>
        <Form-item label="标题名称">
            <i-input :value.sync="formTop.input2"></i-input>
        </Form-item>
        <Form-item label="标题名称对齐">
            <i-input :value.sync="formTop.input3"></i-input>
        </Form-item>
    </i-form>
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
    <i-form v-ref:form-validate :model="formValidate" :rules="ruleValidate" :label-width="80">
        <Form-item label="姓名" prop="name">
            <i-input :value.sync="formValidate.name" placeholder="请输入姓名"></i-input>
        </Form-item>
        <Form-item label="邮箱" prop="mail">
            <i-input :value.sync="formValidate.mail" placeholder="请输入邮箱"></i-input>
        </Form-item>
        <Form-item label="城市" prop="city">
            <i-select :model.sync="formValidate.city" placeholder="请选择所在地">
                <i-option value="beijing">北京市</i-option>
                <i-option value="shanghai">上海市</i-option>
                <i-option value="shenzhen">深圳市</i-option>
            </i-select>
        </Form-item>
        <Form-item label="选择日期">
            <Row>
                <i-col span="11">
                    <Form-item prop="date">
                        <Date-picker type="date" placeholder="选择日期" :value.sync="formValidate.date"></Date-picker>
                    </Form-item>
                </i-col>
                <i-col span="2" style="text-align: center">-</i-col>
                <i-col span="11">
                    <Form-item prop="time">
                        <Time-picker type="time" placeholder="选择时间" :value.sync="formValidate.time"></Time-picker>
                    </Form-item>
                </i-col>
            </Row>
        </Form-item>
        <Form-item label="性别" prop="gender">
            <Radio-group :model.sync="formValidate.gender">
                <Radio value="male">男</Radio>
                <Radio value="female">女</Radio>
            </Radio-group>
        </Form-item>
        <Form-item label="爱好" prop="interest">
            <Checkbox-group :model.sync="formValidate.interest">
                <Checkbox value="吃饭"></Checkbox>
                <Checkbox value="睡觉"></Checkbox>
                <Checkbox value="跑步"></Checkbox>
                <Checkbox value="看电影"></Checkbox>
            </Checkbox-group>
        </Form-item>
        <Form-item label="介绍" prop="desc">
            <i-input :value.sync="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></i-input>
        </Form-item>
        <Form-item>
            <i-button type="primary" @click="handleSubmit('formValidate')">提交</i-button>
            <i-button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</i-button>
        </Form-item>
    </i-form>
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
    <i-form v-ref:form-custom :model="formCustom" :rules="ruleCustom" :label-width="80">
        <Form-item label="密码" prop="passwd">
            <i-input type="password" :value.sync="formCustom.passwd"></i-input>
        </Form-item>
        <Form-item label="确认密码" prop="passwdCheck">
            <i-input type="password" :value.sync="formCustom.passwdCheck"></i-input>
        </Form-item>
        <Form-item label="年龄" prop="age">
            <i-input type="text" :value.sync="formCustom.age" number></i-input>
        </Form-item>
        <Form-item>
            <i-button type="primary" @click="handleSubmit('formCustom')">提交</i-button>
            <i-button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">重置</i-button>
        </Form-item>
    </i-form>
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
    <i-form v-ref:form-dynamic :model="formDynamic" :label-width="80">
        <Form-item
            v-for="item in formDynamic.items"
            :label="'项目' + ($index + 1)"
            :prop="'items.' + $index + '.value'"
            :rules="{required: true, message: '项目' + ($index + 1) +'不能为空', trigger: 'blur'}">
            <Row>
                <i-col span="18">
                    <i-input type="text" :value.sync="item.value" placeholder="请输入..."></i-input>
                </i-col>
                <i-col span="4" offset="1">
                    <i-button type="ghost" @click="handleRemove(item)">删除</i-button>
                </i-col>
            </Row>
        </Form-item>
        <Form-item>
            <Row>
                <i-col span="12">
                    <i-button type="dashed" long @click="handleAdd" icon="plus-round">新增</i-button>
                </i-col>
            </Row>
        </Form-item>
        <Form-item>
            <i-button type="primary" @click="handleSubmit('formDynamic')">提交</i-button>
            <i-button type="ghost" @click="handleReset('formDynamic')" style="margin-left: 8px">重置</i-button>
        </Form-item>
    </i-form>
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
            handleRemove (item) {
                this.formDynamic.items.$remove(item);
            }
        }
    }
</script>
`;

export default code;