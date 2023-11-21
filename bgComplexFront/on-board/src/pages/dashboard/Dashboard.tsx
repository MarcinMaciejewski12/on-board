import { useEffect, useState } from "react";
import { instance } from "../../auth/axiosInterceptops";
import { UserGamesListView } from "../../components/gamesList/GamesListStyle";

import { useNavigate } from "react-router";
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
  const navigate = useNavigate();
  useEffect(() => {
    instance
      .get("http://localhost:8800/api/games/userGames")
      .then((response) => {
        setGames(response.data);
      });
  }, []);

  const polishCharacters: Record<string, string> = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
    Ą: "A",
    Ć: "C",
    Ę: "E",
    Ł: "L",
    Ń: "N",
    Ó: "O",
    Ś: "S",
    Ź: "Z",
    Ż: "Z",
  };

  const prepareQueryName = (name: string, id?: string) => {
    const changePolishCharacter = name
      .replace(
        /[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/g,
        (match: string) => polishCharacters[match] || match
      )
      .replace(/\s/g, "");
    navigate("/dashboard/" + changePolishCharacter);
    localStorage.setItem("gameId", id ?? "");
  };

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
                      <AddGameButton
                        onClick={() => prepareQueryName(name, _id)}
                      >
                        + Dodaj rozgrywkę
                      </AddGameButton>
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
