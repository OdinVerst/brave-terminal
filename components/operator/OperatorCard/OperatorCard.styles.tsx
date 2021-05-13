import styled from "styled-components";

export const OperatorCardWrapper = styled.button`
  border: 2px solid #eaeaea;
  border-radius: 10px;
  padding: 1em 1.5em;
  background: white;
  cursor: pointer;
  transition: 0.2s;
  
  &:hover {
    background: #eaeaea;
  }
`

export const OperatorCardImgWrapper = styled.div`
  position: relative;
  height: 150px;
  pointer-events: none;
`;