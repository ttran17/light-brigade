import React from 'react';
import DeckGL from '@deck.gl/react';

import {COORDINATE_SYSTEM, OrthographicView} from '@deck.gl/core';
import {ScatterplotLayer} from '@deck.gl/layers';
import {DataFilterExtension} from '@deck.gl/extensions';

import DiscreteTimeSlider from "./util/DiscreteTimeSlider";

// Viewport settings
const INITIAL_VIEW_STATE = {
  target: [0,0,0],
  zoom: 10
};

// Data to be used by the LineLayer
const data = Array(5000).fill()
  .map((x, index) => {
    return {
      "index": index,
      "position": [Math.random()-0.5, Math.random()-0.5],
      "fillColor": [0,0,255, Math.floor(Math.random()*256)]
    }
  });

// original data
const og_data_color = '#bdbdbd';
const accepted_data_color = '#52af77';

// hypothesis support
const hypothesis_color = '#034cf5';
const hypothesis_support = '#52af77';
const hypothesis_support_rejected = '#f50334';

const view = new OrthographicView({id: '2d-scene', controller: true});

// DeckGL react component
function App() {
  const [value, setValue] = React.useState(20);

  const [filterRange, setFilterRange] = React.useState([0,9]);

  const handleTimeSliderChange = (event, newValue) => {
    setFilterRange([newValue-5, newValue+5]);
  }

  const layers = [
    // new ScatterplotLayer({
    //   id: 'og-data',
    //   data,
    //   pickable: false,
    //   coordinateSystem: COORDINATE_SYSTEM.CARTESIAN,
    //   getRadius: 0.005,
    //   getFillColor: d => d.fillColor,
    //
    //   // props added by DataFilterExtension
    //   getFilterValue: d => d.index,
    //   filterRange: filterRange,
    //
    //   // Define extensions
    //   extensions: [new DataFilterExtension()]
    // }),
    // new ScatterplotLayer({
    //   id: 'accepted-data',
    //   data,
    //   pickable: false,
    //   coordinateSystem: COORDINATE_SYSTEM.CARTESIAN,
    //   getRadius: 0.005,
    //   getFillColor: d => d.fillColor,
    //
    //   // props added by DataFilterExtension
    //   getFilterValue: d => d.index,
    //   filterRange: filterRange,
    //
    //   // Define extensions
    //   extensions: [new DataFilterExtension()]
    // }),
    new ScatterplotLayer({
      id: 'rni-hypothesis',
      data,
      pickable: false,
      coordinateSystem: COORDINATE_SYSTEM.CARTESIAN,
      getRadius: 0.005,
      getFillColor: d => d.fillColor,

      // props added by DataFilterExtension
      getFilterValue: d => d.index,
      filterRange: filterRange,

      // Define extensions
      extensions: [new DataFilterExtension()]
    })
  ];


  const osx = {
    position: "absolute",
    bottom: "2%",
    width: "100%",

  };

  const isx = {
    width: "90%",
    margin: "auto"
  }

  const max = data.length;

  return (
    <React.Fragment>
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        views={view}
        layers={layers}
      />

      <DiscreteTimeSlider mycolor={hypothesis_color} osx={osx} isx={isx} onChange={handleTimeSliderChange} max={max}/>

    </React.Fragment>
  )


}

export default App;
