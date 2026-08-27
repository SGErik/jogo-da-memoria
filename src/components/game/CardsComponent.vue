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
        <div class="cardInner" :class="{ 'cardFlipped': isFacingUp }">
            <div class="cardFace cardBack">
                <span class="starSymbol">♦</span>
            </div>
            <div class="cardFace cardFront">
                <span class="iconSymbol">{{ symbol }}</span>
            </div>
        </div>
    </button>
</template>


<style scoped>
.cardContainer {
    width: 7rem;
    height: 10rem;
    padding: 0;
    background-color: transparent;
    border: none;
    perspective: 800px;

    @media screen and (max-width: 768px) {
        width: 6.2rem;
        height: 8.8rem;
    }

    @media screen and (max-width: 568px) {
        width: 4.8rem;
        height: 7rem;
    }

    @media screen and (max-width: 390px) {
        width: 4.4rem;
        height: 6.4rem;
    }
}

.cardInner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.4s;
}

.cardFlipped {
    transform: rotateY(180deg);
}

.cardFace {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #bedbff2c;
    border: 1px solid #bedbff90;
    border-radius: 12px;
    backface-visibility: hidden;
    transition: all 0.2s;
}

.cardFront {
    transform: rotateY(180deg);
}

.cardContainer:hover .cardFace {
    background-color: #bedbff5c;
}

.missedContainer .cardFace {
    border-color: red;
}

.matchedContainer .cardFace {
    border-color: green;
}

.iconSymbol {
    font-size: 4rem;

    @media screen and (max-width: 768px) {
        font-size: 3.4rem;
    }

    @media screen and (max-width: 568px) {
        font-size: 2.6rem;
    }

    @media screen and (max-width: 390px) {
        font-size: 2.3rem;
    }
}

.starSymbol {
    font-size: 4rem;
    color: white;

    @media screen and (max-width: 768px) {
        font-size: 3.4rem;
    }

    @media screen and (max-width: 568px) {
        font-size: 2.6rem;
    }

    @media screen and (max-width: 390px) {
        font-size: 2.3rem;
    }
}
</style>
