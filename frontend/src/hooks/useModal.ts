import { create } from "zustand"

interface ModalState {
  modals: JSX.Element[]
  open: (element: JSX.Element) => void
  close: () => void
}

export const useModal = create<ModalState>((set) => ({
  modals: [],
  open: (element) => set((state) => ({ modals: [...state.modals, element] })),
  close: () => {
    document.body.style.overflow = "auto"
    set((state) => ({ modals: state.modals.slice(0, -1) }))
  },
}))
