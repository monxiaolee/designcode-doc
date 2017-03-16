let code = {};

code.base = `
<template>
    <Menu mode="horizontal" :theme="theme1" active-key="1">
        <Menu-item key="1">
            <Icon type="ios-paper"></Icon>
            内容管理
        </Menu-item>
        <Menu-item key="2">
            <Icon type="ios-people"></Icon>
            用户管理
        </Menu-item>
        <Submenu key="3">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                统计分析
            </template>
            <Menu-group title="使用">
                <Menu-item key="3-1">新增和启动</Menu-item>
                <Menu-item key="3-2">活跃分析</Menu-item>
                <Menu-item key="3-3">时段分析</Menu-item>
            </Menu-group>
            <Menu-group title="留存">
                <Menu-item key="3-4">用户留存</Menu-item>
                <Menu-item key="3-5">流失用户</Menu-item>
            </Menu-group>
        </Submenu>
        <Menu-item key="4">
            <Icon type="settings"></Icon>
            综合设置
        </Menu-item>
    </Menu>
    <br>
    <p>切换主题</p>
    <Radio-group :model.sync="theme1">
        <Radio value="light"></Radio>
        <Radio value="dark"></Radio>
        <Radio value="primary"></Radio>
    </Radio-group>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'light'
            }
        }
    }
</script>
`;

code.vertical = `
<template>
    <Row>
        <i-col span="8">
            <Menu :theme="theme2">
                <Submenu key="1">
                    <template slot="title">
                        <Icon type="ios-paper"></Icon>
                        内容管理
                    </template>
                    <Menu-item key="1-1">文章管理</Menu-item>
                    <Menu-item key="1-2">评论管理</Menu-item>
                    <Menu-item key="1-3">举报管理</Menu-item>
                </Submenu>
                <Submenu key="2">
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        用户管理
                    </template>
                    <Menu-item key="2-1">新增用户</Menu-item>
                    <Menu-item key="2-2">活跃用户</Menu-item>
                </Submenu>
                <Submenu key="3">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        统计分析
                    </template>
                    <Menu-group title="使用">
                        <Menu-item key="3-1">新增和启动</Menu-item>
                        <Menu-item key="3-2">活跃分析</Menu-item>
                        <Menu-item key="3-3">时段分析</Menu-item>
                    </Menu-group>
                    <Menu-group title="留存">
                        <Menu-item key="3-4">用户留存</Menu-item>
                        <Menu-item key="3-5">流失用户</Menu-item>
                    </Menu-group>
                </Submenu>
            </Menu>
        </i-col>
        <i-col span="8">
            <Menu :theme="theme2" active-key="1-2" :open-keys="['1']">
                <Submenu key="1">
                    <template slot="title">
                        <Icon type="ios-paper"></Icon>
                        内容管理
                    </template>
                    <Menu-item key="1-1">文章管理</Menu-item>
                    <Menu-item key="1-2">评论管理</Menu-item>
                    <Menu-item key="1-3">举报管理</Menu-item>
                </Submenu>
                <Submenu key="2">
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        用户管理
                    </template>
                    <Menu-item key="2-1">新增用户</Menu-item>
                    <Menu-item key="2-2">活跃用户</Menu-item>
                </Submenu>
                <Submenu key="3">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        统计分析
                    </template>
                    <Menu-group title="使用">
                        <Menu-item key="3-1">新增和启动</Menu-item>
                        <Menu-item key="3-2">活跃分析</Menu-item>
                        <Menu-item key="3-3">时段分析</Menu-item>
                    </Menu-group>
                    <Menu-group title="留存">
                        <Menu-item key="3-4">用户留存</Menu-item>
                        <Menu-item key="3-5">流失用户</Menu-item>
                    </Menu-group>
                </Submenu>
            </Menu>
        </i-col>
        <i-col span="8">
            <Menu :theme="theme2" :open-keys="['1']" accordion>
                <Submenu key="1">
                    <template slot="title">
                        <Icon type="ios-paper"></Icon>
                        内容管理
                    </template>
                    <Menu-item key="1-1">文章管理</Menu-item>
                    <Menu-item key="1-2">评论管理</Menu-item>
                    <Menu-item key="1-3">举报管理</Menu-item>
                </Submenu>
                <Submenu key="2">
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        用户管理
                    </template>
                    <Menu-item key="2-1">新增用户</Menu-item>
                    <Menu-item key="2-2">活跃用户</Menu-item>
                </Submenu>
                <Submenu key="3">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        统计分析
                    </template>
                    <Menu-group title="使用">
                        <Menu-item key="3-1">新增和启动</Menu-item>
                        <Menu-item key="3-2">活跃分析</Menu-item>
                        <Menu-item key="3-3">时段分析</Menu-item>
                    </Menu-group>
                    <Menu-group title="留存">
                        <Menu-item key="3-4">用户留存</Menu-item>
                        <Menu-item key="3-5">流失用户</Menu-item>
                    </Menu-group>
                </Submenu>
            </Menu>
        </i-col>
    </Row>
    <br>
    <p>切换主题</p>
    <Radio-group :model.sync="theme2">
        <Radio value="light"></Radio>
        <Radio value="dark"></Radio>
    </Radio-group>
</template>
<script>
    export default {
        data () {
            return {
                theme2: 'light'
            }
        }
    }
</script>
`;

code.group = `
<template>
    <Menu :theme="theme3" active-key="1">
        <Menu-group title="内容管理">
            <Menu-item key="1">
                <Icon type="document-text"></Icon>
                文章管理
            </Menu-item>
            <Menu-item key="2">
                <Icon type="chatbubbles"></Icon>
                评论管理
            </Menu-item>
        </Menu-group>
        <Menu-group title="统计分析">
            <Menu-item key="3">
                <Icon type="heart"></Icon>
                用户留存
            </Menu-item>
            <Menu-item key="4">
                <Icon type="heart-broken"></Icon>
                流失用户
            </Menu-item>
        </Menu-group>
    </Menu>
    <br>
    <p>切换主题</p>
    <Radio-group :model.sync="theme3">
        <Radio value="light"></Radio>
        <Radio value="dark"></Radio>
    </Radio-group>
</template>
<script>
    export default {
        data () {
            return {
                theme3: 'light'
            }
        }
    }
</script>
`;

export default code;