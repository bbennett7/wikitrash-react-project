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
  addItem
}
