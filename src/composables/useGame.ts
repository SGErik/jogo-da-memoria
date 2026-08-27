import { CardsSymbols } from "@/constants/data"
import { useUserStore } from "@/stores/userStore"
import type { CardsType } from "@/types/CardType"
import { ref } from "vue"


export const useGame = () => {
    const initialCards = ref<CardsType[]>([...CardsSymbols, ...CardsSymbols].map((card, index) => ({
        ...card,
        id: index + 1

    })).sort(() => Math.random() - 0.5))

    const cards = ref<CardsType[]>(initialCards.value)

    const blockCards = ref(false)

    const userStore = useUserStore()
    const { incrementRetry, resetRetry, incrementPairs, resetPairs } = userStore


    function startGame() {
        resetRetry()
        resetPairs()
        blockCards.value = false

        cards.value = [...initialCards.value].sort(() => Math.random() - 0.5).map((card) => ({
            ...card,
            status: "revealed"
        }))
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


            setTimeout(() => {
                firstCard!.status = "hidden"
                secondCard!.status = "hidden"
                blockCards.value = false
            }, 1500)
        }


    }




    return {
        cards,
        faceUpCard,
        blockCards,
        startGame
    }

}
