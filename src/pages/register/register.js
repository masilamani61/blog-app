import { Link } from 'react-router-dom'
import './register.css'
import { useState,useContext } from 'react'
import { Context } from '../../context/context'
import axios from 'axios'

export default function Register(){
    const [username,setusername]=useState('')
    const[password,setpassword]=useState('')
    const[email,setemail]=useState('')
    const[err,seterr]=useState(false)
    
    const{user,dispatch,isfetching}=useContext(Context)


    const handlesumit=async(e)=>{
        e.preventDefault()
        try{
        const res=await axios.post('https://blog-app-api1.onrender.com/api/auth/register',{
            username,
            email,
            password

        })
            
        dispatch({type:'login sucess',payload:res.data})
          

        
    }
        catch(err){
            seterr(true)
        }
    }
    return (
        <>
        <div className='login'>
            
            <form className='loginform' onSubmit={handlesumit}>
                <h1>Register</h1>
                <label>Username</label>
                <input type='text' value={username} placeholder='Enter username' onChange={(e)=>setusername(e.target.value)
                
        }/>
      
                <label>email</label>
                <input type='email' value={email} placeholder='Email' onChange={e=>{setemail(e.target.value)}}/>
                <label>password</label>
                <input type='password' value={password} placeholder='password' onChange={e=>{setpassword(e.target.value)}}/>
                <button onClick={handlesumit}><Link>Register</Link></button>   
                {err &&<span>someting went wrong!</span>}
            </form>
            
          
             </div>
        </>
    )
}
