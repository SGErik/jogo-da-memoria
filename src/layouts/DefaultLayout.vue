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
    padding-bottom: 20px;
}

.headerProject {

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 9vh;
    gap: 16px;
    border-bottom: 1px solid #2f3f55;

    span {
        color: #3730a3;
        font-size: 30px;
    }

    h1 {
        color: #e5e7eb;
        font-size: 28px;
        font-weight: 600;
    }
}
</style>
