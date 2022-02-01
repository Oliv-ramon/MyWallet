import logo from "../../assets/logo.png"
import Button from "../../components/FormComponents/Button";
import Container from "../../components/FormComponents/Container.js";
import Form from "../../components/FormComponents/Form";
import Input from "../../components/FormComponents/Input";
import StyledLink from "../../components/FormComponents/StyledLink";

function SignIn() {
  return (
    <Container>
      <img src={logo} alt="MyWallet logo"/>
      <Form>
        <Input value="E-mail"/>
        <Input value="Senha"/>
        <Button>Entrar</Button>
      </Form>
      <StyledLink to={"/register"} >Primeira vez? Cadastre-se!</StyledLink>
    </Container>
  )
}

export default SignIn;