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
      item[0].searches += 1
      return {...state, searchItem: Object.assign(item)};

    case 'RESET_SEARCH_ITEM':
      return {...state, searchItem: {}}

    case 'UPVOTE_ITEM':
      const upVoteItem = state.items.filter((item) => item.name.toLowerCase() === action.item.name.toLowerCase())
      upVoteItem[0].upvotes += 1
      if (upVoteItem[0].upvotes >= 10) {
        upVoteItem[0].verified = true
      };
      return {...state};

    case 'DOWNVOTE_ITEM':
      const downVoteItem = state.items.filter((item) => item.name.toLowerCase() === action.downVoteItem.name.toLowerCase())
      const index = state.items.findIndex((item) => item === downVoteItem[0])
      downVoteItem[0].downvotes += 1
      console.log(downVoteItem[0].downvotes)
      if (downVoteItem[0].downvotes >= 10) {
        return {...state.items.splice(index, 1)};
      } else {
        return {...state};
      }

    default:
      return state;
  }
}
