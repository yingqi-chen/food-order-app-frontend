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
  
  