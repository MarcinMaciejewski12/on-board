import { GamesListView } from "./GamesListStyle";
import List from "../theme/list/List";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  GamesValuesContainer,
  GameName,
  AddGameButton,
  Header,
  AdditionalGameInfo,
} from "../theme/list/ListStyle";
import { gamesUrl, CLIENT_ID } from "../constant/Constant";
interface GameModel {
  handle: string;
  description: string;
  id: string;
  players: number;
}

const GamesList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // TODO: refactor(try with SWR)
    const fetchData = async () => {
      try {
        const gamesList = await axios
          .get(gamesUrl, {
            params: {
              name: "",
              client_id: CLIENT_ID, //Need to add this to const file.
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
      <List>
        {games.length > 0 ? (
          games.map((game: GameModel) => {
            return (
              <GamesValuesContainer key={game.id}>
                <Header>
                  <GameName>{getUpperCaseLetter(game.handle)}</GameName>
                  <AddGameButton>+ Dodaj rozgrywkę</AddGameButton>
                </Header>
                <AdditionalGameInfo>
                  <span>Liczba graczy: {game.players}</span>
                </AdditionalGameInfo>
              </GamesValuesContainer>
            );
          })
        ) : (
          <span style={{ color: "white" }}>"games not found"</span>
        )}
      </List>
    </GamesListView>
  );
};

export default GamesList;
