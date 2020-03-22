

const addUser = (userinfo)=>{
    return {
        type: "AUTHENTICATION_SUCCESS",
        payload: userinfo
    }
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


const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})



export default {addUser}