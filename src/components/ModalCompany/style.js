import styled from "styled-components";
import { COLORS } from "../../stylesGlobal";

export const DivPai = styled.div`
  background-color: ${COLORS.cinza};
  color: ${COLORS.roxo};
  border-radius: 20px;
  text-align: center;
  margin: 300px auto;
  width: 250px;
  height: auto;
  padding: 10px;
`;

export const Principa = styled.div`
  height: auto;
  background-color: ${COLORS.cinza};
  color: ${COLORS.roxo};
  width: 270px;
  margin: 10px auto;
  padding: 10px;
  border-radius: 20px;

  .img {
    background-color: white;
    padding: 10px;
    border-radius: 20px;
    margin-top: 5px;
    img {
      width: 50px;
      margin: 5px;
    }
  }
`;
