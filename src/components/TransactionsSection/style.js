import styled from "styled-components";

const Section = styled.section`
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

const Transaction = styled.li`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  .date {
    color: #C6C6C6;
  }
  .description {
    color: #000000;
  }
  .value {
    color: ${({type}) => type === "entry" ? "#C70000" : "#03AC00"};
  }
`;

export {
  Section,
  Transaction,
}