import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


const App = (props) => {

  return (
    <div className="boxes">
      <div className="box box1">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box box2">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

export default App;
