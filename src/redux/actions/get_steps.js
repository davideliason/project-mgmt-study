import database from './database.js';

export function getSteps(ka,pg){
	return dispatch => {
		dispatch(getStepsRequestedAction());
		return database.ref('/').once('value',snap => {
			const steps = snap.val();
			// console.log("look" + steps);  // Obj Obj
      		// const { host, agenda, guests } = action.invite;

			dispatch(getStepsFulfilledAction(steps,ka,pg))
		})
		.catch((error) => {
			console.log(error);
			dispatch(getStepsRejectedAction());
		});
	}
}

function getStepsRequestedAction(){
	return {
		type: 'GET_STEPS_REQUESTED'
	}
}

function getStepsRejectedAction(){
	return {
		type: 'GET_STEPS_REJECTED'
	}
}

function getStepsFulfilledAction(steps,ka,pg){
	return {
		type: 'GET_STEPS_FULFILLED',
		steps,
		ka,
		pg
	}
}

export function setKaFilter(kaFilter){
	return {
		type: 'SET_KA_FILTER',
		kaFilter
	}
}

export function setPgFilter(pgFilter){
	return {
		type: 'SET_PG_FILTER',
		pgFilter
	}
}






