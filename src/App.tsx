import React from "react";
import Design from "design/Design";
import MainPage from "MainPage";
import LineChart_canvasJs from "performance/canvasJs/LineChart_canvasJs";
import LineChart_chartJs from "performance/chartJs/LineChart_chartJs";
import Performance from "performance/Performance";
import LineChart_plotly from "performance/plotly/LineChart_plotly";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/design" component={Design} />
      <Route exact path="/performance" component={Performance} />
      <Route exact path="/plotly" component={LineChart_plotly} />
      <Route exact path="/chartJs" component={LineChart_chartJs} />
      <Route exact path="/canvasJs" component={LineChart_canvasJs} />
    </>
  );
}

export default App;
