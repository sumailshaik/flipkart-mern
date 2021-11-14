import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
    openModal: false,
    isSignup: false,
}

export const DataLayer = createContext(INITIAL_STATE);

export const DataLayerProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    return (
        <DataLayer.Provider
          value={{
            openModal: state.openModal,
            isSignup: state.isSignup,
            dispatch,
          }}
        >
          {children}
        </DataLayer.Provider>
      );
};