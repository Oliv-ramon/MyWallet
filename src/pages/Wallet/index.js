import { RegisterSection, ActionLinks, Footer } from "./style";
import Container from "../../components/MainPageComponents/Container"
import Header from "../../components/MainPageComponents/Header"
import logoutButton from "../../assets/logoutButton.png";
import newEntryIcon from "../../assets/newEntryButtonIcon.png";
import newExitIcon from "../../assets/newExitButtonIcon.png";

function Wallet() {

  return (
    <Container>
      <Header>
        <span>Olá fulano!</span>
        <img src={logoutButton} alt="logout button"/>
      </Header>
      <RegisterSection>
        <p>Não há registros de<br/>entrada ou saída</p>
      </RegisterSection>
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