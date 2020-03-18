const authenticateUser = (userinfo) =>{
    return {
        type: "AUTHENTICATION",
        payload: userinfo
    }
}





export default {authenticateUser}