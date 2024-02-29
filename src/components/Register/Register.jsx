import "../Register/Register.css";
import Logo from "../../assets/img/Logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container-p">
      <div className="content-3-register">
        <div className="title-register">
          <div className="content-title-register">
            <i className="bi bi-person-fill"></i>
            <Link to="/Login" className="Sign-link">
              <h2>SIGN IN</h2>
            </Link>
          </div>
          <div className="content-title-register">
            <i className="bi bi-person-plus-fill"></i>
            <Link to="/Register" className="Register-link">
              <h2>REGISTER</h2>
            </Link>
          </div>
        </div>
        <div className="content-l-i">
          <div className="content-register">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <div className="content-title-register">
              <h1>Welcome</h1>
            </div>
            <div className="content-button-google-register">
              <button className="btn-google">Sign Up With Google</button>
            </div>
            <div className="content-separator-register">
              <div className="line-register"></div>
              <span>OR LOGIN WITH GOOGLE</span>
              <div className="line-register"></div>
            </div>
            <div className="content-form">
              <div className="form-register">
                <form action="/">
                  <div className="user-container">
                    <label htmlFor="usuario">NAME</label>
                    <input type="text" id="usuario" name="usuario" />
                  </div>
                  <div className="user-container">
                    <label htmlFor="usuario">EMAIL</label>
                    <input type="email" id="usuario" name="usuario" />
                  </div>
                  <div className="user-container">
                    <label htmlFor="usuario">PHONE</label>
                    <input type="text" id="usuario" name="usuario" />
                  </div>
                  <div className="password-container-register">
                    <label htmlFor="password">PASSWORD</label>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                    />
                    <span
                      className="toggle-password"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <i className="bi bi-eye"></i>
                      ) : (
                        <i className="bi bi-eye-slash"></i>
                      )}
                    </span>
                  </div>
                  {/* <div className="content-opcions-register">
                    <div className="content-input-stay-connected">
                      <input type="checkbox" name="" id="" />
                      Stay Connected
                    </div>
                    <div className="content-link-fort-password">
                      <a href="#">I fort my password</a>
                    </div>
                  </div> */}
                  <div className="content-button-register-1">
                    <button className="button-register">REGISTER</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="content-login-register">
              <span>Do you already have an account?</span>
              <Link to="/Login" className="Register-link">
                <a href="#">Sign In</a>
              </Link>
            </div>
          </div>
          <div className="content-info-register"></div>
        </div>
      </div>
    </div>
  );
}

export default Register;
