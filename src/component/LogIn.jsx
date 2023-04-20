import React from 'react';
import { Link } from 'react-router-dom';


const LogIn = () => {
    //* _step- 2 : event is detault
    const handleLogIn =(event) =>{
        //* _step- 3 : add preventDefault
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Please Login!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        {/*//* _step- 1 :  add even handle .  */}
      <form onSubmit={handleLogIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' required placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' required placeholder="password" className="input input-bordered" />
          <Link to='/Register'>
          <button className="btn btn-link">Auth Fact Create New Account?</button>
          </Link>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default LogIn;

/* 
1. log in form come from daisy ui 
1. add even handle . 
2. even handle params is event. event bring many data from input field.
3. add preventDefault() for don't load page
*/