import React from "react";
import { Statistic } from 'semantic-ui-react'
import {Button, Menu, Col, Row, Card} from 'antd';
import 'antd/dist/antd.css';
//import 'home.css';
import './home.scss';
export default class NavExample extends React.Component {
  constructor(props) {
    super(props);
//      {/*Need 4 state variables, 3 booleans and one int */}
    this.state = {

      drycough: false,
      fever: false,
      flu: false,
      age: 0,
      results:false,
      risk:"high"
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(){

    if(this.state.drycough || this.state.fever || this.state.flu)
    this.setState({
      risk: "low",
      results:true
    })
    if(this.state.drycough & this.state.flu || this.state.flu & this.state.fever || this.state.drycough & this.state.fever)
    this.setState({
      risk: "medium",
      results:true

    })
    if(this.state.drycough & this.state.fever & this.state.flu)
    this.setState({
      risk: "high",
      results:true
    })


  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.checked
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log("State set to "+ value);
  }

  render() {
if(!this.state.results){
    return (
 <div className="App section">

      <React.Fragment>


<body>
<Row>
<div class="column is-two-fifths">

<h1 className="title" >COVID-19 Symptom Checker</h1>
</div>
  <div className="column">
  <h1 class="title"> Please select your symptoms  </h1>
    <p class="subtitle">
    Consult a physician for a final opinion</p>
    {/*Begin form here
      TODO: Write event handlers to process form using state variables */}
       <form>
    <label class="checkbox">
    <input type="checkbox" name="drycough" checked={this.state.drycough} onChange={this.handleInputChange} />
  <span className="testing">
    Dry Cough
</span>

  </label>
  <br>
  </br>
  <label class="checkbox">
  <input type="checkbox" name="fever" checked={this.state.fever} onChange={this.handleInputChange} />
    <span className="testing">
  Mild fever
  </span>
</label>
<br>
</br>
<label class="checkbox">
<input type="checkbox"  name="flu" checked={this.state.flu} onChange={this.handleInputChange}/>
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

      <a class="button is-primary align-right" onClick={this.handleSubmit}>Submit</a>

    </div>
     </form>
</div>

</Row>
<Row>
<br>
</br>
<br>
</br>
<h4>Disclaimer: This site should not be used for medical advice and is for educaitonal purposes only</h4>
</Row>
  </body>
        </React.Fragment>
        </div>

    );
  }
  if(this.state.risk ==="high"){
      return (
        <React.Fragment>
        <Row>
        <div class="column is-two-fifths">

        <h1 className="title">Risk Level: High</h1>
        </div>
        <div className="column" >
        <progress class="progress is-danger" max="100">90%</progress>

          <h1 className="title ">Please take the following steps:</h1>

            <h1 className="title is-4"> - Contact your physician</h1>
              <h1 className="title is-4"> - Self Quarantine</h1>
          <a href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html" className="title"> Please consult the CDC website for the latest information -></a>
          </div>
          </Row>

        </React.Fragment>
      );
  }
  if(this.state.risk ==="medium"){
    return (
      <React.Fragment>
      <Row>
      <div class="column is-two-fifths">

      <h1 className="title">Risk Level: Medium</h1>
      </div>
      <div className="column" >
      <progress class="progress is-warning" max="100">90%</progress>

        <h1 className="title ">Please take the following steps:</h1>

          <h1 className="title is-4"> - Contact your physician</h1>
            <h1 className="title is-4"> - Self Quarantine</h1>
        <a href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html" className="title"> Please consult the CDC website for the latest information -></a>
        </div>
        </Row>

      </React.Fragment>
    );
  }
  if(this.state.risk ==="low"){
    return (
      <React.Fragment>
      <Row>
      <div class="column is-two-fifths">

      <h1 className="title">Risk Level: Low</h1>
      </div>
      <div className="column" >
      <progress class="progress is-success" max="100">90%</progress>

        <h1 className="title ">Please take the following steps:</h1>

          <h1 className="title is-4"> - Contact your physician</h1>
            <h1 className="title is-4"> - Self Quarantine</h1>
        <a href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html" className="title"> Please consult the CDC website for the latest information -></a>
        </div>
        </Row>

      </React.Fragment>
    );
  }
}
}
