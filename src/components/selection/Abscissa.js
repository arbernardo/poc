/**
 * Created by ace on 5/2/17.
 */
import React, {Component} from 'react';

export default class Abscissa extends Component {

  limitChoices = () => {

  }


  render() {

    return (
      <div>
        <select name="abscissa" multiple>
          <option value="modeOfTransport">Mode Of Transport</option>
          <option value="countryOfOrigin">Country Of Origin</option>
          <option value="countryOfDestination">Country Of Destination</option>
          <option value="company">Company</option>
          <option value="declarant">Declarant</option>
          <option value="product">Product</option>
          <option value="regime">Regime</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
    );
  }
}
