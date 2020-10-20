<template>
  <label class='lw-radio' :class="{'is-checked': isChecked}">
      <span class='lw-radio-input' >
          <span class='lw-radio-inner'></span>
          <input type='radio' class='lw-radio-original' :value='label' :name='name' v-model='model' />
      </span>
      <span class='lw-radio-label'>
        <slot></slot>
        <template v-if="!$slots.default">{{ label }}</template>
      </span>
  </label>
</template>

<script>
    export default {
        name: 'LwRadio',
        props: {
            label: {
                type: [String, Number],
                default: ''
            },
            value: null,
            name: {
                type: String,
                default: ''
            }
        },
        inject: {
            radioGroup: {
              default: ''  
            }
        },
        computed: {
            isChecked () {
                return this.label === this.model;
            },
            model:{
                get() {
                    return this.isGroup ? this.radioGroup.value : this.value;
                },
                set(value) {
                   this.isGroup ? this.radioGroup.$emit('input',value) : this.$emit('input',value);
                }
            },
            isGroup(){
                return !!this.radioGroup;
            }
        }
    }
</script>

<style lang="scss" scoped>
.lw-radio{
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    .lw-radio-input{
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;
       
        .lw-radio-inner{
            border: 1px solid #dcdfe6;
            border-radius: 100%;
            width: 14px;
            height: 14px;
            background-color: #fff;
            position: relative;
            cursor: pointer;
            display: inline-block;
            box-sizing: border-box;
            &:after{
                width: 4px;
                height: 4px;
                border-radius: 100%;
                background-color: #fff;
                content: "";
                position: absolute;
                left: 50%;
                top: 50%;

            }
        }
        .lw-radio-original{
            opacity: 0;
            outline: none;
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: 0 
        }
    }
     &.is-checked{
        .lw-radio-label{
            color: #409eff;
        }
    }
    .lw-radio-label{
        font-size: 14px;
        padding-left: 10px
    }
     &.is-checked{
        .lw-radio-inner{
            border-color: #409eff;
            background: #409eff;
            &:after{
                transform: translate(-50%,-50%) scale(1);
            }  
        } 
    }
}
</style>