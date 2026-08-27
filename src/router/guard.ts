import { useUserStore } from "@/stores/userStore";
import { storeToRefs } from "pinia";
import type { Router } from "vue-router";


export function useGuardRoute(router: Router) {
    router.beforeEach((to, from)=> {
        const userInfo = useUserStore()

        const { userName } = storeToRefs(userInfo) 

        if(to.meta.requiresAuth && userName.value === ""){
            return { path: "/"}
        }
    
    })
}