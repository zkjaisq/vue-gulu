import Vue from 'vue';
import Button from './button';
import Icon from './icon.vue';
Vue.component('g-button',Button);//注册全部的组件
Vue.component('g-icon',Icon);//全局注册组件
new Vue({
    el:'#app',
    data:{
        message:'hi'
    }
})