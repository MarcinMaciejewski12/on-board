import styled from "styled-components";
export const CalendarComponent = styled.div`
  width: 100vw;
  height: 100vh;
  /* position: fixed; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const CalendarBackground = styled.div`
  width: 60vw;
  height: 60vh;
  max-height: 60vh;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 3rem;
  background-color: ${(props) => props.theme.colors.secondary};

  & h1 {
    color: white;
    margin-bottom: 20px;
  }
`;

export const CalendarContainer = styled.div`
  width: 50vw;
  max-height: 60vh;
  display: flex;
  align-items: center;
`;

export const MeetingsContainer = styled.div`
  width: 60vh;
  height: 60vh;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const AllMeetings = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  & h1 {
    color: white;
    font-size: 18px;
    padding: 1rem;
  }
`;
