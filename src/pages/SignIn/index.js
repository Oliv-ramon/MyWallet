import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png"
import { Button, Container, Form, Input, StyledLink } from "../../components/FormComponents";
import AuthContext from "../../contexts/AuthContext";
import api from "../../services/api";

function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" }
  );
  const { auth, login } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(auth);
    if (auth && auth.token) navigate("wallet");
  }, []);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleLogin(e) {
    e.preventDefault(); 

    setIsLoading(true);

    try {
      const response = await api.signIn(formData);
      login(response.data);
      setIsLoading(false);
      navigate("/wallet");
    } catch (error) {
      console.log(error);
      alert("Erro, tente novamente");
    }
  }

  return (
    <Container>
      <img src={logo} alt="MyWallet logo"/>
      <Form onSubmit={handleLogin}>
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
        <Button type="submit" disabled={isLoading}>Entrar</Button>
      </Form>
      <StyledLink to={"/register"} >Primeira vez? Cadastre-se!</StyledLink>
    </Container>
  )
}

export default SignIn;