import React from "react";
import "./App.css";

import Etapa1 from "./Components/Etapa1/Etapa1";
import Etapa2 from "./Components/Etapa2/Etapa2";
import Etapa3 from "./Components/Etapa3/Etapa3";
import Etapa4 from "./Components/Etapa4/Etapa4";

class App extends React.Component {
  state = {
    etapa: 1,
  };

  passaEtapa = (event, etapa) => {
    event.preventDefault();
    this.setState({ etapa: etapa });
  };

  renderizarEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 passaEtapa={this.passaEtapa}></Etapa1>;
      case 2:
        return <Etapa2 passaEtapa={this.passaEtapa}></Etapa2>;
      case 3:
        return <Etapa3 passaEtapa={this.passaEtapa}></Etapa3>;
      case 4:
        return <Etapa4 passaEtapa={this.passaEtapa}></Etapa4>;
    }
  };

  render() {
    return <div>{this.renderizarEtapa()}</div>;
  }
}

export default App;
