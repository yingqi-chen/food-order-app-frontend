import moment from 'moment'

const date = moment().calendar()

const orderReducer = ( state = {dishes: [], total: 0, date: date}, action) => {
   
    switch(action.type){
      

        case "ADD_ORDER":
            debugger
            return{
                ...state,
                dishes: state.dishes.push(action.payload),
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