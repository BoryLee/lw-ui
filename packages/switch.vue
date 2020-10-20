<template>
    <label :for="name" class="lw-switch" :class="{'is-checked': value,'is-disabled': disabled}" @click='handleClick'>
        <span class="lw-switch-core" ref='core'>
            <span class="lw-switch-button"></span>
        </span>
        <input type="checkbox" class="lw-switch-input" :name="name" ref="input"/>
    </label>
</template>

<script>
    export default {
        name: "LwSwitch",
        props: {
            value:{
                type: Boolean,
                default: false
            },
            disabled:{
                type: Boolean,
                default: false
            },
            activeColor: {
                type: String,
                default: "#409eff"
            },
            inactiveColor: {
                type: String,
                default: "#dcdfe6"
            },
            name: {
                type: String,
                default: ""
            }
        },
        watch: {
            value(){
                this.changeColor()
            }
        },
        methods: {
            changeColor(){
                if(this.activeColor || this.inactiveColor){
                    let color = this.value ? this.activeColor : this.inactiveColor;
                    this.$refs.core.style.borderColor = color;
                    this.$refs.core.style.backgroundColor = color;
                    this.$refs.input.checked = this.value;
                }
            },
            handleClick(){
                if(this.disabled) return;
                this.$emit('input',!this.value);
            }
        },
        mounted () {
            this.changeColor()
        }
    }
</script>

<style lang="scss" scoped>
.lw-switch{
    display: inline-flex;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    vertical-align: middle;
    .lw-switch-input{
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0;
        margin: 0;
    }
    .lw-switch-core{
        margin: 0;
        display: inline-block;
        position: relative;
        width: 40px;
        height: 20px;
        border: 1px solid #dcdfe6;
        outline: none;
        border-radius: 10px;
        box-sizing: border-box;
        background: #dcdfe6;
        cursor: pointer;
        transition: border-color .3s,background-color .3s;
        vertical-align: middle;
        .lw-switch-button{
            position: absolute;
            top: 1px;
            left: 1px;
            border-radius: 100%;
            transition: all .3s;
            width: 16px;
            height: 16px;
            background-color: #fff;
        }
    }
    &.is-checked{
        .lw-switch-core{
            border-color: #409eff;
            background-color: #409eff;
            .lw-switch-button{
                transform: translateX(20px);
            }
        }
    }
     &.is-disabled{
         opacity: 0.6;
        .lw-switch-core{
            cursor: not-allowed;
        }
     }

}
</style>