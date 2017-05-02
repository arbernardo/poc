/**
 * Created by ace on 5/2/17.
 */
import React, {Component} from 'react';

export default class Ordinate extends Component {


  render(){


    return(
      <div>
        <select name="ordinate" multiple>
          <option value="revAssessed">Revenue Assessed</option>
          <option value="revPaid">Revenue Paid</option>
          <option value="invoice">Invoice Value</option>
          <option value="stat">Statistical Value</option>
          <option value="fraud">Fraud Value</option>
          <option value="exempt">Exemption Value</option>
        </select>
      </div>
    );
  }
}
