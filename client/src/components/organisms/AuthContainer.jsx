import React, { useState } from "react";
import LoginForm from "../molecules/LoginForm/LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/global.css";

const AuthContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = async (ev) => {
    ev.preventDefault();

    try {
      // Limpar erros
      setEmailError("");
      setPasswordError("");

      // Validação do email
      if (email.trim() === "") {
        setEmailError("Por favor, insira seu email");
        return;
      }

      if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        setEmailError("Por favor, insira um email válido");
        return;
      }

      // Validação da senha
      if (password.trim() === "") {
        setPasswordError("Por favor, insira sua senha");
        return;
      }

      if (password.length < 8) {
        setPasswordError("A senha deve ter no mínimo 8 caracteres");
        return;
      }
      console.log("Autenticação bem-sucedida!");
      // Lógica de autenticação aqui...
    } catch (err) {
      console.log(err.message);
    }
    // Se tudo estiver correto, você pode prosseguir com a autenticação
  };

  return (
    <div>
      <div className="vh-100 d-flex align-items-center bg-secondary-color">
        <div className="container h-50">
          <div className="row default-shadow justify-content-between align-items-stretch h-100 rounded-4 overflow-hidden login-box">
            <div className="col-4 bg-primary-color d-flex flex-column justify-content-center">
              <div className="wrapper d-flex flex-column align-items-center"></div>
            </div>
            <div className="col-8 d-flex flex-column align-items-center justify-content-center">
              <div className="wrapper d-flex flex-column col-8">
                <p className="login-title fw-bold lh-1">Login</p>
                <LoginForm
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  emailError={emailError}
                  setEmailError={setEmailError}
                  passwordError={passwordError}
                  setPasswordError={setPasswordError}
                  onLogin={handleLogin}
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
