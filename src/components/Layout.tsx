import { ChildrenProps } from "@/models/childrenPropsModel"
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