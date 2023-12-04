import { CorrectModalContainer } from "./CorrectModalStyle";
interface IProps {
  requestValue: string;
}

const CorrectModal = ({ requestValue }: IProps) => {
  return (
    <CorrectModalContainer
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <p>{requestValue}</p>
    </CorrectModalContainer>
  );
};

export default CorrectModal;
