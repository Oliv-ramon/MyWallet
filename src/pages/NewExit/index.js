import Container from "../../components/MainPageComponents/Container";
import Form from "../../components/FormComponents/Form";
import Input from "../../components/FormComponents/Input";
import Button from "../../components/FormComponents/Button";
import Header from "../../components/MainPageComponents/Header";

function NewExit() {
  return (
    <Container>
      <Header>
        <span>Nova saída</span>
      </Header>
      <Form>
        <Input value="Valor"/>
        <Input value="Descrição"/>
        <Button>Salvar saída</Button>
      </Form>
    </Container>
  )
}

export default NewExit;