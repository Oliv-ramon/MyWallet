import styled from "styled-components"

const Container = styled.main`
  box-sizing: border-box;

  min-height: 100vh;
  padding: 0 24px;

  background-color: #925EBE; 

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  * {
    box-sizing: border-box;
    font-family: 'RaleWay', sans-serif;
  }

  img {
    width: 147px;
    height: 50px; 

    object-fit: contain;
  }
`;

export default Container;