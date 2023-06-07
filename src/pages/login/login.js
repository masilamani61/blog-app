import { Link } from 'react-router-dom'
import './login.css'
import { useContext, useRef } from 'react'
import { Context } from '../../context/context'
import axios from 'axios'

export default function Login(){
    const useref= useRef()
    const passwordref= useRef()
    const{user,dispatch,isfetching}=useContext(Context)

    const handlesummit=async(e)=>{
        e.preventDefault()
        console.log('yes')
        dispatch({type:'login start'
        });
        try{
            const res=await axios.post('https://blog-app-api1.onrender.com/api/auth/login',{
                username:useref.current.value,
                password:passwordref.current.value
                
            })
            dispatch({type:'login sucess',payload:res.data})
          
        }
        catch(err){
            console.log(err)
            dispatch({type:'login failure',})
          
        }
        
   
    }
    console.log(user)
    return (
        <>
        <div className='login'>
            
            <form className='loginform' onSubmit={handlesummit}>
                <h1>Login</h1>
                <label>username</label>
                <input type='text' placeholder='username' ref={useref}/>
                <label>password</label>
                <input type='password' placeholder='password' ref={passwordref}/>
                <button className='loginbutton' disabled={isfetching}>login</button>   
            </form>
            
            <button type='submit' className='register'><Link to='/register'>register</Link></button>    
        </div>
        </>
    )
}
