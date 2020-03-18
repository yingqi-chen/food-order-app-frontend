const dishReducer = (state={dish:[]},action) =>{
    switch(action.type){
        case "LOADING_DISH":
          console.log("fetching dishes...")
          return state
        default:
            return state
    }
}

export default dishReducer