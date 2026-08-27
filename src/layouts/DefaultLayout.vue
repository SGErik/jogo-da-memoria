<template>
    <div class="rootMain">
        <header class="headerProject">
            <span>🐶</span>
            <h1>Jogo da memória</h1>
        </header>

        <main>
            <RouterView />
        </main>
    </div>

</template>


<style scoped>
.rootMain {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}

.headerProject {

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 9vh;
    min-height: 56px;
    padding: 0 16px;
    gap: 16px;
    border-bottom: 1px solid #2f3f55;

    @media screen and (max-width: 390px) {
        gap: 10px;
    }

    span {
        color: #3730a3;
        font-size: 30px;

        @media screen and (max-width: 568px) {
            font-size: 25px;
        }

        @media screen and (max-width: 390px) {
            font-size: 22px;
        }
    }

    h1 {
        color: #e5e7eb;
        font-size: 28px;
        font-weight: 600;

        @media screen and (max-width: 568px) {
            font-size: 23px;
        }

        @media screen and (max-width: 390px) {
            font-size: 19px;
        }
    }
}
</style>