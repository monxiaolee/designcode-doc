let code = {};

code.base = `
<template>
    <Carousel>
        <Carousel-item>
            <div class="demo-carousel">1</div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">2</div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">3</div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">4</div>
        </Carousel-item>
    </Carousel>
</template>
<script>
    export default {
        
    }
</script>
`;

code.autoplay = `
<template>
    <Carousel autoplay>
        <Carousel-item>
            <div class="demo-carousel">1</div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">2</div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">3</div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">4</div>
        </Carousel-item>
    </Carousel>
</template>
<script>
    export default {
        
    }
</script>
`;

code.setting = `
<template>
    <i-form :model="setting" :label-width="100">
        <Form-item label="自动切换">
            <Switch :checked.sync="setting.autoplay">
                <span slot="open">开</span>
                <span slot="close">关</span>
            </Switch>
        </Form-item>
        <Form-item label="自动切换速度">
            <Slider :value.sync="setting.autoplaySpeed" :min="300" :max="10000" :step="100"></Slider>
        </Form-item>
        <Form-item label="指示器位置">
            <Radio-group :model.sync="setting.dots" type="button">
                <Radio value="inside">内部</Radio>
                <Radio value="outside">外部</Radio>
                <Radio value="none">不显示</Radio>
            </Radio-group>
        </Form-item>
        <Form-item label="切换箭头">
            <Radio-group :model.sync="setting.arrow" type="button">
                <Radio value="hover">悬停时显示</Radio>
                <Radio value="always">一直显示</Radio>
                <Radio value="never">不显示</Radio>
            </Radio-group>
        </Form-item>
        <Form-item label="指示器触发方式">
            <Radio-group :model.sync="setting.trigger" type="button">
                <Radio value="click">点击</Radio>
                <Radio value="hover">悬停</Radio>
            </Radio-group>
        </Form-item>
    </i-form>
    <Carousel
        :autoplay="setting.autoplay"
        :autoplay-speed="setting.autoplaySpeed"
        :dots="setting.dots"
        :trigger="setting.trigger"
        :arrow="setting.arrow">
        <Carousel-item>
            <div class="demo-carousel">1</div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">2</div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">3</div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">4</div>
        </Carousel-item>
    </Carousel>
</template>
<script>
    export default {
        data () {
            return {
                setting: {
                    autoplay: false,
                    autoplaySpeed: 2000,
                    dots: 'inside',
                    trigger: 'click',
                    arrow: 'hover'
                }
            }
        },
    }
</script>
`;

export default code;