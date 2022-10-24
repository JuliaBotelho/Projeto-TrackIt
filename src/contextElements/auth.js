import React, {createContext, useState} from "react";

export const AuthContext = createContext({})

function AuthProvider({children}){
    const [userData, setUserData] = useState({});
    const [todayProgress, settodayProgress] = useState(0)


    return(
        <AuthContext.Provider  value={{userData, setUserData, todayProgress, settodayProgress}} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;