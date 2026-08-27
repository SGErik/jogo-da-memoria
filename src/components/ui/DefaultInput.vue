<script setup lang="ts">


type Props = {
    placeholder?: string
    valueModel: string;
    invalid?: boolean;
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
    background-color: #dbeafe2f;
    border-radius: 7px;
    padding: 12px;
    color: white;

}


.inputDefault::placeholder {
    color: rgb(0, 0, 0);
}
</style>
