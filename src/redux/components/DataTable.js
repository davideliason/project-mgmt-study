import React from 'react';
import PGDataRow from './PGDataRow.js';
import KADataRow from './KADataRow.js';


export default class DataTable extends React.Component {
	render(){
		const rows = [];
		
		return (
				<div>
					<p>Hi I am a DataTable Component</p>
					<PGDataRow />
					<KADataRow />
					 <ul>
               			{this.props.data_groups.map((item) => {
        					return (
          						<li key={item.process_area}>
            					 <h2>{item.process_area}</h2>
            					 <h3>{item.knowledge_area}</h3>
            					 <h4>{item.data}</h4>
          						</li>
       							   )
      					})}
           		     </ul>
				</div>
			);
	}
}