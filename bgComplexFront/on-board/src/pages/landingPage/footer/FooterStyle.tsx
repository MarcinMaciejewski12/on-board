import styled from "styled-components";

export const FooterSection = styled.div`
  width: 100%;
  height: 50vh;
  background: ${(props) => props.theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FooterContainer = styled.div`
  width: 50vw;
  height: 50vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  & h1 {
    color: white;
    font-size: 20px;
    font-weight: 500;
  }
`;

export const FooterLinkContainer = styled.ul`
  justify-content: center;
  text-align: center;
  margin-top: 2rem;
  cursor: default;
`;

export const FooterLinkLi = styled.li`
  display: flex;
  cursor: pointer;
  justify-content: center;
  margin-top: 1.5rem;
  color: white;
`;
