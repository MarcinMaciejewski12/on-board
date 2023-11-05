import { useEffect, useState } from "react";
import { instance } from "../../auth/axiosInterceptops";
import { UserGamesListView } from "../../components/gamesList/GamesListStyle";

import GameModel from "../../constant/models/GameModel";
import List from "../../theme/list/List";
import {
  AddGameButton,
  AdditionalGameInfo,
  GameName,
  GamesValuesContainer,
  Header,
} from "../../theme/list/ListStyle";
import { DashboardContainer, DashboardModal } from "./DashboardStyle";

const Dashboard = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    instance
      .get("http://localhost:8800/api/games/userGames")
      .then((response) => {
        setGames(response.data);
      });
  }, []);

  return (
    <DashboardContainer>
      <DashboardModal>
        <UserGamesListView>
          <h1>Bibltioteka gier:</h1>
          <List>
            {games ? (
              games.map(({ _id, name, players }: GameModel) => {
                return (
                  <GamesValuesContainer key={_id}>
                    <Header>
                      <div>
                        <GameName>{name}</GameName>
                      </div>
                      <AddGameButton>+ Dodaj rozgrywkę</AddGameButton>
                    </Header>
                    <AdditionalGameInfo>
                      <span>Liczba graczy: {players}</span>
                    </AdditionalGameInfo>
                  </GamesValuesContainer>
                );
              })
            ) : (
              <span style={{ color: "white" }}>Brak gier w biblioteczce</span>
            )}
          </List>
        </UserGamesListView>
      </DashboardModal>
    </DashboardContainer>
  );
};

export default Dashboard;
