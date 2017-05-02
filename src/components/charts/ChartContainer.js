import React, {Component} from 'react';

import Abscissa from '../selection/Abscissa';
import Ordinate from '../selection/Ordinate';


export default class ChartContainer extends Component {

  state = {
    currentView : null,
    data: [],
    abscissa: null,
    ordinate: null,

  }

  render() {



    return (
      <div>
        <Abscissa/>
        <Ordinate/>
        <div id="chartView">

        </div>
      </div>
    );
  }
}
