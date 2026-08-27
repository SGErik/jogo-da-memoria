<script setup lang="ts">
import DefaultButton from '@/components/ui/DefaultButton.vue';
import DefaultModal from '@/components/ui/DefaultModal.vue';
import router from '@/router';
import { useUserStore } from '@/stores/userStore';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

type Props = {
    open: boolean;
}

type Emit = {
    handleRestart: []
}

const emit = defineEmits<Emit>()
defineProps<Props>()

const userStore = useUserStore()

const { userName, countRetry } = storeToRefs(userStore)

const retryLabel = computed<string>(() => countRetry.value === 1 ? "1 tentativa" : `${countRetry.value} tentativas`)

function restartGame() {
    emit("handleRestart")
}

function goToRanking() {
    router.push("/")
}

</script>


<template>
    <DefaultModal :open="open">
        <div class="victoryContainer">
            <span class="victoryIcon">🏆</span>

            <header class="victoryHeader">
                <h2>Parabéns, {{ userName }}!</h2>
                <p>Você encontrou todos os pares em <strong>{{ retryLabel }}</strong>.</p>
            </header>

            <div class="victoryActions">
                <DefaultButton @handle-click="restartGame">
                    <p>Jogar de novo</p>
                </DefaultButton>
                <DefaultButton @handle-click="goToRanking">
                    <p>Ver ranking</p>
                </DefaultButton>
            </div>
        </div>
    </DefaultModal>
</template>

<style scoped>
.victoryContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
}

.victoryIcon {
    font-size: 3.4rem;
}

.victoryHeader {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    text-align: center;

    h2 {
        color: #e5e7eb;
        font-size: 1.7rem;
        font-weight: 600;
    }

    p {
        color: #e5e7ebc5;
        font-size: 1rem;
    }

    strong {
        color: #bedbff;
    }
}

.victoryActions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;

    .defaultButton {
        width: auto;
        padding: 0 20px;
        margin-top: 8px;
    }
}
</style>
