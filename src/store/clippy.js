import { create } from 'zustand'

const useClippyStore = create((set) => ({
  currentAgent: 'Links',
  isMuted: false,
  isVisible: true,
  setCurrentAgent: (v) => set({ currentAgent: v }),
  setIsMuted: (v) => set({ isMuted: v }),
  setIsVisible: (v) => set({ isVisible: v }),
}))

export default useClippyStore