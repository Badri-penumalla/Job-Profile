import React, { useContext } from 'react'
import { ContextApi } from '../contexts/UserContext';

const useUserContext = () => {
  let context = useContext(ContextApi);
  return context;
}

export default useUserContext