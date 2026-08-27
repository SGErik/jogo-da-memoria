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
    width: 8.3rem;
    height: 10.6rem;
    padding: 0;
    background-color: transparent;
    border: none;
    perspective: 800px;

    @media screen and (min-width: 940px) and (min-height: 1050px) {
        width: 9.4rem;
        height: 11.7rem;
    }

    @media screen and (max-height: 950px) {
        width: 7.7rem;
        height: 9.7rem;
    }

    @media screen and (max-height: 900px) {
        width: 7.2rem;
        height: 9rem;
    }

    @media screen and (max-height: 850px) {
        width: 6.6rem;
        height: 8.3rem;
    }

    @media screen and (max-height: 800px) {
        width: 6rem;
        height: 7.6rem;
    }

    @media screen and (max-height: 750px) {
        width: 5.5rem;
        height: 6.9rem;
    }

    @media screen and (max-height: 700px) {
        width: 4.9rem;
        height: 6.2rem;
    }

    @media screen and (max-height: 650px) {
        width: 4rem;
        height: 5rem;
    }

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

.iconSymbol,
.starSymbol {
    font-size: 4.2rem;

    @media screen and (min-width: 940px) and (min-height: 1050px) {
        font-size: 4.7rem;
    }

    @media screen and (max-height: 950px) {
        font-size: 3.9rem;
    }

    @media screen and (max-height: 900px) {
        font-size: 3.6rem;
    }

    @media screen and (max-height: 850px) {
        font-size: 3.3rem;
    }

    @media screen and (max-height: 800px) {
        font-size: 3rem;
    }

    @media screen and (max-height: 750px) {
        font-size: 2.7rem;
    }

    @media screen and (max-height: 700px) {
        font-size: 2.4rem;
    }

    @media screen and (max-height: 650px) {
        font-size: 2rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 3.4rem;
    }

    @media screen and (max-width: 568px) {
        font-size: 2.6rem;
    }

    @media screen and (max-width: 390px) {
        font-size: 2.4rem;
    }
}

.starSymbol {
    color: white;
}
</style>
