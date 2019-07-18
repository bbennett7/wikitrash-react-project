function fetchItems() {
  return(dispatch) => {
    dispatch({type: 'LOADING_ITEMS'});
    return fetch('http://localhost:3000/db')
      .then(response => { return response.json() })
      .then(responseJSON => { return responseJSON})
      .then(items => { dispatch({ type: 'FETCH_ITEMS', payload: items })})
  }
}

function addItem(item) {
  fetch('http://localhost:3000/item', {
      method: 'POST',
      body: JSON.stringify(item),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(console.log("Success"))

  return {
    type: "ADD_ITEM",
    item
  }
}

function searchItems(name) {
  return(dispatch) => { dispatch({ type: 'SEARCH_ITEMS', payload: name })}
}

export {
  addItem,
  fetchItems,
  searchItems
}
