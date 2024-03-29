import "../Login/Login.css";
import Logo from "../../assets/img/Logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container-p">
      <div className="content-3-login">
        <div className="title-login">
          <div className="content-title-sign-in">
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
          <div className="content-login">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <div className="content-title-login">
              <h1>Welcome</h1>
            </div>
            <div className="content-button-google-login">
              <button className="btn-google">Login With Google</button>
            </div>
            <div className="content-separator-login">
              <div className="line-login"></div>
              <span>OR LOGIN WITH GOOGLE</span>
              <div className="line-login"></div>
            </div>
            <div className="content-form">
              <div className="form-login">
                <form action="/">
                  <div className="user-container">
                    <label htmlFor="usuario">USERNAME</label>
                    <input type="text" id="usuario" name="usuario" />
                  </div>
                  <div className="password-container">
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
                  <div className="content-opcions-login">
                    <div className="content-input-stay-connected">
                      <input type="checkbox" name="" id="" />
                      Stay Connected
                    </div>
                    <div className="content-link-fort-password">
                      <a href="#">I fort my password</a>
                    </div>
                  </div>
                  <div className="content-button-login-1">
                    <button className="button-login">LOGIN</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="content-register-login">
              <span>You do not have an account?</span>
              <Link to="/Register" className="Register-link">
                <a href="#">Register</a>
              </Link>
            </div>
          </div>
          <div className="content-info-login"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
