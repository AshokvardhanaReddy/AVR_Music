import { createContext, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [token, setToken] = useState(false);


    const contextValue = {token}
    return (
        <>
        <StoreContext.Provider value = {contextValue} >
            {props.children}
        </StoreContext.Provider>
        </>
    )
}


export default StoreContextProvider;