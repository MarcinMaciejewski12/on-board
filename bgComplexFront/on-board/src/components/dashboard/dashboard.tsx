import {
  DashboardViewContainer,
  DashboardView,
} from "./DashboardStyle";
import List from "../theme/list/List";





const Dashboard = () => {


 
  return (
    <DashboardViewContainer>
      <DashboardView>
        <h1>Twoja kolekcja gier:</h1>
        <List>
          <h1>twoje gry</h1>
        </List>
      </DashboardView>
    </DashboardViewContainer>
  );
};

export default Dashboard;
