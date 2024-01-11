import "../Login/Login.css";
import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container-p">
      <div className="content-3-login">
        <div className="title-login">
          <i className="bi bi-person-fill"></i>
          <h2>INICIAR SESIÓN</h2>
        </div>
        <div className="content-l-i">
          <div className="content-login">
            <div className="logo"></div>
            <div className="content-title-login"></div>
            <div className="content-separator-login"></div>
            <div className="content-form">
              <div className="form-login">
                <form action="/">
                  <div className="user-container">
                    <label htmlFor="usuario">Usuario:</label>
                    <input type="text" id="usuario" name="usuario" />
                  </div>
                  <div className="password-container">
                    <label htmlFor="password">Contraseña:</label>
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
                  <button className="button-login">INICIAR SECCION</button>
                </form>
              </div>
            </div>
            <div className="content-register-login"></div>
          </div>
          <div className="content-info-login">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
