import GamesList from "./GamesList";
import { GamesWindow, NavigationMargin } from "./GamesListWindowStyle";

const GamesListWindow = () => {
  return (
    <>
      <NavigationMargin />
      <GamesWindow>
        <GamesList />
      </GamesWindow>
    </>
  );
};

export default GamesListWindow;
