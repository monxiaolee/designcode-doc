let code = {};

code.base = `
<template>
    <Carousel v-model="value1">
        <CarouselItem>
            <div class="demo-carousel">1</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">4</div>
        </CarouselItem>
    </Carousel>
</template>
<script>
    export default {
        data () {
            return {
                value1: 0
            }
        }
    }
</script>
`;

code.autoplay = `
<template>
    <Carousel autoplay v-model="value2">
        <CarouselItem>
            <div class="demo-carousel">1</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">4</div>
        </CarouselItem>
    </Carousel>
</template>
<script>
    export default {
        data () {
            return {
                value2: 0
            }
        }
    }
</script>
`;

code.setting = `
<template>
    <Form :model="setting" :label-width="100">
        <FormItem label="自动切换">
            <i-switch v-model="setting.autoplay">
                <span slot="open">开</span>
                <span slot="close">关</span>
            </i-switch>
        </FormItem>
        <FormItem label="自动切换速度">
            <Slider v-model="setting.autoplaySpeed" :min="300" :max="10000" :step="100"></Slider>
        </FormItem>
        <FormItem label="指示器位置">
            <RadioGroup v-model="setting.dots" type="button">
                <Radio label="inside">内部</Radio>
                <Radio label="outside">外部</Radio>
                <Radio label="none">不显示</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="切换箭头">
            <RadioGroup v-model="setting.arrow" type="button">
                <Radio label="hover">悬停时显示</Radio>
                <Radio label="always">一直显示</Radio>
                <Radio label="never">不显示</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="指示器触发方式">
            <RadioGroup v-model="setting.trigger" type="button">
                <Radio label="click">点击</Radio>
                <Radio label="hover">悬停</Radio>
            </RadioGroup>
        </FormItem>
    </Form>
    <Carousel
        v-model="value3"
        :autoplay="setting.autoplay"
        :autoplay-speed="setting.autoplaySpeed"
        :dots="setting.dots"
        :trigger="setting.trigger"
        :arrow="setting.arrow">
        <CarouselItem>
            <div class="demo-carousel">1</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">4</div>
        </CarouselItem>
    </Carousel>
</template>
<script>
    export default {
        data () {
            return {
                value3: 0,
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