<template>
    <button class="g-button">按钮</button>
</template>
<script>
    export default({
        name:'',
    })
</script>
<style  lang="scss" >
    .g-button{
        outline: none;
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        font: inherit;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background-color: var(--button-bg);
       &:hover{
            border: 1px solid var(--border-color-hover);
        }
        &:active{
            background-color: var(--button-active-bg);
        }
    }

    #app{
        margin: 20px;
    }
    body{
        font-size: var(--font-size);
    }
</style>
