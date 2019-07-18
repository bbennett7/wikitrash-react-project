function fetchItems() {
  return(dispatch) => {
    dispatch({type: 'LOADING_ITEMS'});
    return fetch('http://localhost:3000/db')
      .then(response => { return response.json() })
      .then(responseJSON => { return responseJSON.items})
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

export {
  addItem,
  fetchItems
}
