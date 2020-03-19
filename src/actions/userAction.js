

function addUser (userinfo){
    return {
        type: "AUTHENTICATION_SUCCESS",
        payload: userinfo
    }
}





export default addUser