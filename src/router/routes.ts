import DefaultLayout from "@/layouts/DefaultLayout.vue";
import GameView from "@/views/GameView.vue";
import HomeView from "@/views/HomeView.vue";
import type { RouteRecordRaw } from "vue-router";


export const routes: RouteRecordRaw[] = [{
    path: '/',
    component: DefaultLayout,
    children: [{
        path: '',
        name: 'home',
        component: HomeView,
        meta: {title: 'Página Inicial'}
    },
    {
        path: "game",
        name: "game",
        component: GameView,
        meta: {title: 'Jogo da Mémoria', requiresAuth: true}
    }

]
}] 