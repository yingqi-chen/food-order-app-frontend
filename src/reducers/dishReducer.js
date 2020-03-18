const dishReducer = (state={dish:[]},action) =>{
    switch(action.type){
        case "LOADING_DISH":
          return state
        default:
            return state
    }
}

export default dishReducer