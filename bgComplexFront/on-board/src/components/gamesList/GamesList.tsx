import axios from "axios";
import { useEffect, useState } from "react";
import List from "../../theme/list/List";
import {
  AddGameButton,
  AdditionalGameInfo,
  GameName,
  GamesValuesContainer,
} from "../../theme/list/ListStyle";
import { Header } from "../personsCard/PersonsCardStyle";
import { GamesListView } from "./GamesListStyle";
interface GameModel {
  name: string;
  description: string;
  _id: string;
  players: number;
  playTime: number;
  type: string;
  difficulty: number;
}

const MyGamesList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/api/games")
      .then((repsonse) => {
        setGames(repsonse.data);
      })
      .catch((error) => {
        console.log("siemano");
      });
  }, []);

  useEffect(() => {}, [games]);

  return (
    <GamesListView>
      <h1>Lista gier:</h1>
      <List>
        {games ? (
          games.map(({ _id, name, players }: GameModel) => {
            return (
              <GamesValuesContainer key={_id}>
                <Header>
                  <div>
                    <GameName>{name}</GameName>
                  </div>
                  <AddGameButton>+ Dodaj do biblioteki</AddGameButton>
                </Header>
                <AdditionalGameInfo>
                  <span>Liczba graczy: {players}</span>
                </AdditionalGameInfo>
              </GamesValuesContainer>
            );
          })
        ) : (
          <span style={{ color: "white" }}>
            Poczekaj chwile, zerknę do instrukcji...
          </span>
        )}
      </List>
    </GamesListView>
  );
};

export default MyGamesList;
