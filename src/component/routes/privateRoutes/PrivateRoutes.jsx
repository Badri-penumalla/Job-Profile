import React from 'react'
import useUserContext from '../../hooks/useUserContext'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
    let {globalState} = useUserContext()
    // console.log(globalState.token);
    // console.log(children);
    
    //It is used so that without logging in, we can't go to the home page as the token isn't generated.
    if(!globalState.token){
    return <Navigate to="/login"></Navigate>
  }

  return <>
    {children}
  </>
}

export default PrivateRoutes