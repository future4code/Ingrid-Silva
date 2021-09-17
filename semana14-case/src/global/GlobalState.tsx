import { useState, useCallback } from "react";
import axios from "axios";
import GlobalContext from "./GlobalContext";
import { ICard, IData } from "../config/interfaces";
import { shuffleArray } from "../utils/cards";

const GlobalState: React.FC = ({ children }) => {
  const [data, setData] = useState<IData>({
    cards: [],
    imagesUrl: "",
    imageBackCard: "",
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedCard, setSelectedCard] = useState<string | undefined>();
  const [showModal, setShowModal] = useState(false);

  const getData = useCallback(async () => {
    try {
      const { data } = await axios.get("/assets/tarot.json");

      const cards = data.cards.map((card: ICard) => ({ ...card, show: true }));

      setData({ ...data, cards });
    } catch (e) {
      console.log(e);
    }
  }, []);

  const shuffleCards = () => {
    const cards: ICard[] = shuffleArray([...data.cards]);
    setData((data: IData) => ({ ...data, cards }));
  };

  const toggleCards = (show: boolean) => {
    const cards: ICard[] = data.cards.map((card: ICard) => ({ ...card, show }));
    setData((data: IData) => ({ ...data, cards }));
  };

  const selectCard = (name: string) => {
    if (selectedCard) return;

    const cards: ICard[] = data.cards.map((card: ICard) =>
      card.name === name ? { ...card, show: true } : card
    );
    setData((data: IData) => ({ ...data, cards }));
    setSelectedCard(name);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const startGame = () => {
    shuffleCards();
    toggleCards(false);
    setIsPlaying(true);
    setSelectedCard(undefined);
  };

  const state = { data, isPlaying, selectedCard, showModal };
  const setters = { startGame, selectCard, setShowModal, closeModal };
  const requests = { getData };

  return (
    <GlobalContext.Provider value={{ state, setters, requests }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
