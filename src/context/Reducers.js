export const bagReducer = (state, action) => {
  switch(action.type){
    case 'ADD':
      return {bag: [...state.bag, action.payload]}
    case 'REMOVE':
      return {bag: state.bag.filter(i => i.uuid != action.payload)}
    case 'CHANGE':
      return {bag: state.bag.filter((i) => i.uuid === action.payload.id ? i.quantity = action.payload.quantity : i.quantity)}
    case 'MODDING':
      return {bag: state.bag.filter((i) => i.uuid === action.payload ? i.modding = true : i.modding)}
    case 'DONEMOD':
      return {bag: state.bag.map((i) => {
        return {...i, modding: false}
      })}
    default:
      return state;
  }
}