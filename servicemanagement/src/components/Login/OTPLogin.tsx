import React from 'react';

interface OTPLoginProps{
    LoginForm: boolean,
    setLoginForm(LoginForm: boolean): void;
}

const  OTPLogin: React.FC<OTPLoginProps>=(props)=> {
    const {setLoginForm, LoginForm} =props;
  return (
    <div className="container">
    <div className="card card-login mx-auto text-center bg-dark">
      <div className="card-header mx-auto bg-dark">
          LE-SERVICE
        <br />
        <span className="logo_title mt-5"> OTP Login </span>
   
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
              type="number"
              name="Phone #"
              className="form-control"
              placeholder="Phone Number For OTP"
            />
          </div>
        
          <div className="form-group">
            <input
              type="submit"
              name="btn"
              defaultValue="OTP "
              className="btn btn-outline-danger float-right login_btn"
            />
            <button type='button'
             onClick={()=> setLoginForm(true)} 
             className='btn btn-success login_btn'>Login With Password</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default OTPLogin;
