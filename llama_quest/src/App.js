import React, { Component } from 'react';
import './App.css';
import data from './data/questionare'
import UseForm from './components/Useform';
import QuestionContainer from './components/QuestionContainer'
import Winner from './components/Winner'

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      inputText: '',
      mode:'view'};
    
  }

 handleChange(input){
    const target = input.target, 
    value = target.value,
    name= target.name;
    this.setState({
      [name]:value,
    })    
  }

  handleMode(mode) {
    console.log(mode);
    this.setState({mode: mode});
  }

  
  renderView() {
    if(this.state.mode === 'view') {
      return (
        <UseForm
          value={this.state.text}
          handleSaveItem={this.handleMode.bind(this)}
          handleChange={this.handleChange.bind(this)}/>
         
      );
    } else {
      return (
         <QuestionContainer/>
          
      );
    }
  }
  
  render () {
    return (
      <div>
        {this.renderView()}
      </div>
    );
  }
}

export default App;
