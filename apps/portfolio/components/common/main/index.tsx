export const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-full flex-1 flex-col md:pl-[360px]">
      <div className="relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1">
        {children}
      </div>
    </main>
  )
}

export default Main
