type AppLayoutProps = {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-svh w-full bg-gray-600 text-gray-200">
      <div className="border-4 border-dashed border-blue-600 px-8 py-4 mx-auto flex flex-col gap-20 w-3xl h-min">
        {children}
      </div>
    </div>
  )
}
export default AppLayout