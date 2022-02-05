import { Container, Header } from "../../components/MainPageComponents";
import { Form, Input, Button } from "../../components/FormComponents";
import api from "../../services/api";
import { useContext, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function NewExit() {
  const [isLoading, setIsLoading] = useState(false);
  const { auth: { token } } = useContext(AuthContext);
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState(
    {
      value: "",
      description: "",
      type: "exit",
    }
  );

  function handleChange(e) {
    setTransaction({ ...transaction, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    setIsLoading(true);

    try {
      await api.postTransactions(transaction, token);
      setIsLoading(false);
      navigate("/wallet");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      alert("Erro, tente novamente");
    }
  }

  return (
    <Container>
      <Header>
        <span>Nova saída</span>
      </Header>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="value"
          placeholder="Valor"
          value={transaction.value}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="description"
          placeholder="Descrição"
          value={transaction.description}
          onChange={handleChange}
          required
        />
        <Button disabled={isLoading}>Salvar saída</Button>
      </Form>
    </Container>
  )
}

export default NewExit;