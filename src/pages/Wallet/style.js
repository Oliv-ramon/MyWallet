import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.main`
  box-sizing: border-box;

  min-height: 100vh;
  padding: 0 24px;

  background-color: #925EBE; 

  * {
    box-sizing: border-box;
    font-family: 'Lexend Deca', sans-serif;
  }
  `;

const Header = styled.header`
  padding: 25px 0 22px 0;

  display: flex;
  justify-content: space-between;

  span {
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;   
  }

  img {
    height: 24px;
    width: 23px;
    color: #FFFFFF;
  }
`;

const RegisterSection = styled.section`
  width: 100%;
  height: 446px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #FFFFFF;
  border-radius: 5px;

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    color: #868686;
  }
`;

const ActionLinks = styled(Link)`
  width: 155px;
  height: 114px;
  padding: 10px;

  background-color: #A328D6;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 25px;
    height: 25px;
  }

  span {
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;

    color: #FFFFFF;
  }
`;

const Footer = styled.footer`
  box-sizing: content-box;
  
  height: 114px;
  padding: 13px 0 15px 0;

  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

export {
  Header,
  Container,
  RegisterSection,
  ActionLinks,
  Footer
}