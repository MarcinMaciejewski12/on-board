import { useEffect, useState } from "react";
import { instance } from "../../../auth/axiosInterceptops";
import Scoreboard from "../../../components/scoreboard/Scoreboard";
import {
  GameName,
  PlayedGamesWindow,
  ScoreboardSection,
  WindowSheet,
} from "./AddPlayedGamesStyle";
interface Game {
  name: string;
  players: string;
  description: string;
  scoreboardItems: [];
}
const AddPlayedGames = () => {
  const [game, setGame] = useState<Game>();
  const gameId = localStorage.getItem("gameId");

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const res = await instance.get(
          `http://localhost:8800/api/games/${gameId}`
        );
        setGame(res.data);
        getPlayersValue();
      } catch (err) {
        console.log(err);
      }
    };
    fetchGame();
  }, [gameId]);

  const getPlayersValue = () => {
    const splitPlayers = game?.players.split("-");
    const maxPlayers = splitPlayers?.[1];
    return parseInt(maxPlayers ?? "");
  };

  return (
    <PlayedGamesWindow>
      <WindowSheet>
        <GameName>{game?.name}</GameName>
        <ScoreboardSection>
          <Scoreboard
            scoreboardItems={game?.scoreboardItems ?? []}
            maxPlayers={getPlayersValue()}
          />
        </ScoreboardSection>
      </WindowSheet>
    </PlayedGamesWindow>
  );
};

export default AddPlayedGames;
