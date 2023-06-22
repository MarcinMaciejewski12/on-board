import { GamesListView } from "./GamesListStyle";
import List from "../theme/list/List";
import axios from "axios";
import { useEffect, useState } from "react";
import { GamesValuesContainer, GameName } from "../theme/list/ListStyle";

const gamesUrl = "https://api.boardgameatlas.com/api/search";

interface GameModel {
    handle: string;
    description: string;
    id: string;
  }


const GamesList = ()=> {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const gamesList = await axios
              .get(gamesUrl, {
                params: {
                  name: "",
                  client_id: "6I6aCqsqNM",
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
    
      console.log(games);

    return <GamesListView>
         <List>
         {games.length > 0
            ? games.map((game: GameModel) => {
                return (
                  <GamesValuesContainer>
                    <GameName key={game.id}>{game.handle}</GameName>
                  </GamesValuesContainer>
                );
              })
            : "games not found"}
         </List>
    </GamesListView> 
   
}


export default GamesList;