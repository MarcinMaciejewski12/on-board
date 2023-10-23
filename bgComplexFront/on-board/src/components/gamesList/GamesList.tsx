import axios from "axios";
import { useEffect, useState } from "react";
import { CLIENT_ID, gamesUrl } from "../constant/Constant";
import { Header } from "../personsCard/PersonsCardStyle";
import List from "../theme/list/List";
import {
  AddGameButton,
  AdditionalGameInfo,
  GameName,
  GamesValuesContainer,
} from "../theme/list/ListStyle";
import { GamesListView } from "./GamesListStyle";
interface GameModel {
  handle: string;
  description: string;
  id: string;
  players: number;
}

const MyGamesList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // TODO: refactor(try with SWR)
    const fetchData = async () => {
      try {
        const gamesList = await axios
          .get(gamesUrl, {
            params: {
              name: "",
              client_id: CLIENT_ID,
            },
          })
          .then((res) => {
            return res.data.games;
          });
        setGames(gamesList);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const getUpperCaseLetter = (letter: string) => {
    let firstLetter = letter.charAt(0);
    let letterToUpperCase = firstLetter.toUpperCase();

    return letterToUpperCase + letter.slice(1);
  };

  return (
    <GamesListView>
      <h1>Lista gier:</h1>
      <List>
        {games ? (
          games.map(({ id, handle, players }: GameModel) => {
            return (
              <GamesValuesContainer key={id}>
                <Header>
                  <GameName>{getUpperCaseLetter(handle)}</GameName>
                  <AddGameButton>+ Dodaj rozgrywkę</AddGameButton>
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
