<script setup lang="ts">


type Props = {
    placeholder?: string
    valueModel: string;
    invalid?: boolean;
    errorMessage?: string;
    name?: string;
}

type Emit = {
    "update:valueModel": [value: string]
}


const emit = defineEmits<Emit>()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<Props>()

function handleChangeInput(event: Event) {
    const target = event.target as HTMLInputElement
    emit("update:valueModel", target.value)
}

</script>


<template>
    <div class="inputClass">
        <slot name="labelInput"></slot>
        <input :name="name" :placeholder="placeholder" :aria-invalid="invalid" @input="handleChangeInput"
            class="inputDefault" :value="valueModel">
        <span v-if="invalid && errorMessage" class="inputErrorMessage" role="alert">{{ errorMessage }}</span>
    </div>


</template>

<style>
.inputClass {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    max-width: 27rem;

}

.inputDefault {
    width: 100%;
    height: 2.7rem;
    border: 1px solid #bedbff40;
    background-color: #dbeafe2f;
    border-radius: 7px;
    padding: 12px;
    color: white;
    transition: all 0.2s;

    @media screen and (max-width: 390px) {
        height: 2.5rem;
    }
}

.inputDefault:focus {
    outline: none;
    border-color: #7d96ea;
    background-color: #dbeafe3d;
    box-shadow: 0 0 0 3px #3a5ac54d;
}

.inputDefault[aria-invalid="true"] {
    border-color: #f87171;
    background-color: #f871711f;
}

.inputDefault[aria-invalid="true"]:focus {
    box-shadow: 0 0 0 3px #f871713d;
}

.inputErrorMessage {
    color: #f87171;
    font-size: 0.85rem;
    line-height: 1.2;
}


.inputDefault::placeholder {
    color: #e5e7eb66;
}
</style>