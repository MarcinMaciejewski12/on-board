import axios from "axios";
import { useEffect, useState } from "react";
import { DashboardContainer, DashboardModal } from "./DashboardStyle";

const Dashboard = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/api/games/userGames", {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
      });
  }, []);

  return (
    <DashboardContainer>
      <DashboardModal></DashboardModal>
    </DashboardContainer>
  );
};

export default Dashboard;
