import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div>
<div className="navbar bg-primary text-primary-content">
  <Link  to='/' className="btn btn-ghost normal-case text-xl">Auth Fact</Link>
  <Link to='/' className="btn btn-ghost normal-case text-md">Home</Link>
  <Link to='/LogIn' className="btn btn-ghost normal-case text-md">Log In</Link>
  <Link to='/Register' className="btn btn-ghost normal-case text-md">Register</Link>
</div>
        </div>
    );
};

export default Main;