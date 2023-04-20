import React from 'react';
import Main from '../layout/Main';
import { Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Main/>
            <Outlet/>
        </div>
    );
};

export default Header;