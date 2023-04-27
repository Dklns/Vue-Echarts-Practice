<template>
    <div class="item">
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.item {
    height: 5.125rem;
    border: .0125rem solid blue;
    margin: .25rem;
    background-color: rgba(12, 130, 255, .85);
}
</style>