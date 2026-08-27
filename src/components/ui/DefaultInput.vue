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

}

.inputDefault {
    width: 27rem;
    height: 2.7rem;
    border: 1px solid #bedbff40;
    background-color: #dbeafe2f;
    border-radius: 7px;
    padding: 12px;
    color: white;
    transition: all 0.2s;
}

.inputDefault[aria-invalid="true"] {
    border-color: #f87171;
    background-color: #f871711f;
}

.inputErrorMessage {
    color: #f87171;
    font-size: 0.85rem;
    line-height: 1.2;
}


.inputDefault::placeholder {
    color: rgb(0, 0, 0);
}
</style>