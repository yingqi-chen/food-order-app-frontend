export function createOrder(id){
    let order =JSON.parse(localStorage.getItem("order"))
    return dispatch =>{
      fetch(`http://localhost:3001/users/${id}/orders`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(order)
          }).then(res=>res.json())
          .then(localStorage.removeItem("order"))
          .then(dispatch({type: "CLEAR_ORDER"}))
          .then(alert("A new order is created! Please refresh to see your order history."))
    }
  }
  
  