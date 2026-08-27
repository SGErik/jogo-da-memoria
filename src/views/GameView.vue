<script setup lang="ts">
import GameBoard from '@/components/game/GameBoard.vue';
import { TotalPairs } from '@/constants/data';
import { useUserStore } from '@/stores/userStore';
import { storeToRefs } from 'pinia';

const userStore = useUserStore()

const { userName, countRetry, countPairs } = storeToRefs(userStore)

</script>


<template>
    <div class="mainContainer">
        <main class="gameBoard">
            <div class="infosUser">
                <p>Jogador: <strong>{{ userName }}</strong></p>
                <p>Tentativas: <strong>{{ countRetry }}</strong></p>
                <p>Pares: <strong>{{ countPairs }}/{{ TotalPairs }}</strong></p>
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
}

.gameBoard {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 40px;
}

.infosUser {
    display: flex;
    justify-content: center;
    gap: 40px;


    p {
        font-size: 1.2rem;
        color: white;
    }


}
</style>
