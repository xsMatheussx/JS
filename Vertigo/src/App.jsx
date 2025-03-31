import logoImg from "./assets/logo.svg";
import { useState } from "react";

export function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Errors, setErrors] = useState({ email: "", password: "" });

  function handleSubmit(event) {
    event.preventDefault();
    let formIsValid = true;
    let newErrors = { email: "", password: "" };

    //validação de email
    if (!email) {
      newErrors.email = "O e-mail é obrigatório";
      formIsValid = false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors = "Digite um e-mail válido";
      formIsValid = false;
    }

    //validação de senha
    if (!password) {
      newErrors.password = "A senha é obrigatoria.";
    }
    if (password < 6) {
      newErrors = "A senha deve ter pelo menos 6 caracteres.";
      formIsValid = false;
    }

    //garante que o formulário não seja enviado em caso de erros
    if (!formIsValid) {
      setErrors(newErrors);
      return;
    }

    console.log("Email: ", email);
    console.log("Password: ", password);
  }

  return (
    <div className="container">
      <div className="s-form">
        <img src={logoImg} alt="logo vertigo" />
        <h1>Acesse a plataforma</h1>
        <p>
          Faça login ou registre-se para começar a construir seus projetos ainda
          hoje.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div>
            <label htmlFor="password">Senha</label>
            <button type="button" className="forgot-pass-btn">
              Esqueceu a senha?
            </button>
          </div>
          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            Entrar
          </button>
        </form>

        <div className="sign-up">
          <p>
            Ainda não tem uma conta?
            <button type="button">inscreva-se</button>
          </p>
        </div>
      </div>
      <div className="s-right"></div>
    </div>
  );
}
