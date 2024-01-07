import "../Login/Login.css";
import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container-p">
      <div className="content-login">
        <div className="title-login">
          <i className="bi bi-person-fill"></i>
          <h2>INICIAR SESIÓN</h2>
        </div>
        <div className="content-form">
          <div className="form-login">
            <label htmlFor="usuario">Usuario:</label>
            <div className="user-container">
            <input type="text" id="usuario" name="usuario" />
            </div>
            <label htmlFor="password">Contraseña:</label>
            <div className="password-container">
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
            <button>INICIAR SECCION</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
