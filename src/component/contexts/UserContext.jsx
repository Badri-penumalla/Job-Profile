import React, { createContext, useState } from 'react'

export const ContextApi = createContext(null)
let {Provider} = ContextApi
const UserContext = ({children}) => {
    const [globalState, setGlobalState] = useState({
        user: null,
        token: null,
        isLoading: false
    })
  return (
    <Provider value={{globalState, setGlobalState}}>
        {children}
    </Provider>
  )
}

export default UserContext