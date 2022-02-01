import logo from "../../assets/logo.png"
import Button from "../../components/FormComponents/Button";
import Container from "../../components/FormComponents/Container.js";
import Form from "../../components/FormComponents/Form";
import Input from "../../components/FormComponents/Input";
import StyledLink from "../../components/FormComponents/StyledLink";

function SignUp() {
  return (
    <Container>
      <img src={logo} alt="MyWallet logo"/>
      <Form>
        <Input value="Nome"/>
        <Input value="E-mail"/>
        <Input value="Senha"/>
        <Input value="Senha"/>
        <Input value="Confirme a senha"/>
        <Button>Cadastrar</Button>
      </Form>
      <StyledLink to={"/"}>Já tem uma conta? Entre agora!</StyledLink>
    </Container>
  )
}

export default SignUp;