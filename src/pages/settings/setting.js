import './setting.css'
import Slidebar from '../../components/slidebar/slidebar'
import { useContext, useState } from 'react'
import { Context } from '../../context/context'
import axios from 'axios'
const pf="https://blog-app-api1.onrender.com/images/"
export default function Setting(){
    const {user,dispatch}=useContext(Context)
    const [email,setemail]=useState('')
    const [file ,setfile]=useState(null)
    const [username,setusername]=useState('')
    const [password,setpassword]=useState('')

    

    const handlesumit=async(e)=>{
        e.preventDefault()
        dispatch({type:'update start'})
        const updateduser={
            id:user._id,
            username,
            password,
            email,
        }
        if (file){
            const data= new FormData()
            const filename=file.name;
            data.append("name",filename)
            data.append('file',file)
            updateduser.profilepic=filename
            try{
                await axios.post('/upload',data)
            }
            catch{
                dispatch({type:'update failure'})

            }

        }
        try{
            const res =await axios.put('https://blog-app-api1.onrender.com/api/update/'+user._id,updateduser)
            dispatch({type:'update sucess',payload:res.data})
            console.log(user)
            
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <div className='settings'>
            <div className='setting-wrapper'>
                <div className='setting-title'>
                    <span className='update'>update</span>
                    <span className='delete'>delete my account</span> 
                </div>
                <form className='settingform' onSubmit={handlesumit}>
                    <label className='profiletitle'>profile picture</label>
                    <div className='settingprofile'>
                        <img className='image' alt='' src={ file ? URL.createObjectURL(file):pf+user.profilepic}/>
                        <label htmlFor='profile'>
                        <i class="icon fa-solid fa-user"></i>
                        </label>
                    </div>
                    <div className='details'>
                        <input type='file' id='profile' onChange={e=>setfile(e.target.files[0])} style={{display:'None'}}/>
                        <label>email id</label>
                        <input type='email' onChange={e=>setemail(e.target.value)} />
                        <label>username</label>
                        <input type='text' onChange={e=>setusername(e.target.value)} />
                        <label>password</label>
                        <input type='password' onChange={e=>setpassword(e.target.value)} />
                        <button className='button' type='submit'>Update</button>
                    </div>
                </form>
            </div>
            <Slidebar/>
        </div>
    )
}
