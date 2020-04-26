export function addOrder(dish){
  return{
    type: "ADD_ORDER",
    payload: dish
 }}

 export function fetchOrder(){
    return{
      type: "FETCH_ORDER",
      payload: localStorage.getItem("order")
    }
 }

export function cancelOrder(dish){
  return{
    type: "CANCEL_ORDER",
    payload: dish
  }
}



