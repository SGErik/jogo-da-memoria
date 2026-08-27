import { CardsSymbols } from "@/constants/data"
import { useRankingStore } from "@/stores/rankingStore"
import { useUserStore } from "@/stores/userStore"
import type { CardsType } from "@/types/CardType"
import { storeToRefs } from "pinia"
import { computed, ref, watch } from "vue"


export const useGame = () => {
    const initialCards = ref<CardsType[]>([...CardsSymbols, ...CardsSymbols].map((card, index) => ({
        ...card,
        id: index + 1

    })).sort(() => Math.random() - 0.5))

    const cards = ref<CardsType[]>(initialCards.value.map((card, index) => ({
        ...card,
        id: index + 1,
        status: "hidden"
    })))

    const blockCards = ref(false)

    const userStore = useUserStore()
    const { incrementRetry, resetRetry, incrementPairs, resetPairs } = userStore
    const { userName, countRetry } = storeToRefs(userStore)

    const rankingStore = useRankingStore()
    const { savePlayer } = rankingStore


    let flipCardsTimer: ReturnType<typeof setTimeout> | undefined
    let missedCardsTimer: ReturnType<typeof setTimeout> | undefined


    function startGame() {
        clearTimeout(flipCardsTimer)
        clearTimeout(missedCardsTimer)

        resetRetry()
        resetPairs()
        blockCards.value = true

        cards.value = cards.value.map((card) => ({
            ...card,
            status: "hidden"
        }))

        flipCardsTimer = setTimeout(() => {
            cards.value = [...initialCards.value].sort(() => Math.random() - 0.5).map((card, index) => ({
                ...card,
                id: index + 1,
                status: "revealed"
            }))

            blockCards.value = false
        }, 400)
    }


    function faceUpCard(cardId: number) {

        const card = ref(cards.value.find((card) => card.id === cardId))

        if (!card.value) {
            return;
        }
        if (card.value.status !== "hidden" || blockCards.value) {
            return
        }

        card.value.status = "revealed"


        checkCardsMatch()
    }


    function checkCardsMatch() {
        const revealedCards = ref(cards.value.filter((cards) => cards.status === "revealed"))

        if (!revealedCards.value) {
            return;
        }

        const [firstCard, secondCard] = revealedCards.value

        if (firstCard && secondCard) {
            blockCards.value = true
            if (firstCard?.pairId === secondCard?.pairId) {
                firstCard!.status = "matched"
                secondCard!.status = "matched"
                incrementPairs()
                blockCards.value = false
                return
            }

            firstCard!.status = "missed"
            secondCard!.status = "missed"
            incrementRetry()


            missedCardsTimer = setTimeout(() => {
                firstCard!.status = "hidden"
                secondCard!.status = "hidden"
                blockCards.value = false
            }, 1000)
        }


    }


    const finishedGame = computed<boolean>(() => cards.value.every((card) => card.status === "matched"))

    watch(finishedGame, (isFinished) => {
        if (!isFinished) {
            return
        }

        savePlayer(userName.value, countRetry.value)
    })



    return {
        cards,
        faceUpCard,
        blockCards,
        finishedGame,
        startGame
    }

}