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
  
          default:
              return state
      }
  }
  
  export default orderReducer