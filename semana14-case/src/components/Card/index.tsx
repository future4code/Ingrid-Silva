import { useContext } from "react";
import { ICard } from "../../config/interfaces";
import GlobalContext from "../../global/GlobalContext";
import { Container } from "./styles";

interface ICardItem {
  card: ICard;
}

const Card: React.FC<ICardItem> = ({ card }) => {
  const {
    state: { data },
  }: any = useContext(GlobalContext);

  return (
    <Container>
      <img src={`${data.imagesUrl}${card.image}`} />
    </Container>
  );
};

export default Card;
