import { useContext } from "react";
import { ICard } from "../../config/interfaces";
import GlobalContext from "../../global/GlobalContext";
import Card from "../Card";
import { Content, Text, Overlay, Name, CloseButton } from "./styles";

interface IModal {
  card: ICard;
}

const Modal: React.FC<IModal> = ({ card }) => {
  const {
    state: { selectedCard },
    setters: { closeModal },
  }: any = useContext(GlobalContext);

  const handleContentClick = (e: any) => {
    e.stopPropagation();
  };

  return (
    <Overlay onClick={closeModal}>
      <Content onClick={handleContentClick}>
        <Name>{selectedCard}</Name>
        <Card card={card} />
        <Text>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero.
        </Text>

        <CloseButton onClick={closeModal}>&times;</CloseButton>
      </Content>
    </Overlay>
  );
};
export default Modal;
