<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
    }
    .layout-assistant{
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #495060;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .layout-ceiling{
        background: #464c5b;
        padding: 10px 0;
        overflow: hidden;
    }
    .layout-ceiling-main{
        float: right;
        margin-right: 15px;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
</style>
<template>
    <i-article>
        <article>
            <h1>布局</h1>
            <p>布局和导航是产品的骨架，是页面的重要构成模式之一，是作为后续展开页面设计的基础，可以为产品奠定交互和视觉风格。</p>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="顶部导航" vertical hide-code>
                <div slot="demo">
                    <div class="layout">
                        <Menu mode="horizontal" theme="dark" active-name="1">
                            <div class="layout-logo"></div>
                            <div class="layout-nav">
                                <Menu-item name="1">
                                    <Icon type="ios-navigate"></Icon>
                                    导航一
                                </Menu-item>
                                <Menu-item name="2">
                                    <Icon type="ios-keypad"></Icon>
                                    导航二
                                </Menu-item>
                                <Menu-item name="3">
                                    <Icon type="ios-analytics"></Icon>
                                    导航三
                                </Menu-item>
                                <Menu-item name="4">
                                    <Icon type="ios-paper"></Icon>
                                    导航四
                                </Menu-item>
                            </div>
                        </Menu>
                        <Menu mode="horizontal" active-name="1">
                            <div class="layout-assistant">
                                <Menu-item name="1">二级导航</Menu-item>
                                <Menu-item name="2">二级导航</Menu-item>
                                <Menu-item name="3">二级导航</Menu-item>
                            </div>
                        </Menu>
                        <div class="layout-breadcrumb">
                            <Breadcrumb>
                                <Breadcrumb-item href="#">首页</Breadcrumb-item>
                                <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                                <Breadcrumb-item>某应用</Breadcrumb-item>
                            </Breadcrumb>
                        </div>
                        <div class="layout-content">
                            <div class="layout-content-main">内容区域</div>
                        </div>
                        <div class="layout-copy">
                            2011-2016 &copy; TalkingData
                        </div>
                    </div>
                </div>
                <div slot="desc">
                    <p>导航在顶部，有面包屑、正文的布局。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.top }}</i-code>
            </Demo>
            <Demo title="顶部导航+侧边栏" vertical hide-code>
                <div slot="demo">
                    <div class="layout">
                        <Menu mode="horizontal" theme="dark" active-name="1">
                            <div class="layout-logo"></div>
                            <div class="layout-nav">
                                <Menu-item name="1">
                                    <Icon type="ios-navigate"></Icon>
                                    导航一
                                </Menu-item>
                                <Menu-item name="2">
                                    <Icon type="ios-keypad"></Icon>
                                    导航二
                                </Menu-item>
                                <Menu-item name="3">
                                    <Icon type="ios-analytics"></Icon>
                                    导航三
                                </Menu-item>
                                <Menu-item name="4">
                                    <Icon type="ios-paper"></Icon>
                                    导航四
                                </Menu-item>
                            </div>
                        </Menu>
                        <Menu mode="horizontal" active-name="1">
                            <div class="layout-assistant">
                                <Menu-item name="1">二级导航</Menu-item>
                                <Menu-item name="2">二级导航</Menu-item>
                                <Menu-item name="3">二级导航</Menu-item>
                            </div>
                        </Menu>
                        <div class="layout-content">
                            <Row>
                                <i-col span="5">
                                    <Menu active-name="1-2" width="auto" :open-names="['1']">
                                        <Submenu name="1">
                                            <template slot="title">
                                                <Icon type="ios-navigate"></Icon>
                                                导航一
                                            </template>
                                            <Menu-item name="1-1">选项 1</Menu-item>
                                            <Menu-item name="1-2">选项 2</Menu-item>
                                            <Menu-item name="1-3">选项 3</Menu-item>
                                        </Submenu>
                                        <Submenu name="2">
                                            <template slot="title">
                                                <Icon type="ios-keypad"></Icon>
                                                导航二
                                            </template>
                                            <Menu-item name="2-1">选项 1</Menu-item>
                                            <Menu-item name="2-2">选项 2</Menu-item>
                                        </Submenu>
                                        <Submenu name="3">
                                            <template slot="title">
                                                <Icon type="ios-analytics"></Icon>
                                                导航三
                                            </template>
                                            <Menu-item name="3-1">选项 1</Menu-item>
                                            <Menu-item name="3-2">选项 2</Menu-item>
                                        </Submenu>
                                    </Menu>
                                </i-col>
                                <i-col span="19">
                                    <div class="layout-content-main">内容区域</div>
                                </i-col>
                            </Row>
                        </div>
                        <div class="layout-copy">
                            2011-2016 &copy; TalkingData
                        </div>
                    </div>
                </div>
                <div slot="desc">
                    <p>顶部导航并带有侧边栏。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.left }}</i-code>
            </Demo>
            <Demo title="侧边导航" vertical hide-code>
                <div slot="demo">
                    <div class="layout">
                        <Row type="flex">
                            <i-col span="5" class="layout-menu-left">
                                <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                                    <div class="layout-logo-left"></div>
                                    <Submenu name="1">
                                        <template slot="title">
                                            <Icon type="ios-navigate"></Icon>
                                            导航一
                                        </template>
                                        <Menu-item name="1-1">选项 1</Menu-item>
                                        <Menu-item name="1-2">选项 2</Menu-item>
                                        <Menu-item name="1-3">选项 3</Menu-item>
                                    </Submenu>
                                    <Submenu name="2">
                                        <template slot="title">
                                            <Icon type="ios-keypad"></Icon>
                                            导航二
                                        </template>
                                        <Menu-item name="2-1">选项 1</Menu-item>
                                        <Menu-item name="2-2">选项 2</Menu-item>
                                    </Submenu>
                                    <Submenu name="3">
                                        <template slot="title">
                                            <Icon type="ios-analytics"></Icon>
                                            导航三
                                        </template>
                                        <Menu-item name="3-1">选项 1</Menu-item>
                                        <Menu-item name="3-2">选项 2</Menu-item>
                                    </Submenu>
                                </Menu>
                            </i-col>
                            <i-col span="19">
                                <div class="layout-header"></div>
                                <div class="layout-breadcrumb">
                                    <Breadcrumb>
                                        <Breadcrumb-item href="#">首页</Breadcrumb-item>
                                        <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                                        <Breadcrumb-item>某应用</Breadcrumb-item>
                                    </Breadcrumb>
                                </div>
                                <div class="layout-content">
                                    <div class="layout-content-main">内容区域</div>
                                </div>
                                <div class="layout-copy">
                                    2011-2016 &copy; TalkingData
                                </div>
                            </i-col>
                        </Row>
                    </div>
                </div>
                <div slot="desc">
                    <p>左右结构，侧边导航。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.side }}</i-code>
            </Demo>
            <Demo title="吊顶" vertical hide-code>
                <div slot="demo">
                    <div class="layout">
                        <div class="layout-ceiling">
                            <div class="layout-ceiling-main">
                                <a href="#">注册登录</a> |
                                <a href="#">帮助中心</a> |
                                <a href="#">安全中心</a> |
                                <a href="#">服务大厅</a>
                            </div>
                        </div>
                        <div class="layout-header">
                            <div class="layout-logo"></div>
                        </div>
                        <div style="height: 200px"></div>
                        <div class="layout-copy">
                            2011-2016 &copy; TalkingData
                        </div>
                    </div>
                </div>
                <div slot="desc">
                    <p>顶部辅助菜单。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.ceiling }}</i-code>
            </Demo>
            <Demo title="可收起展开的侧边导航" vertical hide-code>
                <div slot="demo">
                    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
                        <Row type="flex">
                            <i-col :span="spanLeft" class="layout-menu-left">
                                <Menu active-name="1" theme="dark" width="auto">
                                    <div class="layout-logo-left"></div>
                                    <Menu-item name="1">
                                        <Icon type="ios-navigate" :size="iconSize"></Icon>
                                        <span class="layout-text">选项 1</span>
                                    </Menu-item>
                                    <Menu-item name="2">
                                        <Icon type="ios-keypad" :size="iconSize"></Icon>
                                        <span class="layout-text">选项 2</span>
                                    </Menu-item>
                                    <Menu-item name="3">
                                        <Icon type="ios-analytics" :size="iconSize"></Icon>
                                        <span class="layout-text">选项 3</span>
                                    </Menu-item>
                                </Menu>
                            </i-col>
                            <i-col :span="spanRight">
                                <div class="layout-header">
                                    <i-button type="text" @click="toggleClick">
                                        <Icon type="navicon" size="32"></Icon>
                                    </i-button>
                                </div>
                                <div class="layout-breadcrumb">
                                    <Breadcrumb>
                                        <Breadcrumb-item href="#">首页</Breadcrumb-item>
                                        <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                                        <Breadcrumb-item>某应用</Breadcrumb-item>
                                    </Breadcrumb>
                                </div>
                                <div class="layout-content">
                                    <div class="layout-content-main">内容区域</div>
                                </div>
                                <div class="layout-copy">
                                    2011-2016 &copy; TalkingData
                                </div>
                            </i-col>
                        </Row>
                    </div>
                </div>
                <div slot="desc">
                    <p>左侧导航可以折叠。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.fold }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import Code from '../../code/layout';
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
                spanLeft: 5,
                spanRight: 19
            }
        },
        computed: {
            iconSize () {
                return this.spanLeft === 5 ? 14 : 24;
            }
        },
        methods: {
            toggleClick () {
                if (this.spanLeft === 5) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 5;
                    this.spanRight = 19;
                }
            }
        }
    }
</script>