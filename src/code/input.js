let code = {};

code.base = `
<template>
    <i-input :value.sync="value" placeholder="请输入..." style="width: 300px"></i-input>
</template>
<script>
    export default {
        data () {
            return {
                value: ''
            }
        }
    }
</script>
`;

code.size = `
<template>
    <i-input size="large" placeholder="large size"></i-input>
    <br>
    <i-input placeholder="default size"></i-input>
    <br>
    <i-input size="small" placeholder="small size"></i-input>
</template>
<script>
    export default {
        
    }
</script>
`;

code.icon = `
<template>
    <i-input icon="ios-clock-outline" placeholder="请输入..." style="width: 200px"></i-input>
</template>
<script>
    export default {
        
    }
</script>
`;

code.textarea = `
<template>
    <i-input type="textarea" placeholder="请输入..."></i-input>
    <i-input type="textarea" :rows="4" placeholder="请输入..."></i-input>
</template>
<script>
    export default {
        
    }
</script>
`;

code.autosize = `
<template>
    <i-input type="textarea" :autosize="true" placeholder="请输入..."></i-input>
    <i-input type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></i-input>
</template>
<script>
    export default {
        
    }
</script>
`;

code.disabled = `
<template>
    <i-input disabled placeholder="请输入..."></i-input>
    <i-input disabled type="textarea" placeholder="请输入..."></i-input>
</template>
<script>
    export default {
        
    }
</script>
`;

code.addon = `
<template>
    <i-input>
        <span slot="prepend">http://</span>
        <span slot="append">.com</span>
    </i-input>
    <br>
    <i-input>
        <i-select :model.sync="select1" slot="prepend" style="width: 80px">
            <i-option value="http">http://</i-option>
            <i-option value="https">https://</i-option>
        </i-select>
        <i-select :model.sync="select2" slot="append" style="width: 70px">
            <i-option value="com">.com</i-option>
            <i-option value="org">.org</i-option>
            <i-option value="io">.io</i-option>
        </i-select>
    </i-input>
    <br>
    <i-input>
        <i-select :model.sync="select3" slot="prepend" style="width: 80px">
            <i-option value="day">日活</i-option>
            <i-option value="month">月活</i-option>
        </i-select>
        <i-button slot="append" icon="ios-search"></i-button>
    </i-input>
</template>
<script>
    export default {
        data () {
            return {
                select1: 'http',
                select2: 'com',
                select3: 'day'
            }
        }
    }
</script>
`;

export default code;