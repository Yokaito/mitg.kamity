export const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-full flex-1 flex-col md:pl-[360px]">
      <div className="relative flex flex-col items-stretch flex-1 w-full h-full p-8 overflow-y-auto transition-width">
        {children}
      </div>
    </main>
  )
}

export default Main
