import { createContext, useEffect, useReducer} from 'react'
import reducer from './reducer';
const initialstate={
    user:JSON.parse(localStorage.getItem('user'))|| null,
    isfetching:false,
    error:false
}

export const Context=createContext(initialstate);

export const Contextprovider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialstate)

    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(state.user))
        
    },[state.user])
    return(
        <Context.Provider
        value={
            {
                user:state.user,
                isfetching:state.isfetching,
                error:state.error,
                dispatch
            }
        }>
            {children}
        </Context.Provider>
    )
}