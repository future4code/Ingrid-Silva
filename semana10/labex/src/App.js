import { BrowserRouter as Router, Switch, Route, link } from "react-router-dom";

import AdminHome from "./pages/AdminHome";
import ApplicationForm from "./pages/ApplicationForm";
import CreateTrip from "./pages/CreateTrip";
import Home from "./pages/Home/Home";
import ListTrips from "./pages/ListTrips";
import Login from "./pages/Login";
import TripDetails from "./pages/TripDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";

import styled, { createGlobalStyle } from "styled-components";

function App() {
  return (
    <Router>
      <GlobalStyle />

      <Header />

      <Main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/admin/trips/create" exact component={AdminHome} />
          <Route path="/trips/application" exact component={ApplicationForm} />
          <Route path="/createtrip" exact component={CreateTrip} />
          <Route path="/trips/list" exact component={ListTrips} />
          <Route path="/admin/trips/id" exact component={TripDetails} />
        </Switch>
      </Main>

      <Footer />
    </Router>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
 * {
   box-sizing: border-box;
   padding: 0;
   margin: 0;
 }

 #root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
 }
`;

export const Main = styled.div`
  background-color: #f1faee;
  display: flex;
  flex: 1;
`;
