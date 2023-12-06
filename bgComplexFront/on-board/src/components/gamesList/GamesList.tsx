import { useEffect, useState } from "react";
import { instance } from "../../auth/axiosInterceptops";
import GameModel from "../../constant/models/GameModel";
import useInfoModal from "../../customHooks/useInfoModal";
import List from "../../theme/list/List";
import {
  AddGameButton,
  AdditionalGameInfo,
  GameName,
  GamesValuesContainer,
  Header,
} from "../../theme/list/ListStyle";
import CorrectModal from "../modals/correctModal/CorrectModal";
import RequestFail from "../modals/errorModal/RequestFail";
import { GamesListView } from "./GamesListStyle";
const MyGamesList = () => {
  const [games, setGames] = useState([]);
  const [state, setErr] = useInfoModal();

  const { err, addedGame } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("http://localhost:8800/api/games");
        setGames(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const getChoosenGameId = async (id: string) => {
    try {
      const response = await instance.put(
        "http://localhost:8800/api/games/addUserGame",
        { id }
      );
      if (response.data) {
        setErr({ addedGame: true });
      }
    } catch (err) {
      setErr({ err: true });
    } finally {
      setTimeout(() => {
        setErr({ err: false });
        setErr({ addedGame: false });
      }, 2000);
    }
  };

  return (
    <GamesListView>
      {err && <RequestFail requestValue={"Gra juz jest w twojej kolekcji"} />}
      {addedGame && <CorrectModal requestValue={"Dodano grę do biblioteki!"} />}

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
                  <AddGameButton onClick={() => getChoosenGameId(_id)}>
                    + Dodaj do biblioteki
                  </AddGameButton>
                </Header>
                <AdditionalGameInfo>
                  <span>Liczba graczy: {players}</span>
                </AdditionalGameInfo>
              </GamesValuesContainer>
            );
          })
        ) : (
          <span style={{ color: "white" }}>
            Poczekaj chwilkę, zerknę do instrukcji...
          </span>
        )}
      </List>
    </GamesListView>
  );
};

export default MyGamesList;
