<style lang="less">
    .issue {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-flex: 1;
        -ms-flex: auto;
        flex: auto;
        overflow: auto;
        background: #ececec;
        &-menu {
            background-color: #fff;
            &-main {
                width: 800px;
                margin: 10px auto;
                .ivu-avatar {
                    vertical-align: middle;
                    background: transparent;
                }
                h1 {
                    font-size: 18px;
                    font-weight: 400;
                    display: inline;
                    margin-left: 8px;
                    vertical-align: middle;
                }
                button {
                    float: right;
                    margin-top: 8px;
                }
            }
        }
        &-main {
            width: 800px;
            margin: 20px auto;
        }
    }

    .issue-vertical-center-modal {
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal {
            top: 0;
        }
    }

</style>
<template>
    <div class="issue">
        <div class="issue-menu">
            <div class="issue-menu-main">
                <Avatar :src="iViewLogo" size="large" shape="square"/>
                <h1>Issue Helper</h1>
                <Button type="ghost" size="small" @click="handleChangeLang">
                    <template v-if="lang === 'zh-CN'">EN</template>
                    <template v-else>中文</template>
                </Button>
            </div>
        </div>
        <div class="issue-main">
            <Card shadow>
                <div class="ivu-article">
                    <h2>在你开始之前...</h2>
                    <p>
                        首先，虽然我们为了中文用户的方便提供了中文的表单，但在填写时请尽量使用英文。iView 社区不只有中国人。如果你想让尽可能多的人能够看懂你的 issue，就请尽量用英文。
                    </p>
                    <p>
                        其次，iView 的 issue 列表只接受 bug 报告或是新功能请求 (feature requests)。这意味着我们不接受用法问题。如果你开的 issue 不符合规定，它将会被立刻关闭。<a
                            @click="handleOpenStrict">为什么要这么严格？</a>
                    </p>
                    <p>
                        对于使用中遇到的问题，请使用以下资源：
                    </p>
                    <ul>
                        <li>仔细阅读 <a href="https://www.iviewui.com/docs/guide/install" target="_blank">文档</a></li>
                        <li>在 <a href="https://stackoverflow.com/" target="_blank">StackOverflow</a> (英文) 或是 <a
                                href="https://segmentfault.com/t/iview" target="_blank">SegmentFault</a>（中文）搜索和提问
                        </li>
                    </ul>
                    <p>
                        最后，在开 issue 前，可以先搜索以下以往的旧 issue - 你遇到的问题可能已经有人提了，也可能已经在最新版本中被修正。注意：如果你发现一个已经关闭的旧 issue 在最新版本中仍然存在，请不要在旧 issue 下面留言，而应该用下面的表单开一个新的 issue。
                    </p>
                    <h2>填写表单</h2>
                </div>
                <div style="margin-top: 15px">
                    <Form ref="form" :model="formData" :rules="formRule" label-position="top">
                        <Row :gutter="32">
                            <Col span="12">
                            <FormItem label="相关仓库：" prop="repo">
                                <Select v-model="formData.repo">
                                    <Option value="iview">iView</Option>
                                    <Option value="iview-admin">iView Admin</Option>
                                </Select>
                            </FormItem>
                            </Col>
                            <Col span="12">
                            <FormItem label="这是一个：" prop="type">
                                <Select v-model="formData.type">
                                    <Option value="bug">错误报告</Option>
                                    <Option value="feature">功能请求</Option>
                                </Select>
                            </FormItem>
                            </Col>
                        </Row>
                        <FormItem label="Issue 标题：" prop="title">
                            <Input v-model="formData.title"/>
                        </FormItem>
                        <FormItem label="重现链接：" prop="link">
                            <Input v-model="formData.link"/>
                        </FormItem>
                        <div class="ivu-article">
                            <p>
                                请提供一个尽可能精简的 <a href="https://jsfiddle.net/yyrzhm46/" target="_blank">JSFiddle</a> 链接或是 GitHub 仓库的链接。
                            </p>
                            <p>
                                <a @click="handleOpenMin">什么是最小化重现，为什么这是必需的？</a>
                            </p>
                        </div>
                        <FormItem label="环境：" prop="system">
                            <Input v-model="formData.system"/>
                        </FormItem>
                        <div class="ivu-article">
                            <p>操作系统版本 / 浏览器版本 / Vue 版本等等信息</p>
                        </div>
                        <FormItem label="重现步骤：" prop="step">
                            <Input type="textarea" v-model="formData.step" :autosize="{minRows: 2,maxRows: 10}"/>
                        </FormItem>
                        <div class="ivu-article">
                            <p>
                                简洁清晰的重现步骤能够帮助我们更迅速地定位问题所在。支持使用 <a
                                    href="https://guides.github.com/features/mastering-markdown/" target="_blank">Markdown</a> 来格式化列表或是代码片段。
                            </p>
                        </div>
                        <FormItem label="期望的结果是什么？：" prop="expectedOutcome">
                            <Input type="textarea" v-model="formData.expectedOutcome"
                                   :autosize="{minRows: 2,maxRows: 10}"/>
                        </FormItem>
                        <FormItem label="实际的结果是什么？：" prop="actualResult">
                            <Input type="textarea" v-model="formData.actualResult"
                                   :autosize="{minRows: 2,maxRows: 10}"/>
                        </FormItem>
                        <FormItem label="补充说明（可选）：" prop="supplement">
                            <Input type="textarea" v-model="formData.supplement" :autosize="{minRows: 2,maxRows: 10}"/>
                        </FormItem>
                        <div class="ivu-article">
                            <p>比如：遇到这个 bug 的业务场景、上下文。</p>
                        </div>
                    </Form>
                    <div style="text-align: center;margin: 15px;">
                        <Button size="large" type="primary" @click="handlePreview">预览</Button>
                    </div>
                </div>
            </Card>
        </div>
        <Modal v-model="isStrict" class-name="issue-vertical-center-modal" title="为什么要有这么严格的 issue 规定" width="680">
            <div class="ivu-article">
                <p>
                    维护开源项目，尤其是流行的项目，是<a
                        href="https://nolanlawson.com/2017/03/05/what-it-feels-like-to-be-an-open-source-maintainer/"
                        target="_blank">非常辛苦的工作</a>。随着 iView 在社区越来越受欢迎，我们每天都在收到越来越多的问题， bug 报告，功能需求和 Pull Requests。
                </p>
                <p>
                    作为一个完全免费使用的开源项目，iView 的维护人手是有限的。这意味着想要让项目长期的可持续发展，我们必须：
                </p>
                <ul>
                    <li>给予更具体的工作更高的优先级（比如 bug 的修复和新功能的开发）；</li>
                    <li>提高 issue 处理的效率。</li>
                </ul>
                <p>
                    针对 (1)，我们决定将 GitHub issue 列表严格地限制用于有具体目标和内容的工作。问题和讨论应当发送到更适合它们的场合。
                </p>
                <p>
                    针对 (2)，我们发现影响 issue 处理效率的最大因素是用户在开 issue 时没有提供足够的信息。这导致我们需要花费大量的时间去跟用户来回沟通，只为了获得一些基本信息好让我们对 issue 进行真正的分析。这正是我们开发这个 app 的理由：我们要确保每个新 issue 都提供了必需的信息，这样能节省维护者和开发者双方的时间。
                </p>
                <p>
                    最重要的是，请明白一件事：开源项目的用户和维护者之间并不是甲方和乙方的关系，issue 也不是客服。在开 issue 的时候，请抱着一种『一起合作来解决这个问题』的心态，不要期待我们单方面地为你服务。
                </p>
            </div>
        </Modal>
        <Modal v-model="isMin" class-name="issue-vertical-center-modal" title="关于重现" width="680">
            <div class="ivu-article">
                <p>
                    所谓『重现』，就是一段可以运行并展示一个 bug 如何发生的代码。
                </p>
                <h2>文字是不够的</h2>
                <p>
                    如果你遇到一个问题，但是只提供了一些文字描述，我们是不可能修复这个 bug 的。首先，文字在描述技术问题时的表达难度和不精确性；其次，问题的真实原因有很多可能，它完全有可能是一个你根本没有提及的因素导致的。重现是唯一能够可靠地让我们理解问题本质的方式。
                </p>
                <h2>重现必须是可运行的</h2>
                <p>
                    <strong>截图和视频不是重现</strong>。它们仅仅证明了 bug 的存在，但却不能提供关于 bug 是如何发生的信息。只有可运行的代码提供了完整的上下文，并让我们可以进行真正的 debug 而不是空想和猜测。当然，在提供的重现的前提下，视频或是 gif 动画可以帮助解释一些比较难用文字描述的交互行为。
                </p>
                <h2>重现应当尽量精简</h2>
                <p>
                    有些用户会直接给我们一整个项目的代码，然后希望我们帮忙找出问题所在。此类请求我们通常不予接受，因为：
                </p>
                <ul>
                    <li>你对你的项目的代码结构可能已经非常熟悉，但我们并不是。阅读、运行、分析一个完全陌生的项目是极其耗费时间和精力的。</li>
                    <li>由于涉及了大量业务代码，问题可能是你的代码错误，而不是 iView 的 bug 所导致的。</li>
                </ul>
                <p>
                    一个最小化的重现意味着它精确地定位了 bug 本身 - 它应当只包含能够触发 bug 的最少量的代码。你应当尽可能地剔除任何跟该 bug 无关的部分。
                </p>
                <h2>如何提供一个重现</h2>
                <p>
                    除非你的 bug 只有在构建工具下才能重现，否则我们建议使用诸如 <a href="https://jsfiddle.net/yyrzhm46/"
                                                        target="_blank">JSFiddle</a> 在线服务来提供重现。如果你的 bug 必须用到构建工具，那么我们建议使用 vue-cli 来搭建一个新项目，推送到 GitHub 并提供仓库的链接。
                </p>
            </div>
        </Modal>
    </div>
