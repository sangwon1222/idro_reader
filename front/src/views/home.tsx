import { useState } from "react";
import { styled } from "styled-components";
import { StyledHomeDivProps } from "../type";
import React from "react";

function Home() {
  const [isFold, setFold] = useState(true);
  const foldList = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.defaultPrevented = true;

    const ul = document.getElementsByTagName("ul")[0] as HTMLUListElement;
    const li = ul.children[0] as HTMLLIElement;
    const length = ul.children.length;
    const height = isFold ? (li.offsetHeight + 10) * length : 0;

    ul.style.height = `${height}px`;
    setFold(!isFold);
  };
  return (
    <HomeDiv $isfold={isFold}>
      <button onClick={foldList}>TEST SERVER</button>

      <ul>
        <li>IDRO RFID</li>
      </ul>
    </HomeDiv>
  );
}

export default Home;

const HomeDiv = styled.div<StyledHomeDivProps>`
  padding: 1rem;
  cursor: pointer;
  > button {
    margin: 1rem 0;
    color: ${[(props) => props.theme["white-200"]]};
    transition: all 0.25s;
    &:hover {
      color: ${(props) => props.theme["main-blue-200"]};
    }
  }
  > ul {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 0;
    transition: all 0.5s;
    li {
      padding: 0.8rem;
      border-radius: 1rem;
      color: ${[(props) => props.theme["main-blue-200"]]};
      transition: all 0.25s;
      &:hover {
        background-color: ${[(props) => props.theme["white-200"]]};
        color: #000;
      }
    }
  }
`;
