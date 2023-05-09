import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Header: React.FC = () => {
  return (
    <HeaderDiv>
      <Link to="/">HOME</Link>
      <Link to="/idro">IDRO</Link>
    </HeaderDiv>
  );
};

export default Header;

const HeaderDiv = styled.div`
  display: flex;
  items-align: center;
  padding: 2rem 1rem;
  gap: 1rem;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  a {
    padding: 0 1rem;
    font-size: 1.25rem;
    transition: all 0.25s;
    &:hover {
      color: rgba(252, 254, 12, 0.25);
    }
  }
`;
