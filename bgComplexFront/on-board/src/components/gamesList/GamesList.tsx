import axios from "axios";
import { useEffect, useState } from "react";
import { instance } from "../../auth/axiosInterceptops";
import GameModel from "../../constant/models/GameModel";
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
  const [err, setErr] = useState<boolean>();
  const [addedGameModal, setAddedGameModal] = useState<boolean>();

  useEffect(() => {
    axios
      .get("http://localhost:8800/api/games")
      .then((repsonse) => {
        setGames(repsonse.data);
      })
      .catch((error) => {
        console.log("error");
      });
  }, []);

  const getChoosenGameId = (id: string) => {
    instance
      .put("http://localhost:8800/api/games/addUserGame", { id: id })
      .then((response) => {
        // REFACTOR
        if (!response.data) {
          setErr(true);
          setTimeout(() => {
            setErr(false);
          }, 2000);
        } else if (response.data) {
          setAddedGameModal(true);
          setTimeout(() => {
            setAddedGameModal(false);
          }, 2000);
        }
        // -------
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <GamesListView>
      {err && <RequestFail requestValue={"Gra juz jest w twojej kolekcji"} />}
      {addedGameModal && (
        <CorrectModal requestValue={"Dodano grę do biblioteki!"} />
      )}

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
            Poczekaj chwile, zerknę do instrukcji...
          </span>
        )}
      </List>
    </GamesListView>
  );
};

export default MyGamesList;
