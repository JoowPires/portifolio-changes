import styled from "styled-components";

export const App = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1800px) {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
  }
`;

export const div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `;