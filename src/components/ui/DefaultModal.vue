<script setup lang="ts">

type Props = {
    open: boolean;
    closeOnOverlay?: boolean;
}

type Emit = {
    handleClose: []
}


const emit = defineEmits<Emit>()
const props = defineProps<Props>()

function clickOnOverlay() {
    if (!props.closeOnOverlay) {
        return
    }

    emit("handleClose")
}

</script>


<template>
    <Teleport to="#modal">
        <Transition name="modalFade">
            <div v-if="open" class="modalOverlay" @click.self="clickOnOverlay">
                <div class="modalContainer" role="dialog" aria-modal="true">
                    <slot />
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.modalOverlay {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #0f172ab3;
    backdrop-filter: blur(4px);
    z-index: 50;
}

.modalContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 28rem;
    padding: 32px 24px;
    background: linear-gradient(160deg, #202444, #263255);
    border: 1px solid #bedbff40;
    border-radius: 16px;
    box-shadow: 0 18px 40px #0f172a80;
}

.modalFade-enter-active,
.modalFade-leave-active {
    transition: opacity 0.3s;
}

.modalFade-enter-from,
.modalFade-leave-to {
    opacity: 0;
}
</style>
