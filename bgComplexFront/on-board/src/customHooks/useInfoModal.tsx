import { useState } from "react";

interface InfoModalState {
  err?: boolean | undefined;
  addedGame?: boolean | undefined;
}

const useInfoModal = (): [InfoModalState, (info: InfoModalState) => void] => {
  const [state, setState] = useState<InfoModalState>({
    err: undefined,
    addedGame: undefined,
  });

  const message = (info: InfoModalState) => {
    setState((prevState) => ({ ...prevState, ...info }));
  };

  return [state, message];
};

export default useInfoModal;
