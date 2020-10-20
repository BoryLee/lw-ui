<template>
    <div class="lw-input" :class="{'is-disabled': disabled,'lw-input-suffix': showSuffix}">
        <input 
            class="lw-input-innner" 
            :placeholder="placeholder" 
            :type="showPassword ? (passwordVisible ? 'text': type) : type" 
            :name="name" 
            :disabled='disabled'
            :value='value'
            @input='handleInput'
            />
        <span class="lw-input_suffix" v-if='showSuffix'>
            <i class="lw-input-icon lw-icon-clear" v-if='clearable' @click='clear'></i>
            <i class="lw-input-icon" :class="[passwordVisible ? 'lw-icon-view' : 'lw-icon-not-view']" v-if='showPassword' @click='handlePassword'></i>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'LwInput',
        props: {
            placeholder: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'text'
            },
            name: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            value: {
                type: [String, Number]
            },
            clearable: {
                type: Boolean,
                default: false
            },
            showPassword: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            showSuffix(){
                return (this.clearable || this.showPassword) && this.value;
            }
        },
        data () {
            return {
                passwordVisible: false,
            }
        },
        methods: {
            handleInput(e){
                this.$emit('input',e.target.value)
            },
            clear(){
                this.$emit('input','');
            },
            handlePassword(){
                this.passwordVisible = !this.passwordVisible;
            }
        }
    }
</script>

<style lang="scss" scoped>
.lw-input{
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    &.is-disabled{
        .lw-input-innner{
            background-color: #f5f7fa;
            border-color: #e4e7ed;
            color: #c0c4cc;
            cursor: not-allowed;
        }     
    }
    .lw-input-innner{
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        width: 100%;
         &:hover{
            border-color: #c0c4cc;
        }
        &:focus{
            border-color: #409eff;
        }
    }
    .lw-input_suffix{
        position: absolute;
        top:0;
        right:5px;
        height: 100%;
        text-align: center;
        color: #c0c4cc;
        transition: all .3s;
        .lw-input-icon{
            width: 25px;
            line-height: 40px;
            cursor: pointer;
        }
    }

}

</style>