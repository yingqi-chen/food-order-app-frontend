import moment from 'moment'

const date = moment().calendar()

const orderReducer = ( state = {dishes: [], total: 0, date: date}, action) => {
   
    switch(action.type){
  
          default:
              return state
      }
  }
  
  export default orderReducer