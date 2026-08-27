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
    font-size: clamp(2rem, min(6.5vh, 7.5vw), 4.9rem);
    width: 2em;
    height: 2.5em;
    padding: 0;
    background-color: transparent;
    border: none;
    perspective: 800px;
    transition: opacity 0.2s;

    @media screen and (min-width: 940px) and (min-height: 1050px) {
        font-size: 4.9rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 3.4rem;
    }

    @media screen and (max-width: 568px) {
        font-size: 2.4rem;
    }

    @media screen and (max-width: 390px) {
        font-size: 2.2rem;
    }
}


.cardContainer:disabled {
    opacity: 1;
    color: inherit;
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
    border-radius: 8px;
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

.cardContainer.matchedContainer {
    opacity: 0.75;
}

.starSymbol {
    color: white;
}
</style>
