export default function manageItems(state = {items: []}, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      console.log({items: [...state.items, action.item]})
      return {items: [...state.items, action.item]};
    default:
      return state;
  }
}
