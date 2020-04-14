import moment from 'moment'

const date = moment().calendar()

let initialState = {current_order: {dishes: [], total: 0, date: date}, order_history: []}

const orderReducer = ( state = initialState, action) => {
   let dishes = state.current_order.dishes
   let total = state.current_order.total
   let current_order = state.current_order
   
    switch(action.type){
    
        case "ADD_ORDER":
            return {
                ...state,
                current_order: {
                    ...current_order,
                    dishes: [
                        ...dishes,
                        action.payload
                    ],
                    total: total+action.payload.price,
                    date: date
                }
            }

        case "CLEAR_ORDER":
            return initialState
        
        case "CANCEL_ORDER":
            let id=action.payload.id
            let index = dishes.findIndex(x=>x.id===id) 
            
            if(typeof (index)==="number"){
                let dish = dishes[index]
                let newState =  {
                    ...state,
                    current_order: {
                        ...current_order,
                        dishes: [
                        ...dishes.slice(0,index),
                        ...dishes.slice(index+1)
                    ],
                        total: total-dish.price     
                }}
                localStorage.setItem("order", JSON.stringify(newState))
            return newState
            }else{
                alert("cannot find that dish!")
                return state
            }

        case "FETCH_ORDER":
                
                let order_json = action.payload
                let sum = 0
                debugger
                if (action.payload){
                order_json.current_order.dishes.forEach((x)=>sum+=x.price)
                return {
                    ...state,
                    current_order: {
                        ...current_order,
                        date: order_json.current_order.date,
                        dishes: order_json.current_order.dishes,
                        total: sum
            }}}else{
                return state
            }
        
  
          default:
              return state
      }
  }
  
  export default orderReducer