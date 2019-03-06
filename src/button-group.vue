<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>
<style lang="scss">
    .g-button-group {
        display: inline-flex;
        justify-content: flex-start;
        align-items: center;
        vertical-align: middle;

    > .g-button {
        border-radius: 0;

    &:not(:first-child) {
        margin-left: -1px;
    }

    &:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
    }

    &:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
    }

    &:hover {
        position: relative;
        z-index: 1;
    }

    }
    }
</style>
<script>
   export default({
       mounted(){
           for(let node of this.$el.children){
               let name = node.nodeName.toLowerCase();
               if(name !== 'button'){
                   console.warn(`g-button-group 的子元素应该全是g-button 但你写的是${name}`)
               }
           }
       }
   })
</script>