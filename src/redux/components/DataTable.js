import React from 'react';
import PGDataRow from './PGDataRow.js';
import KADataRow from './KADataRow.js';


export default class DataTable extends React.Component {
	render(){
		const rows = [];
		
		return (
				<div>
					<p>Hi I am a DataTable Component</p>
					<p>Passed in process_group state value as prop: {this.props.process_group} .</p>
					<p>Passed in knowledge_area state value as prop: {this.props.knowledge_area} .</p>

					<KADataRow />
					 <ul>
               			{this.props.data_groups.map((item) => {
        					return (
          						<li key={item.process_area}>
								 <PGDataRow process_group={item.process_area} />

            					 <KADataRow knowledge_area={item.knowledge_area} />
            					 <h4>{item.data}</h4>
          						</li>
       							   )
      					})}
           		     </ul>
				</div>
			);
	}
}