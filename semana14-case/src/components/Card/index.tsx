import { useContext } from "react";
import ReactCardFlip from "react-card-flip";
import { ICard } from "../../config/interfaces";
import GlobalContext from "../../global/GlobalContext";

interface ICardItem {
  card: ICard;
  onClick?: (name: string) => void;
}

const Card: React.FC<ICardItem> = ({ card, onClick }) => {
  const { name, image, show } = card;

  const {
    state: { data },
  }: any = useContext(GlobalContext);

  return (
    <ReactCardFlip isFlipped={!show} flipDirection="horizontal">
      <img
        alt={name}
        src={`${data.imagesUrl}${image}`}
        onClick={() => onClick && onClick(name)}
      />

      <img
        alt={name}
        src={data.imageBackCard}
        onClick={() => onClick && onClick(name)}
      />
    </ReactCardFlip>
  );
};

export default Card;
