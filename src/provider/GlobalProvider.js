import { GlobalContext } from "../context/GlobalContext";
import { useEffect, useState } from "react";

export const GlobalProvider = (props) => {
    const [cart, setCart] = useState([])

    useEffect(()=> {
        console.log(cart)
    }, [cart])

    return <GlobalContext.Provider value={{ cart, setCart}}>
        {props.children}
    </GlobalContext.Provider>
}