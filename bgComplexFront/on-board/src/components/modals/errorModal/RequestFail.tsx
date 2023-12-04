import { FailReqContainer } from "./RequestFailStyle";
interface IProps {
  requestValue: string;
}

const RequestFail = ({ requestValue }: IProps) => {
  return (
    <FailReqContainer
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <p>{requestValue}</p>
    </FailReqContainer>
  );
};

export default RequestFail;
