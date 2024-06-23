import { createContext, useState } from "react";

export const AuthContext = createContext()

  const AuthProdiver = ({children}) => {
    const [user, SetUser] = useState(null)

    return(
        <AuthContext.Provider value={{user, SetUser}}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProdiver