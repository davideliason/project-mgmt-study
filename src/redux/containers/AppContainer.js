import { connect } from 'react-redux';
import { getSteps } from '../actions/get_steps.js';
import {setKaFilter} from '../actions/get_steps.js';
import {setPgFilter} from '../actions/get_steps.js';
import App from '../../client/App.js';

function kaFilterThis(state,ka){
  var result = state.filter(function(obj){
    return obj.knowledge_area
  });
  return result
}
function mapStateToProps(state) {
  return {
    // steps : filterSteps(state.steps.stepgroups, state.pgFilter,state.kaFilter)
    steps : state.steps,
    kaFiltered : kaFilterThis(state.steps.stepgroups,state.ka)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onGetSteps: (ka,pg) => dispatch(getSteps(ka,pg)),
    setNewKaFilter: (x) => dispatch(setKaFilter(x)),
    setNewPgFiler: (y) => dispatch(setPgFilter(y))
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;

