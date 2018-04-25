import React, { Component } from 'react';
import './App.css';
import data from './data/questionare'
import UseForm from './components/Useform';
import QuestionContainer from './components/QuestionContainer'

class App extends Component {
  constructor(){
    super();
    this.State ={
      mode:'user', 
      search:'',
      user:[],
      data:[], 
      answer:[], 
      answerNumber:''
    }
  }

  handleChange(input, mode){
    const target = input.target, 
    value = target.value,
    name= target.name;
    this.setState({
      [name]:value
    })    
  }


  handleSubmit(submit){
    submit.preventDefault();
  }
  modeChanger(mode){
    let modetype =[ "trivia","winner","user"]

    modetype.forEach((e)=>{
      if(mode === e){
        this.setState({
           mode: e
        })
      }
    })
    // if (mode === "trivia"){
    //   this.setState({
    //   mode:"trivia"
    //   })
    // }else if(mode === "winner"){
    //   this.setState({
    //   mode:"winner"
    //   })
    // }else{
    //   this.setState({
    //   mode:"user"
    //   })
    // }
    console.log(this.state.mode)
  }

  render() {
    return (
      <div className="App">
        <UseForm
        handleChange={this.handleChange.bind(this)}
        submit={this.handleSubmit.bind(this)}
        mode={this.modeChanger.bind(this)}
        />
      </div>
    );
  }
}

export default App;
