export const bagReducer = (state, action) => {
  switch(action.type){
    case 'ADD':
      return {bag: [...state.bag, action.payload]}
    case 'REMOVE':
      return {bag: state.bag.filter(i => i.uuid != action.payload)}
    default:
      return state;
  }
}