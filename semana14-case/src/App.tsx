import "./App.css";
import GlobalState from "./global/GlobalState";
import Screen from "./Screen";

const App: React.FC = () => {
    return (
        <GlobalState>
            <Screen />
        </GlobalState>
    );
};
export default App;
