<template>
    <div class="mainContainer">
        <header class="rankingHeader">
            <h2>🏆 Ranking</h2>
        </header>

        <p v-if="bestPlayers.length === 0" class="emptyRanking">
            O ranking está vazio. Seja o primeiro do ranking!
        </p>

        <ol v-else class="rankingList">
            <li v-for="(player, index) in bestPlayers" :key="player.id" class="rankingItem">
                <span class="playerPosition">{{ positionLabel(index) }}</span>
                <span class="playerName">{{ player.userName }}</span>
                <span class="playerRetry">{{ retryLabel(player.countRetry) }}</span>
            </li>
        </ol>
    </div>
</template>

<script setup lang="ts">
import { RankingMedals } from '@/constants/data';
import { useRankingStore } from '@/stores/rankingStore';
import { storeToRefs } from 'pinia';

const rankingStore = useRankingStore()

const { bestPlayers } = storeToRefs(rankingStore)

function positionLabel(index: number) {
    return RankingMedals[index] ?? `${index + 1}º`
}

function retryLabel(countRetry: number) {
    if (countRetry === 1) {
        return "1 tentativa"
    }

    return `${countRetry} tentativas`
}

</script>

<style scoped>
.mainContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 35rem;
    margin-top: 48px;
    gap: 16px;

    @media screen and (max-width: 568px) {
        margin-top: 36px;
    }

    @media screen and (max-width: 390px) {
        margin-top: 28px;
        gap: 12px;
    }
}

.rankingHeader {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    h2 {
        color: #e5e7eb;
        font-size: 1.6rem;
        font-weight: 600;

        @media screen and (max-width: 568px) {
            font-size: 1.4rem;
        }

        @media screen and (max-width: 390px) {
            font-size: 1.25rem;
        }
    }

    p {
        color: #e5e7ebc5;
        font-size: 0.9rem;

        @media screen and (max-width: 390px) {
            font-size: 0.8rem;
        }
    }
}

.emptyRanking {
    color: #e5e7eb90;
    font-size: 0.95rem;
    text-align: center;
    padding: 20px;
    border: 1px dashed #bedbff40;
    border-radius: 12px;

    @media screen and (max-width: 390px) {
        font-size: 0.85rem;
        padding: 16px 12px;
    }
}

.rankingList {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 8px;
}

.rankingItem {
    display: grid;
    grid-template-columns: 3rem 1fr auto;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    background-color: #bedbff2c;
    border: 1px solid #bedbff40;
    border-radius: 10px;
    transition: all 0.2s;

    @media screen and (max-width: 568px) {
        grid-template-columns: 2.4rem 1fr auto;
        gap: 8px;
        padding: 10px 12px;
    }

    @media screen and (max-width: 390px) {
        grid-template-columns: 2rem 1fr auto;
        padding: 10px;
    }
}

.rankingItem:hover {
    background-color: #bedbff5c;
}

.playerPosition {
    color: #e5e7eb;
    font-size: 1.1rem;
    font-weight: 600;

    @media screen and (max-width: 390px) {
        font-size: 1rem;
    }
}

.playerName {
    color: #e5e7eb;
    font-size: 1.05rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media screen and (max-width: 568px) {
        font-size: 0.95rem;
    }

    @media screen and (max-width: 390px) {
        font-size: 0.9rem;
    }
}

.playerRetry {
    color: #bedbffdd;
    font-size: 0.9rem;
    white-space: nowrap;

    @media screen and (max-width: 568px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 390px) {
        font-size: 0.75rem;
    }
}
</style>
