import MenuToggle from '@/components/ui/MenuToggle'
import ThemeToggle from '@/components/ui/ThemeToggle'

export const Header = () => {
  return (
    <header className="dark:bg-indigo-500 bg-slate-800 max-h-[75px] min-h-[75px] flex items-center px-4 sticky w-full top-0 left-0 justify-between z-10">
      <MenuToggle />
      <input
        type="text"
        className="pr-4 py-1 bg-transparent border-b text-slate-100 dark:text-white focus:outline-none border-slate-200 placeholder:text-slate-200/75 min-w-[190px]"
        placeholder="search for projects"
      />
      <ThemeToggle />
    </header>
  )
}

export default Header
