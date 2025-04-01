import { ChildrenProps } from "@/models/childrenProps"

function Container({children} : ChildrenProps) {
  return (
    <div className="container mx-auto">
        {children}
    </div>
  )
}

export default Container