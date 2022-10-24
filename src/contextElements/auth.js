import React, {createContext, useState} from "react";

export const AuthContext = createContext({})

function AuthProvider({children}){
    const [userData, setUserData] = useState({});


    return(
        <AuthContext.Provider  value={{userData, setUserData}} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;