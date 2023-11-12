import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../../styles/global.css";
import "./LoginForm.css";

import Button from "../../atoms/Button.jsx";
import Input from "../../atoms/Input.jsx";
import Link from "../../atoms/Link.jsx";
import Checkbox from "../../atoms/Checkbox";

const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  emailError,
  passwordError,
  onLogin,
}) => {
  return (
    <div>
      <Form onSubmit={onLogin}>
        <FloatingLabel controlId="email" label="Endereço de email">
          <Input
            type="email"
            value={email}
            placeholder="nome@exemplo.com.br"
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <span>{emailError}</span>
        </FloatingLabel>
        <FloatingLabel controlId="password" label="Senha">
          <Input
            type="password"
            value={password}
            placeholder="••••••"
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <span>{passwordError}</span>
        </FloatingLabel>
        <Checkbox label="Lembrar de mim" controlId="rememberMe" />
        <Link to="/login/recuperar_senha">Esqueceu sua senha?</Link>
        <Button type="submit" className="btn-secondary-color">
          Entrar
        </Button>
      </Form>
      <Link to="/cadastro">Crie sua conta</Link>
    </div>
  );
};

export default LoginForm;
