<template>
  <button 
        class="lw-button" 
        :class="[`lw-button--${type}`,
                {'is-plain': plain,
                'is-round': round,
                'is-circle': circle,
                'is-disabled': disabled
                }]"
        @click='handleClick'
                >
      <i :class="icon" v-if='icon'></i>
      <span v-if='$slots.default'>
          <slot></slot>
      </span>
  </button>
</template>

<script>
export default{
    name: 'LwButton',
    props: {
        type: {
            type: String,
            default: 'default'
        },
        plain: {
            type: Boolean,
            default: false
        },
        round: {
            type: Boolean,
            default: false
        },
        circle: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    methods:{
        handleClick(e){
            this.$emit('click',e)
        }
    }
}
</script>


<style lang="scss" scoped>
.lw-button{
    display: inline-block;
    line-height:1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:hover,
    &:focus{
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }
    &+&{
        margin-left: 10px;
    }
    &.is-plain{
        &:hover,
        &:focus{
            background: #fff;
            border-color: #409eff;
            color: #409eff; 
        }
    }
    &.is-disabled{
        color: #c0c4cc;
        cursor: not-allowed;
        background-image: none;
        background-color: #fff;
        border-color: #ebeef5;
        &:hover,
        &:focus{
            color: #c0c4cc;
            cursor: not-allowed;
            background-image: none;
            background-color: #fff;
            border-color: #ebeef5;
        }
    }
    &.is-round{
        border-radius: 20px;
        padding: 12px 23px;  
    }
    &.is-circle{
        border-radius: 50%;
        padding: 12px;  
    }
    &.lw-button--text{
        border-color: transparent;
        color: #909399;
        background: transparent;
        padding-left: 0;
        padding-right: 0; 
        &:hover,
        &:focus{
            color: #66b1ff;
            border-color: transparent;
            background-color: transparent;
        }
    }
    &.lw-button--primary {
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
        &:hover,
        &:focus{
            color: #fff;
            border-color: #66b1ff;
            background-color: #66b1ff; 
        }
        &.is-plain{
            color: #409eff;
            background: #ecf5ff;
            border-color: #b3d8ff;
            &:hover,
            &:focus{
                background: #fff;
                border-color: #409eff;
                color: #409eff; 
            }
        }
        &.is-disabled{
            color: #fff;
            background-color: #a0cfff;
            border-color: #a0cfff;
            &:hover,
            &:focus{
                color: #fff;
                background-color: #a0cfff;
                border-color: #a0cfff;
            }
        }
    }
    &.lw-button--success {
        color: #fff;
        background-color: #67c23a;
        border-color: #67c23a;
        &:hover,
        &:focus{
            color: #fff;
            border-color: #85ce61;
            background-color: #85ce61; 
        }
        &.is-plain{
            color: #67c23a;
            background: #f0f9eb;
            border-color: #c2e7b0;
            &:hover,
            &:focus{
                background: #67c23a;
                border-color: #67c23a;
                color: #fff; 
            }
        }
         &.is-disabled{
            color: #fff;
            background-color: #b3e19d;
            border-color: #b3e19d;
            &:hover,
            &:focus{
                color: #fff;
                background-color: #b3e19d;
                border-color: #b3e19d;
            }
        }
    }
    &.lw-button--warning {
        color: #fff;
        background-color: #e6a23c;
        border-color: #e6a23c;
        &:hover,
        &:focus{
            color: #fff;
            border-color: #ebb563;
            background-color: #ebb563; 
        }
        &.is-plain{
            color: #e6a23c;
            background: #fdf6ec;
            border-color: #f5dab1;
            &:hover,
            &:focus{
                background: #e6a23c;
                border-color: #e6a23c;
                color: #fff; 
            }
        }
         &.is-disabled{
            color: #fff;
            background-color: #b3e19d;
            border-color: #b3e19d;
            &:hover,
            &:focus{
                color: #fff;
                background-color: #f3d19e;
                border-color: #f3d19e;
            }
        }
    }
    &.lw-button--info {
        color: #fff;
        background-color: #909399;
        border-color: #909399;
        &:hover,
        &:focus{
            color: #fff;
            border-color: #a6a9ad;
            background-color: #a6a9ad; 
        }
        &.is-plain{
            color: #909399;
            background: #f4f4f5;
            border-color: #d3d4d6;
            &:hover,
            &:focus{
                background: #909399;
                border-color: #909399;
                color: #fff; 
            }
        }
         &.is-disabled{
            color: #fff;
            background-color: #c8c9cc;
            border-color: #c8c9cc;
            &:hover,
            &:focus{
                color: #fff;
                background-color: #c8c9cc;
                border-color: #c8c9cc;
            }
        }
    }
    &.lw-button--danger {
        color: #fff;
        background-color: #f56c6c;
        border-color: #f56c6c;
        &:hover,
        &:focus{
            color: #fff;
            border-color: #f78989;
            background-color: #f78989; 
        }
        &.is-plain{
            color: #f56c6c;
            background: #fef0f0;
            border-color: #fbc4c4;
            &:hover,
            &:focus{
                background: #f56c6c;
                border-color: #f56c6c;
                color: #fff; 
            }
            &.is-disabled{
                color: #f9a7a7;
                background-color: #fef0f0;
                border-color: #fde2e2;
                &:hover,
                &:focus{
                    color: #f9a7a7;
                    background-color: #fef0f0;
                    border-color: #fde2e2;
                }
            }
        }
        &.is-disabled{
            color: #fff;
            background-color: #fab6b6;
            border-color: #fab6b6;
            &:hover,
            &:focus{
                color: #fff;
                background-color: #fab6b6;
                border-color: #fab6b6;
            }
        }
    }
    [class*="lw-icon-"] + span {
        margin-left: 5px;
    }
}
</style>
