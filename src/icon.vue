<template>
    <svg class="icon">
        <use :xlink:href=`#i${name}`></use>
    </svg>
</template>
<style>

</style>
<script>
    export default ({
        props:['name']
    })
</script>