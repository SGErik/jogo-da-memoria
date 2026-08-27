<template>
    <section class="principalContainer">
        <article class="aboutGame">
            <h1>Teste sua memória!</h1>
            <p>Encontre todos os pares de carta na menor quantidade de tentativas possíveis!</p>
        </article>
    </section>
</template>

<style scoped>
.principalContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
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
