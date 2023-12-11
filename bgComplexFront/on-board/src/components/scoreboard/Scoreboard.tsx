import { useState } from "react";
import {
  PlayerSlashActions,
  PlayersInput,
  PlayersScoreboard,
  ScoreInput,
  ScoreboardTable,
  TableContainer,
  TotalPointContainer,
  TotalPoints,
  TotalPointsContainer,
  TotalScore,
} from "./ScoreboardStyle";

interface IProps {
  maxPlayers: number;
  scoreboardItems: [];
}

const Scoreboard = ({ maxPlayers, scoreboardItems }: IProps) => {
  const [playersData, setPlayersData] = useState<
    Array<{ name: string; scores: number[] }>
  >([]);
  const [playerName, setPlayerName] = useState("");

  // Get values from all inputs
  const handlePlayerData = (
    playerIndex: number,
    playerScore: number,
    value: string
  ) => {
    const updatePlayerData = [...playersData];
    if (updatePlayerData[playerIndex] === undefined) {
      updatePlayerData[playerIndex] = {
        name: updatePlayerData[playerIndex]
          ? playerName
          : `Gracz ${playerIndex + 1}`,
        scores: [],
      };
    }
    for (let i = 0; i < updatePlayerData.length; i++) {
      const player = updatePlayerData[i];
      if (player && player.scores.length < scoreboardItems.length) {
        for (let j = player.scores.length; j < scoreboardItems.length; j++) {
          player.scores[j] = 0;
        }
      }
    }
    updatePlayerData[playerIndex].scores[playerScore] = parseInt(value) || 0;
    setPlayersData(updatePlayerData);
  };

  // Generate inputs based on values comming from API
  const generatePlayerInputs = () => {
    const players = [];
    for (let playerForm = 0; playerForm < maxPlayers; playerForm++) {
      players.push(
        <TotalPointsContainer key={playerForm}>
          <div>
            <PlayersInput
              key={playerForm}
              id={`${playerForm + 1}`}
              placeholder={`Gracz ${playerForm + 1}`}
              onChange={(e) => setPlayerName(e.target.value)}
            />
          </div>

          <div>
            {scoreboardItems.map((value, index) => (
              <div key={index}>
                <ScoreInput
                  autoComplete="off"
                  id={`${index}`}
                  placeholder={`Wartość gracza ${playerForm + 1}`}
                  onChange={(e) =>
                    handlePlayerData(playerForm, index, e.target.value)
                  }
                />
              </div>
            ))}
          </div>
        </TotalPointsContainer>
      );
    }

    return players;
  };
  // REFACTOR NEEDED
  const handlePlayerTotalPoints = (
    playerData: { name: string; scores: number[] }[]
  ): number[] => {
    const playerTotalPoints: number[] = [];
    playerData.map((player) => {
      if (player && player.scores) {
        const sumUp = player.scores.reduce(
          (total: number, currentValue: number) => total + currentValue,
          0
        );
        return playerTotalPoints.push(sumUp);
      } else {
        return playerTotalPoints.push(0);
      }
    });
    return playerTotalPoints;
  };

  const totalPoints = handlePlayerTotalPoints(playersData);
  const players = generatePlayerInputs();
  return (
    <TableContainer>
      <ScoreboardTable style={{ display: "flex" }}>
        <th>
          <PlayerSlashActions>Wartości/gracze</PlayerSlashActions>
          {scoreboardItems.map((scoreValue: string) => {
            return (
              <PlayersScoreboard key={scoreValue}>
                {scoreValue}
              </PlayersScoreboard>
            );
          })}
        </th>
        {players}
      </ScoreboardTable>

      <TotalPointContainer>
        <TotalPoints>Total</TotalPoints>
        {scoreboardItems.length &&
          scoreboardItems.map((item, index) => {
            return (
              <TotalScore>
                {totalPoints[index] ? totalPoints[index] : 0}
              </TotalScore>
            );
          })}
      </TotalPointContainer>
    </TableContainer>
  );
};

export default Scoreboard;
