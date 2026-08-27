<template>
    <div class="rootMain">
        <header class="headerProject">
            <RouterLink to="/" class="brandLink">
                <span class="brandIcon">🐶</span>
                <p class="brandName">Jogo da memória</p>
            </RouterLink>
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
    background: radial-gradient(55rem 26rem at 50% 0%, #3a5ac526, transparent 70%);
}

.headerProject {

    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 64px;
    padding: 0 20px;
    gap: 12px;
    background-color: #171930d9;
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #2f3f55;

    @media screen and (max-width: 568px) {
        height: 56px;
        padding: 0 16px;
    }

    @media screen and (max-width: 390px) {
        padding: 0 12px;
    }
}

.brandLink {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;

    @media screen and (max-width: 390px) {
        gap: 8px;
    }
}

.brandIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.4rem;
    height: 2.4rem;
    font-size: 22px;
    background-color: #3a5ac533;
    border: 1px solid #3a5ac566;
    border-radius: 10px;

    @media screen and (max-width: 568px) {
        width: 2.1rem;
        height: 2.1rem;
        font-size: 19px;
    }

    @media screen and (max-width: 390px) {
        width: 1.9rem;
        height: 1.9rem;
        font-size: 17px;
    }
}

.brandName {
    color: #e5e7eb;
    font-size: 26px;
    font-weight: 600;

    @media screen and (max-width: 568px) {
        font-size: 23px;
    }

    @media screen and (max-width: 390px) {
        font-size: 19px;
    }
}
</style>
