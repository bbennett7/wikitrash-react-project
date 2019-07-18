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
      console.log(item[0].searches)
      item[0].searches += 1
      console.log({...state, searchItem: Object.assign(item)})
      return {...state, searchItem: Object.assign(item)};
    case 'UPVOTE_ITEM':
      const upVoteItem = state.items.filter((item) => item.name.toLowerCase() === action.item.name.toLowerCase())
      console.log(upVoteItem[0].upvotes)
      upVoteItem[0].upvotes += 1
      console.log(upVoteItem[0].upvotes)

      return {...state};
    default:
      return state;
  }
}
