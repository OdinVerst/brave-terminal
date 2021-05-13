import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: -webkit-fill-available;
  min-height: 100vh;
`;

export const MainContainer = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterContainer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    color: black;
    text-decoration: none;
  }
`;