import { Container, Header } from "../../components/MainPageComponents";
import { Form, Input, Button } from "../../components/FormComponents";
import api from "../../services/api";
import { useContext, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function NewEntry() {
  const [isLoading, setIsLoading] = useState(false);
  const { auth: { token } } = useContext(AuthContext);
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState(
    {
      value: "",
      description: "",
      type: "entry",
    }
  );

  function handleChange(e) {
    setTransaction({ ...transaction, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    try {
      const formatedValue = handleFormatValue(transaction.value);
      await api.saveTransactions({...transaction, value: formatedValue}, token);
      setIsLoading(false);
      navigate("/wallet");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setTransaction({ ...transaction, value: "", description: "" })
      alert("Erro, tente novamente");
    }
  }

  function handleFormatValue(value) {
    let validValue = value.replace(",", ".");

    if (isNaN(validValue)) alert("Valor precisa ser um número");

    if (validValue % 1 === 0 && !validValue.includes(".")) {
      validValue = `${validValue}.00`;
    }

    return validValue;
  }

  return (
    <Container>
      <Header>
        <span>Nova entrada</span>
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
        <Button disabled={isLoading}>Salvar entrada</Button>
      </Form>
    </Container>
  )
}

export default NewEntry;