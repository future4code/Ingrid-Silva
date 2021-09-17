import { useContext, useEffect } from "react";
import CardList from "../components/CardList";
import Modal from "../components/Modal";
import { ICard } from "../config/interfaces";
import GlobalContext from "../global/GlobalContext";
import { Container, PlayButton, Message } from "./styles";

const Screen: React.FC = () => {
  const {
    state: { data, isPlaying, selectedCard, showModal, isShuffling },
    setters: { startGame, selectCard, setShowModal, setIsShuffling },
    requests: { getData },
  }: any = useContext(GlobalContext);

  useEffect(() => {
    getData();
  }, [getData]);

  const handlePlayButtonClick = () => {
    startGame();
  };

  const renderActionButton = (label: string) => (
    <PlayButton type="button" onClick={handlePlayButtonClick}>
      {label}
    </PlayButton>
  );

  const renderHeader = () => {
    if (selectedCard) {
      return renderActionButton("Jogar novamente");
    }

    if (isShuffling) {
      return <Message>Embaralhando cartas...</Message>;
    }

    if (isPlaying) {
      return <Message>Escolha uma carta</Message>;
    }

    return renderActionButton("Jogar");
  };

  const handleCardClick = (name: string) => {
    if (!isShuffling && (!selectedCard || selectedCard === name)) {
      selectCard(name);
      setShowModal(true);
    }
  };

  const currentCard = data.cards.find(
    (card: ICard) => card.name === selectedCard
  );

  return (
    <Container>
      {renderHeader()}
      <CardList cards={data?.cards} onClick={handleCardClick} />
      {!!currentCard && !!showModal && <Modal card={currentCard} />}
    </Container>
  );
};
export default Screen;
