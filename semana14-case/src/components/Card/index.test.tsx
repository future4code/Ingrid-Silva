import { shallow } from "enzyme";
import Card from ".";
import { ICard } from "../../config/interfaces";
import GlobalContext from "../../global/GlobalContext";

describe("Card", () => {
  const CARD: ICard = {
    name: "Name Test",
    image: "Image Test",
    show: false,
  };

  const CONTEXT = {
    data: {
      imagesUrl: "https://images.com/",
    },
  };

  it("should match the snapshot", () => {
    const wrapper = shallow(
      <GlobalContext.Provider value={CONTEXT}>
        <Card card={CARD} />
      </GlobalContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
