import React from 'react';
import KAFilter from './KAFilter.js';
import PGFilter from './PGFilter.js';


export default class FilterBar extends React.Component {
	constructor(props){
		super(props);
		this.handlePGFilterTextChange = this.handlePGFilterTextChange.bind(this);
		this.handleKAFilterTextChange = this.handleKAFilterTextChange.bind(this);
	}

	handlePGFilterTextChange(e){
		this.props.onPGFilterTextChange(e.target.value);
	}

	handleKAFilterTextChange(e){
		this.props.onKAFilterTextChange(e.target.value);
	}
	render(){
		return (
				<div>
					<ul>
						<KAFilter /> 
						<PGFilter  /> 
						<form>
						<label>
							Choose a  process group:
							<select value={this.props.process_group} onChange={this.handlePGFilterTextChange}>
								<option value="Initiating">Initiating</option>
								<option value="Planning">Planning</option>
							</select>
						</label>
							
							<input 
								type="text" 
								placeholder="choose knowledge area.."
								onChange={this.handleKAFilterTextChange}
							v />
						</form>
					</ul>
				</div>
			);
	}
}