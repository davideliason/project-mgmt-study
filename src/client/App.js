import React, { Component } from 'react';
import './App.css';
import MessageBar from '../redux/components/MessageBar.js';
import FilterBar from '../redux/components/FilterBar.js';
import DataTable from '../redux/components/DataTable.js';
import {Grid,Row,Col,Jumbotron} from 'react-bootstrap';



class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			data_groups: [
			  { process_group: "Initiating",
			  knowledge_area: "Project Integration Management",
			  data : "Develop Project Charter"},
			  { process_group: "Planning",
			  knowledge_area: "Project Integration Management",
			  data : "Develop Project Management Plan"},
			  { process_group: "Executing",
			  knowledge_area: "Project Integration Management",
			  data : "Direct and Manage Project Work"}
				],
			process_group: 'Initiating',
			knowledge_area: 'Project Integration Management'
		};
		this.handlePGFilterTextChange = this.handlePGFilterTextChange.bind(this);
		this.handleKAFilterTextChange = this.handleKAFilterTextChange.bind(this);
	}
	  handlePGFilterTextChange(PGFilterText){
	  	this.setState({
	  		process_group: PGFilterText
	  	});
	  }

	  handleKAFilterTextChange(KAFilterText){
	  	this.setState({
	  		knowledge_area: KAFilterText
	  	});
	  }

	   componentDidMount() {
    		this.props.onGetSteps();
  		}
  		
  render() {
   // var {color} = this.props.steps; // yes
    return (
      <div className="App">
        <Jumbotron>
        	<h3>Five Traditional Process Groups</h3>
        </Jumbotron>
        <FilterBar
          onPGFilterTextChange={this.handlePGFilterTextChange}
          onKAFilterTextChange={this.handleKAFilterTextChange}
         />
        <DataTable data_groups = {this.state.data_groups} process_group={this.state.process_group} knowledge_area={this.state.knowledge_area} />
      </div>
    );
  }
}



export default App;
