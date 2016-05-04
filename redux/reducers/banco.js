import ACTION from '../constants/banco'

const initialState = {
	count: 0
}

export function banco(state = 0, action) {
	const {type, payload} = action

  switch (type) {
    case ACTION.REQUEST_SUMAR:
      return state + 1000;
			/*return {
				...state,
				...payload,
				count: + 1
			};*/
    case ACTION.REQUEST_RESTAR:
			return state - 1000;
    default:
      return state;
  }
}
