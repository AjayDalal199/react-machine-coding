type AppLayoutProps = {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-svh w-full bg-gray-600 text-gray-200">
      <div className="border-4 border-dashed border-blue-600 min-h-svh md:py-2 md:px-4 lg:px-8 lg:py-4 mx-auto flex flex-col gap-2 lg:gap-4 w-full md:w-4/5 lg:w-3/5 h-min">
        {children}
      </div>
    </div>
  )
}
export default AppLayout