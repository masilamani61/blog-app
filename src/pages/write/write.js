import { useContext, useState } from 'react'
import axios from 'axios'
import './write.css'
import { Context } from '../../context/context'
export default function Write(){
    const [title,settitle]=useState('')
    const [desc,setdesc]=useState('')
    const [file,setfile]=useState(null)
    const {user}=useContext(Context)

    const handlesumit=async(e)=>{
        e.preventDefault()
        const newpost={
            username:user.username,
            title,
            desc,
        }
        if (file){
            const data=new FormData();
            const filename=Date.now()+file.name;;
            data.append('name',filename)
            data.append('file',file)
            newpost.photo=filename;
            try{
                await axios.post('https://blog-app-api1.onrender.com/api/upload',data)
            }
            catch(err){

            }
            try{
               const res= await axios.post('https://blog-app-api1.onrender.com/api/post',newpost)
               window.location.replace('https://blog-app-o0wb.onrender.com/post/'+res.data._id)
            }
            catch{

            }
        }

        
    }

    return (
        <div className='write'>
            {file &&(
             <img src={URL.createObjectURL(file)}
             alt=''
             className='formimage'
                />)}
            <form className='formwrite' onSubmit={handlesumit}>
              
              
                <div className='writeformgroup'>
                    <label htmlFor='file'>
                    <i class="icon fa-solid fa-plus"></i>
                    </label>
                    <input onChange={e=>{setfile(e.target.files[0])}} type='file' id='file' style={{display:'none'}}/>
                    <input onChange={e=>{settitle(e.target.value)}} type='text' placeholder='title' className='writetext'/>
                </div>
                <div className='writeformgroup'>
                    <textarea onChange={e=>{setdesc(e.target.value)}} type='text' className='writeinput' placeholder='tell your story'></textarea>
                </div>
                <button type='submit' className='formsubmit'>
                    publish
                </button>
            </form>
        </div>
    )
}
