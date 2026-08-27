<script setup lang="ts">
import { useGame } from '@/composables/useGame.ts';
import CardsComponent from './CardsComponent.vue';
import { computed, onMounted } from 'vue';
import type { CardsType } from '@/types/CardType.ts';




const { cards, faceUpCard, blockCards, startGame } = useGame()
const afterCards = computed<CardsType[]>(() => cards.value.map((cards) => ({
    ...cards,
    status: "hidden"
})))

onMounted(() => {
    restartGame()
})

function hideCards() {
    setTimeout(() => {
        cards.value = afterCards.value
    }, 3000)
}


function restartGame() {
    startGame()
    hideCards()
}




</script>


<template>
    <div class="boardContainer">
        <CardsComponent v-for="card in cards" :key="card.id" :card-id="card.id" :name="card.name" :symbol="card.symbol"
            v-on:face-up-card="faceUpCard" :card-status="card.status" :block-card="blockCards">
        </CardsComponent>

    </div>
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
    }
}
</style>
