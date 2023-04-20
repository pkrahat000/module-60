import React, { createContext } from 'react';

    //* _Step- 1 : createContext(null) and export
    export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {

     //* _Step- 3 : Create Context Value
     const user = {displayName :'Power By rahat '}
    return (
        //* _Step- 2 : set AuthContext.Provider and give value 
        <AuthContext.Provider value={user}> 
            {/* //*_Step- 5 : use children */}
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;



/* 
//* CONTEXT API
1. Create Context : createContext(null)
2. Create Provider : AuthContext.Provider / UserContext.Provider
3. Set Context Value : value={Name}

//* CONTEXT SHARE
4. mail.jsx set AuthProvider
5. Inside provider access children props and then use.
6. To Access the Value : useContext(ContextName) hook 
*/