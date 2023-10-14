import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import STORAGE_KEYS from '../constants/storageKeys';

const useUser = create(
    persist((set) => ({
        state: {},
        captureUser: (user) => set(state => {
            return { ...state, user }
        }),
        resetAuth: () => set({ user: {} })
    }),
        {
            name: STORAGE_KEYS.USER,
            storage: createJSONStorage(() => localStorage),
        }
    )
)

export default useUser