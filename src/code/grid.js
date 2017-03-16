let code = {};

code.base = `
<template>
    <Row>
        <i-col span="12">col-12</i-col>
        <i-col span="12">col-12</i-col>
    </Row>
    <br>
    <Row>
        <i-col span="8">col-8</i-col>
        <i-col span="8">col-8</i-col>
        <i-col span="8">col-8</i-col>
    </Row>
    <br>
    <Row>
        <i-col span="6">col-6</i-col>
        <i-col span="6">col-6</i-col>
        <i-col span="6">col-6</i-col>
        <i-col span="6">col-6</i-col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
`;

code.gutter = `
<template>
    <Row :gutter="16">
        <i-col span="6">
            <div>col-6</div>
        </i-col>
        <i-col span="6">
            <div>col-6</div>
        </i-col>
        <i-col span="6">
            <div>col-6</div>
        </i-col>
        <i-col span="6">
            <div>col-6</div>
        </i-col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
`;

code.order = `
<template>
    <Row type="flex">
        <i-col span="6" order="4">1 | order-4</i-col>
        <i-col span="6" order="3">2 | order-3</i-col>
        <i-col span="6" order="2">3 | order-2</i-col>
        <i-col span="6" order="1">4 | order-1</i-col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
`;

code.push = `
<template>
    <Row>
        <i-col span="18" push="6">col-18 | push-6</i-col>
        <i-col span="6" pull="18">col-6 | pull-18</i-col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
`;

code.offset = `
<template>
    <Row>
        <i-col span="8">col-8</i-col>
        <i-col span="8" offset="8">col-8 | offset-8</i-col>
    </Row>
    <br>
    <Row>
        <i-col span="6" offset="8">col-6 | offset-8</i-col>
        <i-col span="6" offset="4">col-6 | offset-4</i-col>
    </Row>
    <br>
    <Row>
        <i-col span="12" offset="8">col-12 | offset-8</i-col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
`;

code.justify = `
<template>
    <p>子元素向左排列</p>
    <Row type="flex" justify="start" class="code-row-bg">
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
    </Row>
    <p>子元素向右排列</p>
    <Row type="flex" justify="end" class="code-row-bg">
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
    </Row>
    <p>子元素居中排列</p>
    <Row type="flex" justify="center" class="code-row-bg">
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
    </Row>
    <p>子元素等宽排列</p>
    <Row type="flex" justify="space-between" class="code-row-bg">
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
    </Row>
    <p>子元素分散排列</p>
    <Row type="flex" justify="space-around" class="code-row-bg">
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
`;

code.align = `
<template>
    <p>顶部对齐</p>
    <Row type="flex" justify="center" align="top" class="code-row-bg">
        <i-col span="4"><p style="height: 80px">col-4</p></i-col>
        <i-col span="4"><p style="height: 30px">col-4</p></i-col>
        <i-col span="4"><p style="height: 100px">col-4</p></i-col>
        <i-col span="4"><p style="height: 60px">col-4</p></i-col>
    </Row>
    <p>底部对齐</p>
    <Row type="flex" justify="center" align="bottom" class="code-row-bg">
        <i-col span="4"><p style="height: 80px">col-4</p></i-col>
        <i-col span="4"><p style="height: 30px">col-4</p></i-col>
        <i-col span="4"><p style="height: 100px">col-4</p></i-col>
        <i-col span="4"><p style="height: 60px">col-4</p></i-col>
    </Row>
    <p>居中对齐</p>
    <Row type="flex" justify="center" align="middle" class="code-row-bg">
        <i-col span="4"><p style="height: 80px">col-4</p></i-col>
        <i-col span="4"><p style="height: 30px">col-4</p></i-col>
        <i-col span="4"><p style="height: 100px">col-4</p></i-col>
        <i-col span="4"><p style="height: 60px">col-4</p></i-col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
`;

code.reponsive = `
<template>
    <Row>
        <i-col :xs="2" :sm="4" :md="6" :lg="8">Col</i-col>
        <i-col :xs="20" :sm="16" :md="12" :lg="8">Col</i-col>
        <i-col :xs="2" :sm="4" :md="6" :lg="8">Col</i-col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
`;

code.reponsive2 = `
<template>
    <Row>
        <i-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</i-col>
        <i-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</i-col>
        <i-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</i-col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
`;

export default code;