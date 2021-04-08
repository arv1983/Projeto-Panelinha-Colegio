import styled, { createGlobalStyle } from 'styled-components'

export const COLORS = {
  branco: '#ffffff',
  azulClaro: '#66c8e3',
  roxo: '#301d3d',
  bege: '#b8a984',
  cinza: "#b8b6b6"
}

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    font-family: consolas;
  }

  body{
    width: 100%;
    height: 100%;
    background-color: ${COLORS.roxo};
    color: ${COLORS.bege};
  }

`
export const Button = styled.button`
  background-color: ${COLORS.branco};
  font-size: 15px;
  padding: 10px;
  border-radius: 10px;
  width: 80%;
  margin: 20px 0 10px 0;
  text-transform: uppercase;
  letter-spacing: 2px;

  :hover{
    background: rgba(0,0,0,0.0);
    color: ${COLORS.azulClaro};
    border: 3px solid ${COLORS.azulClaro};
  }

`

export const Input = styled.input`
  font-size: 15px;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  width: 75%;

  :focus{
    background: rgba(0,0,0,0.0);
    color: ${COLORS.branco};
    font-weight: 900;
    border: 3px solid ${COLORS.branco};
  }
`