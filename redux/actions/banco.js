/*
- Representan un cambio en el estado
- Son objetos planos de javascript (POJO)
- Tienen un type y un payload
- se comunican con los reducers para cambiar el estado
*/
import ACTION from '../constants/banco'


// ACTIONS
// funciones simples
export function increment() {
  return {
    type: ACTION.REQUEST_SUMAR,
    //payload: {suma}
  }
}

export function decrement() {
  return {
    type: ACTION.REQUEST_RESTAR,
    //payload: -1000
  }
}

//export default increment
// ACTIONS CREATORS
// simples funciones y reciben parametros

// ASYNC ACTIONS CREATORS
// se utiliza un middleware por redux-thunk
// tienen dispatch y getState
