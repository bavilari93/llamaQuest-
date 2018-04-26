import React, {Component} from 'react'; 
import TriviaQuestion from './TriviaQuestion'
import data from '../data/questionare'

class QuestionContainer extends Component{
	constructor(){
		super();
		this.state={

		}
	}

	renderData(e){
			return e.map((el, index) =>{
			return(
				<div 
				key={index}>
				<TriviaQuestion data={el}/> 
				</div>
				)
		})
	}
	render(){
		return(
			<div>
			{this.renderData(data)}
			</div>
			)
	}
}


export default QuestionContainer;