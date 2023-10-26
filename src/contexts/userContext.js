import {createContext, useContext} from 'react'

const userContext = createContext("");

//using useContext hook to simplyfy the imports
export const useUserContext = () => useContext(userContext);

export default userContext;