import { createContext } from "react"

export const Colect = createContext()

const Collection = ({children}) => {
    
  return (
      <Colect.Provider>
          {children}
      </Colect.Provider>
  )
}

export default Collection