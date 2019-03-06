<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
        <svg v-if="icon" class="icon">
            <use :xlink:href=`#${icon}`></use>
        </svg>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    export default ({
        name: '',
//        props: ['icon', 'iconPosition'],//props的传值，父组件中驼峰必须使用"-"，
        props:{
            icon:{},
            iconPosition:{
                type:String,
                default:'left',
//                props自定义验证
                validator(value){
                    return value === 'left' || value === 'right';
                }
            },
        }
    })
</script>
<style lang="scss">
    .g-button {
        outline: none;
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        font: inherit;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background-color: var(--button-bg);
        vertical-align: middle;
        padding: 0 .5em;
        display: inline-flex;
        justify-content: center;
        align-items: center;

    &:hover {
        border: 1px solid var(--border-color-hover);
    }

    &:active {
        background-color: var(--button-active-bg);
    }
     >.icon{
         order: 1;
         margin-right: .5em;
     }
    >.content{
        order: 2;
    }
    &.icon-right {
        >.content{
            order: 1;
        }
        >.icon{
            order: 2;
            margin-left: .5em;
        }
    }

    }

</style>
