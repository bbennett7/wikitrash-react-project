export default function manageItems(state = {loading: false, items: []}, action) {
  switch (action.type) {
    case 'LOADING_ITEMS':
      return {...state, loading: true};
    case 'FETCH_ITEMS':
      console.log({loading: false, items: action.payload})
      return {loading: false, items: action.payload};
    case 'ADD_ITEM':
      console.log({items: [...state.items, action.item]})
      return {items: [...state.items, action.item]};
    default:
      return state;
  }
}
