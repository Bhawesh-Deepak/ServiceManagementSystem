import React from 'react';

interface loginFormProps{
    LoginForm: boolean,
    setLoginForm(LoginForm: boolean): void;
}

 const  LoginForm: React.FC<loginFormProps>=(props)=> {
   
  const {LoginForm,setLoginForm}= props  
  return (
    <div className="container">
    <div className="card card-login mx-auto text-center bg-dark">
      <div className="card-header mx-auto bg-dark">
          LE-SERVICE
        <br />
        <span className="logo_title mt-5"> Password Login </span>
   
      </div>
      <div className="card-body">
        <form action="" method="post">
          <div className="input-group form-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fas fa-user" />
              </span>
            </div>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Username"
            />
          </div>
          <div className="input-group form-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fas fa-key" />
              </span>
            </div>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              name="btn"
              defaultValue="Login"
              className="btn btn-outline-danger float-right login_btn"
            />
              <button type='button' onClick={()=> setLoginForm(false)} className='btn btn-success'>Login With OTP</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default LoginForm
