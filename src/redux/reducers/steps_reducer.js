
export function stepsReducer(state = {}, action) {
  switch(action.type) {
    case 'GET_STEPS_REQUESTED': {
      return Object.assign({}, state, {
        inProgress: true,
        error: '',
        success: ''
      });
    }
    case 'GET_STEPS_REJECTED': {
      return Object.assign({}, state, {
        inProgress: false,
        error: 'Error in getting steps.',
      });
    }

    case 'GET_STEPS_FULFILLED': {
      const {steps} = action.steps;
      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Got steps.'
      });
      newState.tempstepgroups = [];

      newState.stepgroups = [];
      // newState.kafiltered = [];

      if (steps) {
        newState.tempstepgroups = Object.keys(steps).map(k => steps[k]);
        newState.stepgroups = newState.tempstepgroups.filter(function(step){
          return step.knowledge_area === "Project Integration Management"
        });
        
      }
      return newState;
    }

    // case 'GET_KA_FILTERED': {
    //   const newKaState = Object.assign({},state,{});
    //   newKaState.kafiltered = [];

    // }

    default:
      return state;
  }



}
