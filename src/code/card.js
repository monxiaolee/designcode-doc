let code = {};

code.base = `
<template>
    <Card style="width:350px">
        <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            经典电影
        </p>
        <a href="#" slot="extra" @click.prevent="changeLimit">
            <Icon type="ios-loop-strong"></Icon>
            换一换
        </a>
        <ul>
            <li v-for="item in movieList | limitBy limitNum limitFrom">
                <a :href="item.url" target="_blank">{{ item.name }}</a>
                <span>
                    <Icon type="ios-star" v-for="n in 4"></Icon><Icon type="ios-star" v-if="item.rate >= 9.5"></Icon><Icon type="ios-star-half" v-else></Icon>
                    {{ item.rate }}
                </span>
            </li>
        </ul>
    </Card>
</template>
<script>
    export default {
        data () {
            return {
                limitNum: 5,
                limitFrom: 0,
                movieList: [
                    {
                        name: '肖申克的救赎',
                        url: 'https://movie.douban.com/subject/1292052/',
                        rate: 9.6
                    },
                    {
                        name: '这个杀手不太冷',
                        url: 'https://movie.douban.com/subject/1295644/',
                        rate: 9.4
                    },
                    {
                        name: '霸王别姬',
                        url: 'https://movie.douban.com/subject/1291546/',
                        rate: 9.5
                    },
                    {
                        name: '阿甘正传',
                        url: 'https://movie.douban.com/subject/1292720/',
                        rate: 9.4
                    },
                    {
                        name: '美丽人生',
                        url: 'https://movie.douban.com/subject/1292063/',
                        rate: 9.5
                    },
                    {
                        name: '千与千寻',
                        url: 'https://movie.douban.com/subject/1291561/',
                        rate: 9.2
                    },
                    {
                        name: '辛德勒的名单',
                        url: 'https://movie.douban.com/subject/1295124/',
                        rate: 9.4
                    },
                    {
                        name: '海上钢琴师',
                        url: 'https://movie.douban.com/subject/1292001/',
                        rate: 9.2
                    },
                    {
                        name: '机器人总动员',
                        url: 'https://movie.douban.com/subject/2131459/',
                        rate: 9.3
                    },
                    {
                        name: '盗梦空间',
                        url: 'https://movie.douban.com/subject/3541415/',
                        rate: 9.2
                    }
                ]
            }
        },
        methods: {
            changeLimit () {
                this.limitFrom = this.limitFrom === 0 ? 5 : 0;
            }
        }
    }
</script>
`;

code.bordered = `
<template>
    <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
            <p slot="title">无边框标题</p>
            <p>无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充。</p>
        </Card>
    </div>
</template>
<script>
    export default {
        
    }
</script>
`;

code.disHover = `
<template>
    <Row>
        <i-col span="11">
            <Card>
                <p slot="title">标准卡片</p>
                <p>卡片内容</p>
                <p>卡片内容</p>
                <p>卡片内容</p>
            </Card>
        </i-col>
        <i-col span="11" offset="2">
            <Card dis-hover>
                <p slot="title">禁用悬停阴影的卡片</p>
                <p>卡片内容</p>
                <p>卡片内容</p>
                <p>卡片内容</p>
            </Card>
        </i-col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
`;

code.shadow = `
<template>
    <Row style="background:#eee;padding:20px">
        <i-col span="11">
            <Card :bordered="false">
                <p slot="title">无边框卡片</p>
                <p>卡片内容</p>
                <p>卡片内容</p>
                <p>卡片内容</p>
            </Card>
        </i-col>
        <i-col span="11" offset="2">
            <Card shadow>
                <p slot="title">使用阴影效果的卡片</p>
                <p>卡片内容</p>
                <p>卡片内容</p>
                <p>卡片内容</p>
            </Card>
        </i-col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
`;

code.simple = `
<template>
    <Card style="width:320px">
        <div style="text-align:center">
            <img src="../../images/logo.png" style="width:50%">
            <h3>一套基于 Vue.js 的高质量UI组件库</h3>
        </div>
    </Card>
</template>
<script>
    export default {
        
    }
</script>
`;

export default code;