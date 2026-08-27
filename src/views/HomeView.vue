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
    padding: 0 20px 40px;
    margin-top: 40px;

    @media screen and (max-width: 568px) {
        margin-top: 28px;
    }

    @media screen and (max-width: 390px) {
        padding: 0 14px 32px;
        margin-top: 20px;
    }
}

.labelFor {
    color: white;
    font-size: 20px;
    font-weight: 400;

    @media screen and (max-width: 568px) {
        font-size: 18px;
    }

    @media screen and (max-width: 390px) {
        font-size: 16px;
    }
}

.startGameButton {
    margin-top: 38px;

    @media screen and (max-width: 568px) {
        width: 100%;
        max-width: 27rem;
        margin-top: 8px;
    }
}



.gameInput {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    margin-top: 20px;
    gap: 12px;

    @media screen and (max-width: 568px) {
        flex-direction: column;
        align-items: center;
        gap: 4px;
    }
}

.aboutGame {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    text-align: center;

    h1 {
        font-size: 2.7rem;
        color: #e5e7eb;

        @media screen and (max-width: 768px) {
            font-size: 2.2rem;
        }

        @media screen and (max-width: 568px) {
            font-size: 1.9rem;
        }

        @media screen and (max-width: 390px) {
            font-size: 1.6rem;
        }
    }

    p {
        color: #e5e7ebc5;
        font-size: 1rem;

        @media screen and (max-width: 568px) {
            font-size: 0.95rem;
        }

        @media screen and (max-width: 390px) {
            font-size: 0.85rem;
        }
    }
}
</style>