import { ChildrenProps } from "@/models/childrenPropsModel"

function Container({children} : ChildrenProps) {
  return (
    <div className="container mx-auto">
        {children}
    </div>
  )
}

export default Container