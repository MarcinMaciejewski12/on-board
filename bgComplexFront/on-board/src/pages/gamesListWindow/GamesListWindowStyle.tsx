import styled from "styled-components";

export const GamesWindow = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: ${(props) => props.theme.colors.secondary};
`;
export const NavigationMargin = styled.div`
  width: 100%;
  height: ${(props) => props.theme.margin.marginTop};
  background-color: ${(props) => props.theme.colors.secondary};
`;
