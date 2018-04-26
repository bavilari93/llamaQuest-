import React, {Component} from 'react'; 

class TriviaQuestions extends Component{
	renderyes(){
		console.log("trivia is been render")
	}
	render(){
		return(
			<div> 
				<h1>{this.props.data.question}</h1>
					<form>
						<label>
							<input 
								type="checkbox" 
								name="answer" 
								value={this.props.data.answer1} 
								check="1"
							/>
							{this.props.data.answer1}
						</label>
						<label>
							<input 
								type="checkbox" 
								name="answer" 
								value={this.props.data.answer2} 
								check="2"
							/>
							{this.props.data.answer2}
						</label>
						<label>
							<input 
								type="checkbox" 
								name="answer" 
								value={this.props.data.answer3} 
								check="3"
							/>
							{this.props.data.answer3}
						</label>
					</form>
			</div>
			)
	}
}


export default TriviaQuestions;