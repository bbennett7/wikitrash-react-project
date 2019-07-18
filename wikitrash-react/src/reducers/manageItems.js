export default function manageItems(state = {loading: false, items: [], searchItem: {}}, action) {
  switch (action.type) {
    case 'LOADING_ITEMS':
      return {...state, loading: true};
    case 'FETCH_ITEMS':
      console.log({...state, loading: false, items: action.payload})
      return {...state, loading: false, items: action.payload};
    case 'ADD_ITEM':
      console.log({...state, items: [...state.items, action.item]})
      return {...state, items: [...state.items, action.item]};
    case 'SEARCH_ITEMS':
      const item = state.items.filter((item) => item.name.toLowerCase() === action.payload.toLowerCase())
      console.log({...state, searchItem: Object.assign(item)})
      return {...state, searchItem: Object.assign(item)};
    default:
      return state;
  }
}
