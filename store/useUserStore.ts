import { create } from 'zustand';

type UserState = {
    isOnboardingFinished: boolean;
    toggleOnboarding: () => void;
}

export const useUserStore = create<UserState>((set) => {
    return {
        isOnboardingFinished: false,
        toggleOnboarding: () => 
            set((state) => ({
                isOnboardingFinished: !state.isOnboardingFinished
            }))
    }
});