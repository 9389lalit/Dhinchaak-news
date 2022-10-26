import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = () => {
  const apikey="e48f107e44684777b02a54bed2dd55d7";
  const [progress, setProgress] = useState(0);
  const setprogress =(progress)=>{
    setProgress(progress);
  }


    return (
      <Router>
        <Navbar />
        <LoadingBar
          color='maroon'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Switch>
          <Route exact path="/">
            <News setProgress={setprogress} apikey={apikey} key="general" category="general" country="in" pageSize={10} />
          </Route>
          <Route exact path="/business">
            <News setProgress={setprogress} apikey={apikey} key="business" category="business" country="in" pageSize={10} />
          </Route>
          <Route exact path="/entertainment">
            <News setProgress={setprogress} apikey={apikey} key="entertainment" category="entertainment" country="in" pageSize={10} />
          </Route>ch
          <Route exact path="/sports">
            <News setProgress={setprogress} apikey={apikey} key="sports" category="sports" country="in" pageSize={10} />
          </Route>
          <Route exact path="/science">
            <News setProgress={setprogress} apikey={apikey} key="science" category="science" country="" pageSize={10} />
          </Route>
          <Route exact path="/technology">
            <News setProgress={setprogress} apikey={apikey} key="technology" category="technology" country="in" pageSize={10} />
          </Route>
          <Route exact path="/health">
            <News setProgress={setprogress} apikey={apikey} key="health" category="health" country="in" pageSize={10} />
          </Route>
      
        </Switch>
      </Router>

    )
  
}

export default App