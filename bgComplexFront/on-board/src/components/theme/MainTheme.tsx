import styled from "styled-components";

export const Theme = {
  colors: {
    primary: "#FFC600",
    secondary: "#3C3C3C",
    teriary: "#1E96FC",
  },
  margin: {
    marginTop: '8vh',
  }
};


export const SubmitButton = styled.button`
  width: 15vw;
  height: 5vh;
  background-color: #2ecc71;
  border: none;
  color: white;
  font-size: large;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  margin: 5px;
  &:hover {
    background-color: #27ae60;
    cursor: pointer;
  }
`;

export const CancelButton = styled.button`
  width: 8vw;
  height: 5vh;
  border-radius: 10px;
  color: white;
  padding: 12px 24px;
  background: ${(props) => props.theme.colors.first};
  border: 0.1px solid #a3a4ac;
  margin: 5px;
  cursor: pointer;
`;
