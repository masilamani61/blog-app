export const loginstart=(userCredentials)=>{
    type:"login start"
    

}

export const loginsucess=(user)=>({
    type:"login sucess",
    payload:user

})

export const loginfailure=()=>{
    type:'login failure'
}

export const logout=()=>{
    type:"log out"
}


export const updatestart=(userCredentials)=>{
    type:"update start"
}

export const updatesucess=(user)=>({
    type:"update sucess",
    payload:user

})

export const updatefailure=()=>{
    type:'update failure'
}

