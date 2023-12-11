import React, { useState } from "react";
import LoginForm from "../molecules/Forms/LoginForm/LoginForm.jsx";
import Link from "../atoms/Link.jsx";
import { useNavigate } from "react-router-dom"; // remover quando implementar auth

import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/global.css";
import handleLogin from "../../handlers/handleLogin.jsx";

const AuthContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate(); // remover quando implementar auth

  const handleLoginWrapper = async (ev) => {
    ev.preventDefault();
    handleLogin(email, password, setEmailError, setPasswordError, navigate);
  };

  return (
    <div>
      <div className="vh-100 d-flex align-items-center bg-secondary-color">
        <div className="container h-50">
          <div className="row default-shadow justify-content-between align-items-stretch h-100 rounded-4 overflow-hidden login-box">
            <div className="col-4 bg-primary-color d-flex flex-column justify-content-center">
              <div className="wrapper d-flex flex-column align-items-center">
                <p className="register-title text-center fw-bold lh-1">
                  Ainda não tem uma conta?
                </p>
                <Link to="/cadastro" className="btn-secondary-color">
                  Cadastre-se
                </Link>
              </div>
            </div>
            <div className="col-8 d-flex flex-column align-items-center justify-content-center">
              <div className="wrapper d-flex flex-column col-8">
                <p className="login-title fw-bold lh-1 pt-2">Login</p>
                <LoginForm
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  emailError={emailError}
                  setEmailError={setEmailError}
                  passwordError={passwordError}
                  setPasswordError={setPasswordError}
                  onLogin={handleLoginWrapper}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthContainer;
