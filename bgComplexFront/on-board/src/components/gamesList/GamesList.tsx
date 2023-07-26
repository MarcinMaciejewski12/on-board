import { GamesListView } from "./GamesListStyle";
import List from "../theme/list/List";
import axios from "axios";
import { useEffect, useState } from "react";
import { GamesValuesContainer, GameName } from "../theme/list/ListStyle";
import { gamesUrl } from "../constant/Constant";

interface GameModel {
  handle: string;
  description: string;
  id: string;
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
              client_id: process.env.client_id,
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

  return (
    <GamesListView>
      <List>
        {games.length > 0
          ? games.map((game: GameModel) => {
              return (
                <GamesValuesContainer key={game.id}>
                  <GameName>{game.handle}</GameName>
                </GamesValuesContainer>
              );
            })
          : "games not found"}
      </List>
    </GamesListView>
  );
};

export default GamesList;
