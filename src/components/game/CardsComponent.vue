<script setup lang="ts">
import type { CardStatus } from '@/types/CardType';
import { computed } from 'vue';




type Props = {
    symbol: string;
    cardId: number;
    name: string;
    cardStatus: CardStatus;
    blockCard: boolean;
}

type Emit = {
    faceUpCard: [id: number]


}

const emit = defineEmits<Emit>()
const props = defineProps<Props>()

function handleClick() {
    emit('faceUpCard', props.cardId)
}

const isFacingUp = computed(() => props.cardStatus !== "hidden")
const missedCard = computed(() => props.cardStatus === "missed")
const matchedContainer = computed(() => props.cardStatus === "matched")





</script>


<template>
    <button class="cardContainer" :class="{ 'missedContainer': missedCard, 'matchedContainer': matchedContainer }"
        @click="handleClick" :disabled="blockCard">
        <Transition name="cardFade" mode="out-in">
            <span v-if="isFacingUp" key="cardSymbol" class="iconSymbol">{{ symbol }}</span>
            <span v-else key="cardHidden" class="starSymbol">♦</span>
        </Transition>
    </button>
</template>


<style scoped>
.cardContainer {
    width: 7rem;
    height: 10rem;
    background-color: #bedbff2c;
    border-radius: 12px;
    border: 1px solid #bedbff90;
    transition: all 0.2s;

    @media screen and (max-width: 568px) {
        width: 4.8rem;
        height: 7rem;
    }
}

.missedContainer {
    border: 1px solid red !important;
}

.matchedContainer {
    border: 1px solid green !important;
}

.cardContainer:hover {
    background-color: #bedbff5c;
}

.iconSymbol {
    font-size: 4rem;



}

.starSymbol {
    font-size: 4rem;
    color: white;

    @media screen and (max-width: 568px) {
        font-size: 2.6rem;
    }
}

.cardFade-enter-active,
.cardFade-leave-active {
    transition: opacity 0.15s;
}

.cardFade-enter-from,
.cardFade-leave-to {
    opacity: 0;
}
</style>