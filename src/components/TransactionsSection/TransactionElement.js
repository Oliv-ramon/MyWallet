import { useContext } from "react";
import api from "../../services/api";
import AuthContext from "../../contexts/AuthContext";
import { TransactionContainer } from "./style";
import TransactionsContext from "../../contexts/TransactionsContext";

export default function TransactionElement({ _id, date, description, value, type }) {
  const { auth: { token } } = useContext(AuthContext);
  const { handleLoadTransactions } = useContext(TransactionsContext);

  async function handleDelete() {
    const result = window.confirm("Deseja excluir essa trasação?");

    if (!result) return;

    try {
      await api.deleteTransaction(_id, token);
      handleLoadTransactions();
    } catch (error) {
      console.log(error);
      alert("Erro, tente novamente");
    }
  }

  return (
    <TransactionContainer type={type}>
      <span className="date">{date} </span>
      <span className="description">{description}</span>
      <span className="value">{value.replace(".", ",")}</span>
      <button onClick={handleDelete}>x</button>
    </TransactionContainer>
  )
}

