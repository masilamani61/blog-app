const reducer=(state,action)=>{
    switch(action.type){
        case 'login start':

            return{
                user:null,
                isfetching:true,
                error:false
            }
        case 'login sucess':

            return{
                user:action.payload,
                isfetching:false,
                error:false
            }
        case 'login failure':

            return{
                user:null,
                isfetching:false,
                error:true
            }
        case 'update start':

            return{
              
                ...state,
                isfetching:true
            }
        case 'update sucess':

            return{
                user:action.payload,
                isfetching:false,
                error:false
            }
        case 'update failure':

            return{
                user:state.user,
                isfetching:false,
                error:true
            }

   

        case 'log out':
            return{
                user:null,
                isfetching:false,
                error:false
            }
        default :
            return state


        
    }
}


export default reducer