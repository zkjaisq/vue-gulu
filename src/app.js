import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group'

Vue.component('g-button',Button);//注册全部的组件
Vue.component('g-icon',Icon);//全局注册组件
Vue.component('g-button-group',ButtonGroup);

new Vue({
    el:'#app',
    data:{
        message:'hi',
        loading1:false,
        loading2:false,
        loading3:true,
    }
})


//单元测试
import chai from 'chai'
const exexpect = chai.expect;
{
    //Button是一个对象，没办法实例化。需要将对象改为一个函数，并且挂在到#test元素上。
    //propsData创建实例时传递 props。主要作用是方便测试。
    //可以不mount到一个元素上，可以mount到一个内存里面。
    //单元测试，一个输入，得到一个输出
    console.log(Button);
    const  Constructor = Vue.extend(Button);
    const  button = new Constructor({
        propsData:{
            icon:'left',
        }
    })
    button.$mount();
    let userElemnt  = button.$el.querySelector('use');
    console.log(userElemnt);
    exexpect(userElemnt.getAttribute('xlink:href')).to.equal('#ileft');
    button.$el.remove();
    button.$destroy();
}
{
    const  Constructor = Vue.extend(Button);
    const  button = new Constructor({
        propsData:{
            icon:'left',
            loading:true,
        }
    })
    button.$mount();
    let userElemnt  = button.$el.querySelector('use');
    console.log(userElemnt);
    exexpect(userElemnt.getAttribute('xlink:href')).to.equal('#iloading')
    button.$el.remove();
    button.$destroy();
}
{
    let div = document.createElement('div');
    document.body.appendChild(div)
    const  Constructor = Vue.extend(Button);
    const  button = new Constructor({
        propsData:{
            icon:'left',
            loading:true,
        }
    })
    button.$mount(div);
    let svg  = button.$el.querySelector('svg');
    //只有挂在在DOM上才能够渲染css
    // exexpect(userElemnt.getAttribute('xlink:href')).to.equal('#iloading')
    //获取到相对应的order的值
    let {order} = window.getComputedStyle(svg);
    exexpect(order).to.equal('1');
    button.$el.remove();
    button.$destroy();
}

{
    let div = document.createElement('div');
    document.body.appendChild(div)
    const  Constructor = Vue.extend(Button);
    const  button = new Constructor({
        propsData:{
            icon:'left',
            loading:true,
            iconPosition:'right'
        }
    })
    button.$mount(div);
    let svg  = button.$el.querySelector('svg');
    //只有挂在在DOM上才能够渲染css
    // exexpect(userElemnt.getAttribute('xlink:href')).to.equal('#iloading')
    //获取到相对应的order的值
    let {order} = window.getComputedStyle(svg);
    exexpect(order).to.equal('2');
     button.$el.remove();
    button.$destroy();
}
//点击事件

{
    const  Constructor = Vue.extend(Button);
    const  gButton = new Constructor({
        propsData:{
            icon:'left',
        }
    })
    gButton.$mount();
    gButton.$on('click',function () {
        exexpect(1).to.equal(1)
    })
    let button = gButton.$el;
    button.click()
    button.$el.remove();
    button.$destroy();
}
