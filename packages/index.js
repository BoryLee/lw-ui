import Button from './button.vue';
import Checkbox from './checkbox.vue';
import CheckboxGroup from './checkboxGroup.vue';
import Dialog from './dialog.vue';
import FormItem from './form-item.vue';
import Form from './form.vue';
import Icon from './icon.vue';
import Input from './input.vue';
import Radio from './radio.vue';
import RadioGroup from './radioGroup.vue';
import Switch from './switch.vue';
import './font/iconfont.css';

const components = [Button,Checkbox,CheckboxGroup,Dialog,FormItem,Form,Icon,Input,Radio,RadioGroup,Switch];

const install = function(Vue){
//     const requireComponent = require.context(".",true,/\.vue/);//["./Button.vue"]
//    requireComponent.keys().forEach(fileName=>{
//         const config = requireComponent(fileName);
//        Vue.component(config.default.name,config.default)
//    })
        components.forEach(item=>{
            Vue.component(item.name,item)
        })
   if(typeof window !== "undefined" && window.Vue){
       Vue.use(window.Vue)
   }
}
export default {
    install
}