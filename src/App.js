import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList'
import WelcomePage from './components/WelcomePage'
import { Route } from "react-router-dom";
import SearchForm from './components/SearchForm';



export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={CharacterList} />
      <Route exact path="/welcome" component={WelcomePage} />
      <Route exact path="/search" component={SearchForm} />
      <CharacterList />
    </main>
  );
}
