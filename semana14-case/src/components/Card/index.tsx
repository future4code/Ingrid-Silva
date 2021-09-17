import { useContext } from "react";
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

  const getImageSource = () => {
    if (!show) return data.imageBackCard;

    return `${data.imagesUrl}${image}`;
  };

  return (
    <img
      alt={name}
      src={getImageSource()}
      onClick={() => onClick && onClick(name)}
    />
  );
};

export default Card;
