export function addOrder(dish){
  return{
    type: "ADD_ORDER",
    payload: dish
 }}

 export function fetchOrder(){
    return{
      type: "FETCH_ORDER",
      payload: JSON.parse(localStorage.getItem("order"))
    }
 }

export function cancelOrder(dish){
  return{
    type: "CANCEL_ORDER",
    payload: dish
  }
}

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
        .then(json=>alert("A new order is created!"))
  }
}

