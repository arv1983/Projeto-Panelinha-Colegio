import styled from "styled-components";
import { COLORS } from "../../stylesGlobal";

export const HeadMob = styled.div`
  background-color: ${COLORS.roxo};
  
  position: fixed;
  top: 92vh;

  width: 100%;

  font-size: 35px;
  font-weight: 900;

  display: flex;
  /* align-items: center; */
`;

export const DivIcon = styled.div`
  width: 25%;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;

  a {
    color: white;

    list-style: none;
    text-decoration: none;

    :hover {
      color: ${COLORS.branco};
    }
  }
`;