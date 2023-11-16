import {
  PlayerSlashActions,
  PlayersInput,
  PlayersScoreboard,
  ScoreInput,
} from "./ScoreboardStyle";

interface IProps {
  maxPlayers: number;
  scoreboardItems: [];
}

const Scoreboard = ({ maxPlayers, scoreboardItems }: IProps) => {
  const generatePlayerInputs = () => {
    const players = [];
    for (let playerForm = 0; playerForm < maxPlayers; playerForm++) {
      console.log(scoreboardItems);
      players.push(
        <div
          key={playerForm}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div>
            <PlayersInput
              key={playerForm}
              placeholder={`Gracz ${playerForm + 1}`}
            />
          </div>
          <div>
            {scoreboardItems.map((scoreValue: any, index) => (
              <div key={index}>
                <ScoreInput placeholder={`Wartość gracza ${playerForm + 1}`} />
              </div>
            ))}
          </div>
        </div>
      );
    }

    return players;
  };
  const players = generatePlayerInputs();
  return (
    <div style={{ display: "flex" }}>
      <div>
        <PlayerSlashActions>Wartości/gracze</PlayerSlashActions>
        {scoreboardItems.map((scoreValue: string) => {
          return (
            <PlayersScoreboard key={scoreValue}>{scoreValue}</PlayersScoreboard>
          );
        })}
      </div>
      {players}
    </div>
  );
};

export default Scoreboard;
