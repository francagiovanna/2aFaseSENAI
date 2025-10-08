import { createContext } from "react"

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
    const[produto, setproduto]=useState('Mouse')
    const[produtos, setProdutos]
    
    return (
        <GlobalContext.Provider value={{produto}}>
            {children}
        </GlobalContext.Provider>
    )
}