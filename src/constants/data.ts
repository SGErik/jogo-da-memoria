import type { CardsType } from "@/types/CardType";


export const RankingStorageKey = "memoryGameRanking"

export const MaxRankingPlayers = 10

export const RankingMedals = ["🥇", "🥈", "🥉"]

export const CardsSymbols: CardsType[] = [
    {
        id: 1,
        symbol: "🐸",
        name: "Sapo",
        pairId: "frog",
        status: "revealed"
    },
    {
        id: 2,
        symbol: "🐼",
        name: "Panda",
        pairId: "panda",
        status: "revealed"
    },
    {
        id: 3,
        symbol: "🐨",
        name: "Coala",
        pairId: "coala",
        status: "revealed"
    },
    {
        id: 4,
        symbol: "🐻",
        name: "Urso",
        pairId: "bear",
        status: "revealed"
    },
    {
        id: 5,
        symbol: "🐰",
        name: "Coelho",
        pairId: "rabbit",
        status: "revealed"
    },
    {
        id: 6,
        symbol: "🐮",
        name: "Vaca",
        pairId: "cow",
        status: "revealed"
    },
    {
        id: 7,
        symbol: "🐺",
        name: "Lobo",
        pairId: "wolf",
        status: "revealed"
    },
    {
        id: 8,
        symbol: "🐶",
        name: "Cachorro",
        pairId: "dog",
        status: "revealed"
    },
    {
        id: 9,
        symbol: "🐵",
        name: "Macaco",
        pairId: "monkey",
        status: "revealed"

    },
    {
        id: 10,
        symbol: "🐭",
        name: "Rato",
        pairId: "rat",
        status: "revealed"
    }
]

export const TotalPairs = CardsSymbols.length