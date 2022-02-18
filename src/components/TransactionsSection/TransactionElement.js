import { useContext } from "react";
import api from "../../services/api";
import AuthContext from "../../contexts/AuthContext";
import { TransactionContainer } from "./style";
import TransactionsContext from "../../contexts/TransactionsContext";
import { useNavigate } from "react-router-dom";

export default function TransactionElement({ _id, date, description, value, type }) {
  const { auth: { token } } = useContext(AuthContext);
  const { handleLoadTransactions, setApiMethod } = useContext(TransactionsContext);
  const navigate = useNavigate();

  async function handleDelete() {
    try {
      await api.deleteTransaction(_id, token);
      handleLoadTransactions();
    } catch (error) {
      console.log(error);
      alert("Erro, tente novamente");
    }
  }

  async function handleUpdate() {
    if (type === "exit") {
      setApiMethod("put")
      navigate("/new-exit");
    } else {
      navigate("/new-entry");
    }

    try {
      await api.updateTransaction(_id, token);
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

