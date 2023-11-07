interface GameModel {
  name: string;
  description: string;
  _id: string;
  players: number;
  playTime: number;
  type: string;
  difficulty: number;
}
export default GameModel;
