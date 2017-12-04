
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
      newState.stepgroups = [];
      if (steps) {
        newState.stepgroups = Object.keys(steps).map(k => steps[k]);
      }
      return newState;
    }

    default:
      return state;
  }
}
