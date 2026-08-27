<script setup lang="ts">
import { useGame } from '@/composables/useGame.ts';
import CardsComponent from './CardsComponent.vue';
import VictoryComponent from './VictoryComponent.vue';
import { computed, onMounted } from 'vue';
import type { CardsType } from '@/types/CardType.ts';
import { FlipCardsTime } from '@/constants/data.ts';




const { cards, faceUpCard, blockCards, finishedGame, startGame } = useGame()
const afterCards = computed<CardsType[]>(() => cards.value.map((cards) => ({
    ...cards,
    status: "hidden"
})))

onMounted(() => {
    restartGame()
})

let hideCardsTimer: ReturnType<typeof setTimeout>

function hideCards() {
    clearTimeout(hideCardsTimer)

    hideCardsTimer = setTimeout(() => {
        cards.value = afterCards.value
    }, FlipCardsTime + 3000)
}


function restartGame() {
    startGame()
    hideCards()
}


defineExpose({ restartGame })



</script>


<template>
    <div class="boardContainer">
        <CardsComponent v-for="card in cards" :key="card.id" :card-id="card.id" :name="card.name" :symbol="card.symbol"
            v-on:face-up-card="faceUpCard" :card-status="card.status" :block-card="blockCards">
        </CardsComponent>

    </div>

    <VictoryComponent :open="finishedGame" v-on:handle-restart="restartGame" />
</template>

<style scoped>
.boardContainer {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 28px;
    max-width: 768px;


    @media screen and (max-width: 1366px) {
        grid-template-columns: repeat(5, 1fr);
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
    }

    @media screen and (max-width: 568px) {
        gap: 14px;
    }

    @media screen and (max-width: 390px) {
        gap: 12px;
    }
}
</style>