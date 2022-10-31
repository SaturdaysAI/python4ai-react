import { FC, PropsWithChildren } from "react"

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="container min-h-screen flex flex-col">
        {children}
    </div>
  )
}

export default Layout