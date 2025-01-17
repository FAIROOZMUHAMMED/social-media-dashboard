import React, { createContext, useContext } from "react";

const AuthContext = createContext(null);

export const useAuth = ()=>useContext(AuthContext);

export const AuthProvider = ({ children, value }) => {
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}