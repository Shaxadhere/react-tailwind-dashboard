import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import STORAGE_KEYS from '../constants/storageKeys';

const useSettings = create(
    persist((set) => ({
        state: {
            subsider: false
        },
        toggleSubsider: () => set(state => {
            return { ...state, state: { ...state.state, subsider: !state.state.subsider } }
        }),
    }),
        {
            name: STORAGE_KEYS.SETTINGS,
            storage: createJSONStorage(() => localStorage),
        }
    )
)

export default useSettings