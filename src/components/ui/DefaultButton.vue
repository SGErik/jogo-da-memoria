<script setup lang="ts">

type Props = {
    variant?: "primary" | "secondary";
}

type Emit = {
    handleClick: []
}

const emit = defineEmits<Emit>()

defineProps<Props>()

function clickOnButton(e: Event) {
    e.preventDefault()
    emit("handleClick")
}




</script>



<template>
    <button class="defaultButton" :class="{ 'primaryButton': variant === 'primary' }" @click="clickOnButton">
        <slot />
    </button>
</template>

<style scoped>
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

.primaryButton {
    background-color: #3a5ac5;
    border-color: #7d96ea;
}

.primaryButton:hover {
    background-color: #4a6ad8;
}

.defaultButton> :slotted(p) {
    color: white;
    font-size: 1rem;
}
</style>
