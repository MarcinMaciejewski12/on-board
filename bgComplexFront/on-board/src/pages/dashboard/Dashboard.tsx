import GamesList from "../../components/gamesList/GamesList";
import { DashboardContainer, DashboardModal } from "./DashboardStyle";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardModal>
        <GamesList />
      </DashboardModal>
    </DashboardContainer>
  );
};

export default Dashboard;
