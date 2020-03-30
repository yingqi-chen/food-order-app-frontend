import moment from 'moment'

const date = moment().calendar()

const orderReducer = ( state = {dishes: [], total: 0, date: date}, action) => {
   
    switch(action.type){
      

        case "ADD_ORDER":
            state.dishes.push(action.payload)
            return{
                ...state,
                dishes: state.dishes,
                total: state.total + action.payload.price
            }

        case "CREATE_ORDER":
            return state;
        
        case "DELETE_ORDER":
            return state

        case "FETCH_ORDER":
            let order_json = action.payload
            let sum = 0
            order_json.dishes.forEach((x)=>sum+=x.price)
            return {
                ...state,
                    date: order_json.date,
                    dishes: order_json.dishes,
                    total: sum
            }
  
          default:
              return state
      }
  }
  
  export default orderReducer