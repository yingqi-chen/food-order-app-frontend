const dishReducer = ( state = [], action) => {

  switch(action.type){

        case "ADD_DISH":
          return [...state, ...action.dishes]
        default:
            return state
    }
}

export default dishReducer