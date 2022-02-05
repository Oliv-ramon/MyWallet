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

  ul  {
    width: 100%;
    padding: 23px 12px;

    display: flex;
    flex-direction: column;
    gap: 18px;
    align-self: flex-start;

    overflow: scroll;
  }
`;

const Transaction = styled.li`
  display: flex;
  gap: 8px;

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
    color: ${({type}) => type === "exit" ? "#C70000" : "#03AC00"};
    margin-left: auto;
  }
`;

export {
  Section,
  Transaction,
}