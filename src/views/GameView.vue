<script setup lang="ts">
import GameBoard from '@/components/game/GameBoard.vue';
import DefaultButton from '@/components/ui/DefaultButton.vue';
import { TotalPairs } from '@/constants/data';
import router from '@/router';
import { useUserStore } from '@/stores/userStore';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const userStore = useUserStore()

const { userName, countRetry, countPairs } = storeToRefs(userStore)

const gameBoard = ref<InstanceType<typeof GameBoard> | null>(null)

function restartGame() {
    gameBoard.value?.restartGame()
}

function goToHome() {
    router.push("/")
}

</script>


<template>
    <div class="mainContainer">
        <main class="gameBoard">
            <div class="infosUser">
                <div class="infosUserContent">
                    <p class="playerName">Jogador: <strong>{{ userName }}</strong></p>
                    <p>Tentativas: <strong>{{ countRetry }}</strong></p>
                    <p>Pares: <strong>{{ countPairs }}/{{ TotalPairs }}</strong></p>
                </div>

                <div class="gameActions">
                    <DefaultButton @handle-click="restartGame">
                        <p>Reiniciar</p>
                    </DefaultButton>
                    <DefaultButton @handle-click="goToHome">
                        <p>Voltar ao início</p>
                    </DefaultButton>
                </div>
            </div>
            <GameBoard ref="gameBoard">

            </GameBoard>
        </main>
    </div>
</template>


<style scoped>
.mainContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    @media screen and (max-width: 568px) {
        padding: 0 14px 28px;
        margin-top: 22px;
    }

    @media screen and (max-width: 390px) {
        padding: 0 14px 24px;
        margin-top: 18px;
    }
}

.infosUserContent {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 0;
    gap: 18px;

    @media screen and (max-width: 568px) {
        flex-wrap: wrap;
        gap: 6px 16px;
    }
}

.playerName {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
}

.gameBoard {
    display: flex;
    flex-direction: column;
    width: fit-content;
    gap: 28px;

    @media screen and (max-width: 568px) {
        gap: 24px;
    }
}

.infosUser {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 0;
    min-width: 100%;
    gap: 28px;

    @media screen and (max-width: 900px) {
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
    }

    p {
        font-size: 1.2rem;
        color: white;
        white-space: nowrap;

        @media screen and (max-width: 768px) {
            font-size: 1.05rem;
        }

        @media screen and (max-width: 390px) {
            font-size: 0.95rem;
        }
    }


}


.gameActions {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    gap: 10px;

    .defaultButton {
        width: auto;
        padding: 0 16px;
        margin-top: 0;
        white-space: nowrap;
    }

    p {
        font-size: 1rem;

        @media screen and (max-width: 390px) {
            font-size: 0.85rem;
        }
    }

    @media screen and (max-width: 390px) {
        gap: 8px;

        .defaultButton {
            padding: 0 12px;
        }
    }
}
</style>