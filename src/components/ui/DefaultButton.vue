<script setup lang="ts">

type Emit = {
    handleClick: []
}

const emit = defineEmits<Emit>()

function clickOnButton(e: Event) {
    e.preventDefault()
    emit("handleClick")
}




</script>



<template>
    <button class="defaultButton" @click="clickOnButton">
        <slot />
    </button>
</template>

<style>
.defaultButton {
    width: 7rem;
    height: 2.8rem;
    background-color: #3a5ac570;
    cursor: pointer;
    border-radius: 6px;
    border: 1px solid oklch(86.951% 0.06395 273.317 / 0.172);
    transition: all 0.4s;

}

.defaultButton:hover {
    background-color: #3a5ac5ef;
}

.defaultButton>p {
    color: white;
}
</style>