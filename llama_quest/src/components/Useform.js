import React, {Component} from 'react'; 

class UseForm extends Component{
	render(){
		return(
			<div className="form">
				
				<input 
				type="search"
				name="text"
				placeholder="enter your name"
				value={this.props.input}
				onChange={e=>this.props.handleChange(e)}/>
				<button
				type="submit" 
				value="Submit"
				onClick= {()=> this.props.handleSaveItem('super')}
				>Play</button>
			</div>
			)
	}
}


export default UseForm;