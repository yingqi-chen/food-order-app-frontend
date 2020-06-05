import BASE from '../base_url'

export function createOrder(id){
    let order =JSON.parse(localStorage.getItem("order")).current_order
    debugger
    return dispatch =>{
      fetch(`${BASE}/users/${id}/orders`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(order)
          }).then(res=>res.json())
          .then((res)=>{
          dispatch({
            type: "CREATE_ORDER",
            payload: res
          })})
          .then(localStorage.removeItem("order"))
          .then(alert("A new order is created!"))
          .catch(err=>alert(err))
    }
  }
  
  