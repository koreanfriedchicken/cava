import { createContext, useContext, useReducer } from "react";
import { bagReducer } from "./Reducers";

const Bag = createContext()

const BagContext = ({ children }) => {

  const [state, dispatch] = useReducer(bagReducer, {
    bag:[ ],
  })
  return <Bag.Provider value={{state, dispatch}}>
    {children}
  </Bag.Provider>
}

export default BagContext

export const BagState = () => {
  return useContext(Bag)
}