



export function loginUserFetch(userInfo){
    return dispatch=>fetch('http://localhost:3001/login', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo)
        })
        .then(r=>r.json())
        .then(data=>{
            if(data.error){
                alert(data.error)
            }else{
             localStorage.setItem("token", data.jwt)
             dispatch(loginUser(data.user))
            }
         })
 }
 



export function createUser(userinfo){
    return dispatch=>fetch('http://localhost:3001/signup', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userinfo)
        }).then(r=>r.json())
           .then(data=>{
           if(data.error){
               alert(data.error)
           }else{
            localStorage.setItem("token", data.jwt)
            dispatch(loginUser(data.user))
           }
        })
}

export function fetchLoggedInUser(token){
    return dispatch=>{
        const token = localStorage.token
        if (token) {
            return fetch("http://localhost:3001/auto-login", {
              method: "GET",
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
              }
            })
              .then(resp => resp.json())
              .then(data => {
                if (data.error) {
                    alert(data.error)
                  localStorage.removeItem("token")
                } else {
                  dispatch(loginUser(data.user))
                }
              })
          }
    }
}



const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})



