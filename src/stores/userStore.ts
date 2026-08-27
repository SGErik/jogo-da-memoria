import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('user', () => {

    const userName = ref("")
    const countRetry = ref(0)

    function incrementRetry() {
        return countRetry.value++
    }

    function resetRetry() {
        countRetry.value = 0
    }


    return { userName, countRetry, incrementRetry, resetRetry }
})

