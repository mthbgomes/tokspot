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
      <Form className="row g-2" onSubmit={onLogin}>
        <FloatingLabel controlId="email" label="Email">
          <Input
            type="email"
            value={email}
            placeholder="email"
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <span>{emailError}</span>
        </FloatingLabel>
        <FloatingLabel controlId="password" label="Senha">
          <Input
            type="password"
            value={password}
            placeholder="senha"
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <span>{passwordError}</span>
        </FloatingLabel>
        <Checkbox
          className="d-inline pe-1"
          label="Lembrar de mim"
          controlId="rememberMe"
        />
        <Button type="submit" className="p-0 m-0 btn-primary-color">
          Entrar
        </Button>
      </Form>
      <Link to="/login/recuperar_senha" className="pw-recover">
        Esqueceu sua senha?
      </Link>
    </div>
  );
};

export default LoginForm;
