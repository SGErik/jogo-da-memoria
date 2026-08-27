import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('user', () => {

    const userName = ref("")
    const countRetry = ref(0)
    const countPairs = ref(0)

    function incrementRetry() {
        return countRetry.value++
    }

    function resetRetry() {
        countRetry.value = 0
    }

    function incrementPairs() {
        return countPairs.value++
    }

    function resetPairs() {
        countPairs.value = 0
    }


    return { userName, countRetry, countPairs, incrementRetry, resetRetry, incrementPairs, resetPairs }
})

