const handleLogin = async (
  email,
  password,
  setEmailError,
  setPasswordError,
  navigate // remover quando implementar auth
) => {
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
    navigate("/dashboard"); // ATENÇÃO: REMOVER APÓS IMPLEMENTAR
    // Lógica de autenticação aqui...
  } catch (err) {
    console.log(err.message);
  }
  // Se tudo estiver correto, você pode prosseguir com a autenticação
};

export default handleLogin;
