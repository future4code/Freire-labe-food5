import { GlobalContext } from "../context/GlobalContext";
import { useEffect, useState } from "react";

export const GlobalProvider = (props) => {
    const [cart, setCart] = useState([])

    return <GlobalContext.Provider value={{ cart, setCart}}>
        {props.food}
    </GlobalContext.Provider>
}