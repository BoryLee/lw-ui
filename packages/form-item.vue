<template>
    <div class="lw-form-item" >
       <label class="lw-form-item-label" v-if="label" :style="{width: labelWidth}">{{label}}</label>
       <div class="lw-form-item-content" :style="{marginLeft: labelWidth}">
           <slot></slot>
       </div>
    </div>
</template>

<script>
    export default {
        name: 'LwFormItem',
        props: {
           label: {
               type: String,
               default: ''
           },
           labelWidth: {
               type: String,
               default: '80px'
           }
        },
        inject:['form']
    }
</script>

<style lang="scss" scoped>
.lw-form-item{
    margin-bottom: 22px;
    .lw-form-item-label{
        text-align: right;
        vertical-align: middle;
        float: left;
        font-size: 14px;
        color: #606266;
        line-height: 40px;
        padding: 0 12px 0 0;
        box-sizing: border-box; 
    }
    .lw-form-item-content{
        line-height: 40px;
        position: relative;
        font-size: 14px;
    }

}

</style>