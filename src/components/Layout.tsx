import { ChildrenProps } from "@/models/childrenProps"
import Navbar from "./Navbar"

function Layout({children} : ChildrenProps) {
  return (
    <>
        <Navbar/>
        {children}
    </>
    
  )
}

export default Layout