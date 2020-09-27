import React from "react";
import store from "./redux/redux-store";

//архивный файл, удалён в 45 после установки react-redux
const StoreContext = React.createContext(null);

export const Provider = (props) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}

export default StoreContext;