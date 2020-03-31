import React from "react";
import { Statistic } from 'semantic-ui-react'
import {Button, Menu, Col, Row, Card} from 'antd';
import 'antd/dist/antd.css';
//import 'home.css';
import './home.scss';
export default class NavExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }


  render() {

    return (
 <div className="App section">

      <React.Fragment>


<body>
<Row>
<div class="column is-two-fifths">


<h1 className="title" >COVID-19 Symptom Checker</h1>




</div>
<div className="column">
<h1 class="title">
      Please select your symptoms
    </h1>

    <p class="subtitle">
    Consult a physician for a final opinion</p>


    <label class="checkbox">
    <input type="checkbox" />
  <span className="testing">
    Dry Cough
</span>

  </label>
  <br>
  </br>
  <label class="checkbox">
  <input type="checkbox" />
    <span className="testing">
  Mild fever
  </span>
</label>
<br>
</br>
<label class="checkbox">
<input type="checkbox" />
  <span className="testing">
Negative Flu Test
</span>

</label>
<br>
</br>
    <div class="field">
      <p class="control">
        <span class="select">
          <select>
            <option>Age Range</option>
            <option>0-18</option>
            <option>18-40</option>
            <option>40-65</option>
              <option>65+</option>
          </select>
        </span>
      </p>
    </div>

    <div class="buttons">

      <a class="button is-primary align-right">Submit</a>

    </div>
</div>
</Row>
  </body>
        </React.Fragment>
        </div>

    );
  }
}
