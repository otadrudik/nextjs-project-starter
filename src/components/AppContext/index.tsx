import { createContext } from 'react'

const defautContextValue: object | never = []
const AppContext = createContext(defautContextValue)

export default AppContext
