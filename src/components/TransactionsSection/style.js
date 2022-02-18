import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 368px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #FFFFFF;
  border-radius: 5px;

  overflow: hidden;
  position: relative;

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    color: #868686;
  }

  ul  {
    width: 100%;
    height: 100%;
    padding: 23px 12px 50px 12px;

    display: flex;
    flex-direction: column;
    gap: 18px;
    align-self: flex-start;

    overflow-y: scroll;
    overflow-x: hidden;

  }
`;

const TransactionContainer = styled.li`
  display: flex;
  gap: 8px;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  .date {
    color: #C6C6C6;
  }
  .description {
    color: #000000;
    word-break: normal;
  }
  .value {
    color: ${({type}) => type === "exit" ? "#C70000" : "#03AC00"};
    margin-left: auto;
    word-break: break-all;
  }

  button {
    color: #C6C6C6;
  }
`;

const Footer = styled.footer`
  width: 100%;
  padding: 15px 10px;

  background-color: #fff;
  
  display: flex;
  justify-content: space-between;

  position: absolute;
  bottom: 0;
  left: 0;

  font-size: 17px;
  line-height: 20px;

  .text {
    font-weight: 700;
    color: #000000;
  }
  
  .total {
    font-weight: 400;
    color: ${({total}) => total < 0 ? "#C70000" : "#03AC00"};
  }
`;

export {
  Section,
  TransactionContainer,
  Footer,
}