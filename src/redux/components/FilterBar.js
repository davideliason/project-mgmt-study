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

						<label>
							Choose a knowledge area:
							<select value={this.props.knowledge_area} onChange={this.handleKAFilterTextChange}>
								<option value="Project Integration Management">Project Integration Management</option>
								<option value="Project Scope Management">Project Scope Management</option>
							</select>
						</label>
							
							
						</form>
					</ul>
				</div>
			);
	}
}