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
            <li v-for="item in randomMovieList">
                <a :href="item.url" target="_blank">{{ item.name }}</a>
                <span>
                    <Icon type="ios-star" v-for="n in 4" :key="n"></Icon><Icon type="ios-star" v-if="item.rate >= 9.5"></Icon><Icon type="ios-star-half" v-else></Icon>
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
                ],
                randomMovieList: []
            }
        },
        methods: {
            changeLimit () {
                function getArrayItems(arr, num) {
                    const temp_array = [];
                    for (let index in arr) {
                        temp_array.push(arr[index]);
                    }
                    const return_array = [];
                    for (let i = 0; i<num; i++) {
                        if (temp_array.length>0) {
                            const arrIndex = Math.floor(Math.random()*temp_array.length);
                            return_array[i] = temp_array[arrIndex];
                            temp_array.splice(arrIndex, 1);
                        } else {
                            break;
                        }
                    }
                    return return_array;
                }
                this.randomMovieList = getArrayItems(this.movieList, 5);
            }
        },
        mounted () {
            this.changeLimit();
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
        <Col span="11">
            <Card>
                <p slot="title">标准卡片</p>
                <p>卡片内容</p>
                <p>卡片内容</p>
                <p>卡片内容</p>
            </Card>
        </Col>
        <Col span="11" offset="2">
            <Card dis-hover>
                <p slot="title">禁用悬停阴影的卡片</p>
                <p>卡片内容</p>
                <p>卡片内容</p>
                <p>卡片内容</p>
            </Card>
        </Col>
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
        <Col span="11">
            <Card :bordered="false">
                <p slot="title">无边框卡片</p>
                <p>卡片内容</p>
                <p>卡片内容</p>
                <p>卡片内容</p>
            </Card>
        </Col>
        <Col span="11" offset="2">
            <Card shadow>
                <p slot="title">使用阴影效果的卡片</p>
                <p>卡片内容</p>
                <p>卡片内容</p>
                <p>卡片内容</p>
            </Card>
        </Col>
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
            <img src="../../images/logo.png">
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