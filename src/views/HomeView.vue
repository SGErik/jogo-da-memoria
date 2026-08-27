<script setup lang="ts">
import RankingComponent from '@/components/game/RankingComponent.vue';
import DefaultButton from '@/components/ui/DefaultButton.vue';
import DefaultInput from '@/components/ui/DefaultInput.vue';
import router from '@/router';
import { useUserStore } from '@/stores/userStore';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';

const userInfo = useUserStore()
const { userName } = storeToRefs(userInfo)

const triedStartGame = ref(false)

function startGame() {
    triedStartGame.value = true

    if (!haveName.value) {
        return
    }

    router.push("game")
}


const haveName = computed<boolean>(() => Boolean(userName.value.trim() !== ''))

const invalidName = computed<boolean>(() => triedStartGame.value && !haveName.value)

</script>

<template>
    <section class="principalContainer">
        <article class="aboutGame">
            <h1>Teste sua memória!</h1>
            <p>Encontre todos os pares de carta na menor quantidade de tentativas possíveis!</p>
        </article>
        <div class="gameInput">
            <DefaultInput name="myName" v-model:value-model="userName" :invalid="invalidName"
                error-message="Por favor, digite seu nome.">
                <template #labelInput>
                    <label for="myName" class="labelFor">Digite o seu nome</label>
                </template>
            </DefaultInput>
            <DefaultButton @handle-click="startGame" class="startGameButton">
                <p>Jogar!</p>
            </DefaultButton>
        </div>

        <RankingComponent />
    </section>
</template>

<style scoped>
.principalContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
}

.labelFor {
    color: white;
    font-size: 20px;
    font-weight: 400;
}

.startGameButton {
    margin-top: 38px;
}



.gameInput {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    margin-top: 20px;
    gap: 12px;
}

.aboutGame {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;

    h1 {
        font-size: 2.7rem;
        color: #e5e7eb;
    }

    p {
        color: #e5e7ebc5;
        font-size: 1rem;
    }
}
</style>