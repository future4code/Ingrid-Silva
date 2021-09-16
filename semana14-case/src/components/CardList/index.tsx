import { ICard } from "../../config/interfaces";
import Card from "../Card";
import { Container } from "./styles";

interface ICardList {
  cards: ICard[];
}

const CardList: React.FC<ICardList> = ({ cards }) => {
  return (
    <Container>
      {cards?.map((card: ICard) => (
        <Card key={card.name} card={card} />
      ))}
    </Container>
  );
};
export default CardList;
