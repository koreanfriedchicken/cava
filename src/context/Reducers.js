export const bagReducer = (state, action) => {
  switch(action.type){
    case 'ADD':
      return {bag: [...state.bag, action.payload]}


    default:
      return state;
  }
}