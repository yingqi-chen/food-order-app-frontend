function fetchDishes(dispatch){
    return dispatch =>{
        dispatch({type:"LOADING"})
        fetch("http://localhost:3001/dishes")
        .then(r=>r.json())
        .then(j=>dispatch({type:"ADD_DISH", dishes: j}))
        .then(r=>dispatch({type: "LOADING_DONE"}))
    }
}

export default fetchDishes;