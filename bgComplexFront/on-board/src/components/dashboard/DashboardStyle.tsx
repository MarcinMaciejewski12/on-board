import styled from "styled-components";

export const DashboardViewContainer = styled.div`
  height: 100vh;
  width: 100%;
`;
export const DashboardView = styled.div`
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.colors.second};

  & h1 {
    padding: 1rem 3rem;
    font-weight: 200;
  }
`;
