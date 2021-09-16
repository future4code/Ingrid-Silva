export interface ICard {
  name: string;
  image: string;
}

export interface IData {
  cards: ICard[];
  imageBackCard: string;
  imagesUrl: string;
}
