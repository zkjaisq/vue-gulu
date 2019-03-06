import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group'
Vue.component('g-button',Button);//注册全部的组件
Vue.component('g-icon',Icon);//全局注册组件
Vue.component('g-button-group',ButtonGroup)
new Vue({
    el:'#app',
    data:{
        message:'hi',
        loading1:false,
        loading2:false,
        loading3:true,
    }
})