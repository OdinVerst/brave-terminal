import styled from "styled-components";

type ButtonStyleProps = {
    isActive?: boolean
}

export const ButtonStyle = styled.button<ButtonStyleProps>`
  font-family: 'Open Sans', Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  text-transform: uppercase;
  font-size: 18px;
  line-height: 1;
  color: white;
  background: ${props => props.isActive ? '#39C16C' : 'rgba(57,193,108,0.31)'};
  padding: 15px 35px;
  border: 1px solid ${props => props.isActive ? '#39C16C' : 'rgba(57,193,108,0.31)'};
  border-radius: 30px;
  letter-spacing: 0.5px;
  margin: 1em 0;
  transition: 0.2s;
`