import React, {Component} from 'react'; 

class UseForm extends Component{
	render(){
		return(
			<div>
				<form onSubmit={this.props.submit}>
					<input
						name="name"
						type="search"
						placeholder="enter your name"
						onChange={e=>this.props.handleChange(e)}
					/>
					<button 
						type="submit"
						onClick={()=>{this.props.mode('trivia')}}>
					submit
					</button>
				</form>


			</div>)
	}
}


export default UseForm;