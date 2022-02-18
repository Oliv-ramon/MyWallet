import { ActionLinks, Footer } from "./style";
import { Container, Header } from "../../components/MainPageComponents/";
import logoutButton from "../../assets/logoutButton.png";
import newEntryIcon from "../../assets/newEntryButtonIcon.png";
import newExitIcon from "../../assets/newExitButtonIcon.png";

import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react";

import AuthContext from "../../contexts/AuthContext";
import TransactionsSection from "../../components/TransactionsSection";
import TransactionsContext from "../../contexts/TransactionsContext";

function Wallet() {
  const navigate = useNavigate();
  const { auth, logout } = useContext(AuthContext);
  const { handleLoadTransactions, transactions } = useContext(TransactionsContext);

  useEffect(() => {
    if (!auth?.token) return navigate("/");
    handleLoadTransactions();
  }, []);

  function handleLogout() {
    logout();
    navigate("/"); 
  }

  return (
    <Container>
      <Header>
        <span>Olá, {auth?.userName}!</span>
        <img src={logoutButton} alt="logout button" onClick={handleLogout}/>
      </Header>
      <TransactionsSection transactions={transactions}/>
      <Footer>
        <ActionLinks to={"/new-entry"}>
          <img src={newEntryIcon} alt="new entry icon"/>
          <span>Nova<br/>entrada</span>
        </ActionLinks>
        <ActionLinks to={"/new-exit"}>
          <img src={newExitIcon} alt="new exit icon"/>
          <span>Nova<br/>saída</span>
        </ActionLinks>
      </Footer>
    </Container>
  )
}

export default Wallet;