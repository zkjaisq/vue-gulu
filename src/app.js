import Vue from 'vue';
import Button from './button';
Vue.component('g-button',Button);//注册全部的组件
new Vue({
    el:'#app',
    data:{
        message:'hi'
    }
})