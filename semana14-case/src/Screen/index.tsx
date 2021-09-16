import { useContext, useEffect } from "react";
import CardList from "../components/CardList";
import GlobalContext from "../global/GlobalContext";
import { Container } from "./styles";

const Screen: React.FC = () => {
  const {
    state,
    setters,
    requests: { getData },
  }: any = useContext(GlobalContext);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Container>
      <CardList cards={state.data?.cards} />
    </Container>
  );
};
export default Screen;
