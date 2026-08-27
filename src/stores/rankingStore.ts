import { MaxRankingPlayers, RankingStorageKey } from "@/constants/data";
import type { RankingType } from "@/types/RankingType";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useRankingStore = defineStore('ranking', () => {

    function loadRanking(): RankingType[] {
        const savedRanking = localStorage.getItem(RankingStorageKey)

        if (!savedRanking) {
            return []
        }

        try {
            const parsedRanking = JSON.parse(savedRanking) as RankingType[]

            if (!Array.isArray(parsedRanking)) {
                return []
            }

            return parsedRanking
        } catch {
            return []
        }
    }

    const players = ref<RankingType[]>(loadRanking())

    const bestPlayers = computed<RankingType[]>(() => [...players.value]
        .sort((firstPlayer, secondPlayer) => firstPlayer.countRetry - secondPlayer.countRetry)
        .slice(0, MaxRankingPlayers))

    function savePlayer(userName: string, countRetry: number) {
        if (userName === "") {
            return
        }

        players.value.push({
            id: Date.now(),
            userName: userName,
            countRetry: countRetry,
            finishedAt: new Date().toISOString()
        })

        localStorage.setItem(RankingStorageKey, JSON.stringify(players.value))
    }


    return { players, bestPlayers, savePlayer }
})
