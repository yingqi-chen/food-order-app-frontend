import moment from 'moment'

const date = moment().calendar()

let initialState = {dishes: [], total: 0, date: date}

const orderReducer = ( state = initialState, action) => {
   
    switch(action.type){
      

        case "ADD_ORDER":
            state.dishes.push(action.payload)
            return{
                ...state,
                dishes: state.dishes,
                total: state.total + action.payload.price
            }

        case "CLEAR_ORDER":
            return initialState;
        
        case "CANCEL_ORDER":
            let id=action.payload.id
            let index = state.dishes.findIndex(x=>x.id===id)
            
            if(typeof (index)==="number"){
                let dish = state.dishes[index]
                let newState =  {
                    ...state,
                    dishes: [
                        ...state.dishes.slice(0,index),
                        ...state.dishes.slice(index+1)
                    ],
                    total: state.total-dish.price     
                }
                localStorage.setItem("order", JSON.stringify(newState))
            return newState
            }else{
                alert("cannot find that dish!")
                return state
            }

        case "FETCH_ORDER":

                let order_json = action.payload
                let sum = 0
                if (action.payload){
                order_json.dishes.forEach((x)=>sum+=x.price)
                return {
                    ...state,
                        date: order_json.date,
                        dishes: order_json.dishes,
                        total: sum
            }}else{
                return state
            }
        
  
          default:
              return state
      }
  }
  
  export default orderReducer