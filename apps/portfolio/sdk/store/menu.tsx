import { create } from 'zustand'

interface MenuStore {
  isMenuOpen: boolean
  toggleMenu: (value: boolean) => void
}

const useMenuStore = create<MenuStore>((set) => ({
  isMenuOpen: false,
  toggleMenu: (value) => set(() => ({ isMenuOpen: value })),
}))

export default useMenuStore
