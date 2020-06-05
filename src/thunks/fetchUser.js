import {loginUser} from '../actions/userAction'
import BASE from '../base_url'

export function loginUserFetch(userInfo){
    return dispatch=>fetch(`${BASE}/login`, {
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
             let user_json = JSON.parse(data.user) 
             localStorage.setItem("token", data.jwt)
             dispatch(loginUser(user_json))
            }
         })
 }
 



export function createUser(userinfo){
    return dispatch=>fetch(`${BASE}/signup`, {
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
            let user_json = JSON.parse(data.user)
            localStorage.setItem("token", data.jwt)
            dispatch(loginUser(user_json))
           }
        })
}

export function fetchLoggedInUser(){
    return dispatch=>{
        const token = localStorage.token
        if (token) {
            return fetch(`${BASE}/auto-login`, {
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
                   dispatch(loginUser(data))               
                }
              })
          }
    }
}