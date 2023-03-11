import {ref} from 'vue'
import { defineStore } from 'pinia'

import { StorageSerializers, useStorage } from "@vueuse/core";

export const useAppStore = defineStore('app', () => {

    const userStored = useStorage('currentuser', null, undefined, { serializer: StorageSerializers.object })

    const currentUser = ref(userStored)

  
    return { currentUser }
  })