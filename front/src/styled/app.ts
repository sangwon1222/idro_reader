import { styled } from "styled-components";

export const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  min-height: ${window.innerHeight}px;
  color: white;
  background-color: ${(props) => props.theme["main-dark-200"]};
`;
