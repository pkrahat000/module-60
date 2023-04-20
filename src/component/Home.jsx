import React, { useContext } from 'react';
import { AuthContext } from './AuthProviders';

const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div>
            <h3>home {user && <span>{user.displayName}</span>}</h3>  {/* //* jodi user thake to dekhabe */}
        </div>
    );
};

export default Home;