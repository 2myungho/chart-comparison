import Design from "design/Design";
import MainPage from "MainPage";
import Performance from "performance/Performance";
import React from "react";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/design" component={Design} />
      <Route exact path="/performance" component={Performance} />
    </>
  );
}

export default App;
