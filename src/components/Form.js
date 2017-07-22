import React, { Component } from 'react'
import '../styles/Form.css'


export default class NewForm extends Component {
  constructor(props){
    super(props);

    this.state={
      vehicles:[],
      pilot: '',
      value: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.hangleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    this.setState({value:event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();

    this.setState({pilot: this.state.value});
  }

  fetchData = (e) => {
    e.preventDefault();
    fetch('https://swapi.co/api/vehicles/').then(results => {
      return results.json();
    }).then(data => {
      this.setState({vehicles: data})
    })
  }
  renderVehicles = () =>{
      return this.state.vehicles.map(e => (
        <div className="vehicle">{e.name}</div>
      )
    );
  }

  render(){
    return(
      <div className='overallFormDiv'>
        <form className='mainForm'>
          <label className="lableName">
            Pilot Input
          </label>
            <input className='firstInput' value={this.state.value} onChange={this.handleInputChange}/>
          <button className='button' type='submit' onSubmit={this.handleSubmit}> Click Me </button>
        </form>
        <div className='vehiclesInfoDiv'>
          {this.renderVehicles}
        </div>
      </div>
    );
  }
  componentDidMount(){
    console.log('Hello !!!!');
    fetch('https://swapi.co/api/vehicles/').then(results => {
      return results.json();
    }).then(data => {
      this.setState({vehicles: data})
    });
  }
}
