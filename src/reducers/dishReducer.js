const dishReducer = (state={dish:[], loading: "not yet"},action) =>{

    switch(action.type){
        case "LOADING_DISH":
          return {
            ...state,
            loading: "still loading..."
          }

        case "ADD_DISH":
          return {
            ...state,
            dishes: action.dishes
          }
        default:
            return state
    }
}

export default dishReducer