<script setup lang="ts">
import GameBoard from '@/components/game/GameBoard.vue';
import DefaultButton from '@/components/ui/DefaultButton.vue';
import { TotalPairs } from '@/constants/data';
import router from '@/router';
import { useUserStore } from '@/stores/userStore';
import { storeToRefs } from 'pinia';

const userStore = useUserStore()

const { userName, countRetry, countPairs } = storeToRefs(userStore)

function goToHome() {
    router.push("/")
}

</script>


<template>
    <div class="mainContainer">
        <main class="gameBoard">
            <div class="infosUser">
                <div class="infosUserContent">
                    <p>Jogador: <strong>{{ userName }}</strong></p>
                    <p>Tentativas: <strong>{{ countRetry }}</strong></p>
                    <p>Pares: <strong>{{ countPairs }}/{{ TotalPairs }}</strong></p>
                </div>

                <DefaultButton class="backButton" @handle-click="goToHome">
                    <p>Voltar ao início</p>
                </DefaultButton>
            </div>
            <GameBoard>

            </GameBoard>
        </main>
    </div>
</template>


<style scoped>
.mainContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;

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
    gap: 18px;

    @media screen and (max-width: 568px) {
        flex-wrap: wrap;
        gap: 6px 16px;
    }
}

.gameBoard {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 40px;

    @media screen and (max-width: 568px) {
        gap: 24px;
    }
}

.infosUser {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    max-width: 670px;
    gap: 40px;


    p {
        font-size: 1.2rem;
        color: white;

        @media screen and (max-width: 768px) {
            font-size: 1.05rem;
        }

        @media screen and (max-width: 390px) {
            font-size: 0.95rem;
        }
    }


}


.backButton {
    width: auto;
    padding: 0 16px;
    margin-top: 0;
    white-space: nowrap;
}

.backButton>p {
    font-size: 1rem;

    @media screen and (max-width: 390px) {
        font-size: 0.9rem;
    }
}

@media screen and (max-width: 900px) {
    .infosUser {
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
    }
}
</style>