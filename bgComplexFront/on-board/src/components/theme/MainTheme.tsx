import styled from "styled-components";

export const ThemeColors = {
  colors: {
    first: "white",
    second: "#F1C40F",
    third: "#2ECC71",
    fourth: "#c3c7c7",
  },
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
