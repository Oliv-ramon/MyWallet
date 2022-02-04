import { Link } from "react-router-dom";
import styled from "styled-components";

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
  ActionLinks,
  Footer
}