</template>
<script>
    import iViewLogo from '../images/logo.png';
    import bus from '../components/bus';

    import marked from 'marked';
    import copy from 'copy-to-clipboard';

    function generate(markdown) {
        const withMarker = `${markdown}\n\n<!-- generated by iview-issues. DO NOT REMOVE -->`

        copy(withMarker)

        return {
            markdown: withMarker,
            html: marked(markdown, {
                gfm: true,
                tables: true,
                breaks: false,
                pedantic: false,
                sanitize: true,
                smartLists: true,
                smartypants: false
            })
        }
    }

        export default {
            data () {
                return {
                    iViewLogo: iViewLogo,
                    lang: this.$lang,
                    isStrict: false,
                    isMin: false,
                    isPreview: false,
                    formData: {
                        repo: 'iview',  // iview / iview-admin
                        type: 'bug',    // bug / feature
                        title: '',
                        link: '',
                        system: '',
                        step: '',
                        expectedOutcome: '',
                        actualResult: '',
                        supplement: ''
                    },
                    formRule: {
                        title: [
                            { required: true, message: '标题不能为空', trigger: 'change' }
                        ],
                        link: [
                            { required: true, message: '链接不能为空', trigger: 'change' },
                            { type: 'url', message: '链接不正确', trigger: 'blur' }
                        ],
                        system: [
                            { required: true, message: '环境信息不能为空', trigger: 'change' }
                        ],
                        step: [
                            { required: true, message: '重现步骤不能为空', trigger: 'change' }
                        ],
                        expectedOutcome: [
                            { required: true, message: '期望的结果内容不能为空', trigger: 'change' }
                        ],
                        actualResult: [
                            { required: true, message: '实际的结果内容不能为空', trigger: 'change' }
                        ]
                    }
                };
            },
            methods: {
                handleChangeLang () {
                    const lang = this.lang === 'zh-CN' ? 'en-US' : 'zh-CN';
                    bus.$emit('on-change-lang', lang, path);
                },
                handleOpenStrict () {
                    this.isStrict = true;
                },
                handleOpenMin () {
                    this.isMin = true;
                },
                handlePreview () {
                    this.$refs.form.validate((valid) => {
                        if (valid) {
                            this.isPreview = true;
                        } else {
                            this.$Message.error('表单验证失败!');
                        }
                    })
                }
            }
        };
    </script>