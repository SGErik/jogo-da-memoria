
export type CardStatus = "matched" | "revealed" | "hidden" | "missed"

export type CardsTemplate = {
    pairId: string;
    symbol: string;
    name: string;
}

export type CardsType = CardsTemplate & {
    id: number;
    status: CardStatus
}