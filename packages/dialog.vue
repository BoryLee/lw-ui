<template>
   <transition name="dialog-fade">
        <div class="lw-dialog-overlay" v-show='visible' @click.self='handleClose'>
            <div class="lw-dialog" :style="{width,top}">
                <div class="lw-dialog-header">
                    <slot name="title">
                            <span class="lw-dialog-title" v-if='title'>{{title}}</span>
                    </slot>
                        <lw-button icon="lw-icon-close" type="text" class="lw-dialog-headerBtn" @click='handleClose'></lw-button>
                </div>
                <div class="lw-dialog-body">
                    <slot></slot>
                </div>
                <div class="lw-dialog-footer" v-if="$slots.footer">
                    <slot name='footer'></slot>
                </div>
            </div>
        </div>
   </transition>
</template>

<script>
    export default {
        name: 'LwDialog',
        props: {
            title: {
                type: String,
                default: '提示'
            },
            width: {
                type: String,
                default: '50%'
            },
            top: {
               type: String,
               default: '15vh' 
            },
            visible: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            handleClose(){
                this.$emit('update:visible',false)
            }
        }
    }
</script>

<style lang="scss" scoped>
.lw-dialog-overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 2000;
    .lw-dialog{
       position: relative;
       margin: 0 auto;
       background-color: #fff;
       color: rgba(0,0,0,.65);
       font-size: 14px;
       .lw-dialog-header{
           padding: 20px 20px 10px;
           .lw-dialog-title{
                line-height: 24px;
                font-size: 18px;
                color: #303133;
           }
           .lw-dialog-headerBtn{
               position: absolute;
               right: 20px;
               top: 10px;
               font-size: 20px;
           }
       }
       .lw-dialog-body{
            padding: 30px 20px;
            color: #606266;
            font-size: 14px;
            word-break: break-all;
       }
       .lw-dialog-footer{
            padding: 10px 20px 20px;
            text-align: right;
            box-sizing: border-box;
            //深度选择器 scss ::v-deep  less /deep/ css >>>
            ::v-deep .lw-button:first-child{
                margin-right: 10px;
            }
       }
    }
}
.dialog-fade-enter-active{
    animation: fade .5s;
}
.dialog-fade-leave-active{
    animation: fade .5s reverse;
}

@keyframes fade{
    0%{
        opacity: 0;
        transform: translateY(-20px);
    }100%{
        opacity: 1;
        transform: translateY(0px);
    }
}

</style>