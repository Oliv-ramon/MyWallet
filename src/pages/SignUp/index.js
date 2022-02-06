import { useState } from "react";
import { useNavigate } from "react-router-dom"

import api from "../../services/api";

import logo from "../../assets/logo.png"
import Button from "../../components/FormComponents/Button";
import Container from "../../components/FormComponents/Container.js";
import Form from "../../components/FormComponents/Form";
import Input from "../../components/FormComponents/Input";
import StyledLink from "../../components/FormComponents/StyledLink";

function SignUp() {
  const [formData, setFormData] = useState(
    { 
      name: "",
      email: "",
      password: "",
      passwordConfirm: ""
    }
  );
  
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleRegister(e) {
    e.preventDefault(); 

    setIsLoading(true);

    if (formData.password !== formData.passwordConfirm) {
      setIsLoading(false);
      return alert("as senhas não coincidem");
    }

    try {
      await api.signUp(formData);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      alert("Erro, tente novamente");
    }
  }

  return (
    <Container>
      <img src={logo} alt="MyWallet logo"/>
      <Form onSubmit={handleRegister}>
        <Input 
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name} 
          onChange={handleChange}
          required
        />
        <Input 
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input 
          type="password"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Input 
          type="password"
          name="passwordConfirm"
          placeholder="Confirme a senha"
          value={formData.passwordConfirm}
          onChange={handleChange}
          required
        />
        <Button type="submit" disabled={isLoading}>Cadastrar</Button>
      </Form>
      <StyledLink to={"/"}>Já tem uma conta? Entre agora!</StyledLink>
    </Container>
  )
}

export default SignUp;