import { createContext, useContext } from 'react'

const AccountContext = createContext()

export const useStateValue = () => useContext(AccountContext)

export default AccountContext
