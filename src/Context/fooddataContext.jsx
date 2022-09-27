import {createContext, useContext, useState } from "react";
const FooddataContext = createContext();
export const FooddataProvider = ({children}) =>{
    const [item, setItem]=useState();
    return (
        <FooddataContext.Provider value ={{item,setItem}}>
            {children}
        </FooddataContext.Provider>
    )
}
export const useFooddataContext = () => useContext(FooddataContext)