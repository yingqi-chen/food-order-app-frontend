function fetchDishes(dispatch){
    return dispatch =>{
        dispatch({type:"LOADING_DISH"})
        fetch("http://localhost:3001/dishes")
        .then(r=>r.json())
        .then(j=>dispatch({type:"ADD_DISH", dishes: j}))
    }
}

export default fetchDishes;