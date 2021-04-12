import styled from 'styled-components';
import {COLORS} from '../../stylesGlobal'

export const Head = styled.div`
    background-color: ${COLORS.cinza};
    width: 100%;
    height: 9%;

    font-size: 35px;
    font-weight: 900;

    display: flex;
    align-items: center;

     a {
        list-style: none;
        
        text-decoration: none;
        margin: 5px 40px;

        :hover {
            color: ${COLORS.branco};
        }
     }
`