import './singlepost.css';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Context } from '../../context/context';

const PF="https://blog-app-api1.onrender.com/images/";
  

export default function Singlepost(){
    const [post,setpost]=useState({})
    const location =useLocation();
    const path=location.pathname.split('/')[2]
    const [update,setupdate]=useState(false)
    const [title,settitle]=useState('')
    const[desc,setdesc]=useState('')
    const {user}=useContext(Context)
    

    useEffect(()=>{

        const getpost=async()=>{
            const res=await axios.get('https://blog-app-api1.onrender.com/api/post/'+path)
            setpost(res.data)
        }
        getpost();
    },[path])

    const handledelete=async()=>{
      
        try{
            
            await axios.delete('https://blog-app-api1.onrender.com/api/post/'+post._id,{data:{username:user.username}})
            window.location.replace('/')
        }
        catch(err){

        }
    }

    const handleupdate=async()=>{
        try{
            await axios.put('https://blog-app-api1.onrender.com/api/post/'+post._id,
            {
                username:user.username,
                title,
                desc
            })
            window.location.replace(`/post/${post._id}`)
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <div className='singlepost'>
            <div className='singlepostwrapper'>
                {post.photo &&(
                <img className='singlepostimage'
                src={post.photo}
                alt=''
                />)
}               { update===true ?(<input type='text' onChange={e=>{settitle(e.target.value)}} className='titleupdate' placeholder={post.title}/>): (
                <h1 className='singleposttitle'>
                  {post.title}
                  
                <div className='singlepostedit'>
                { user.username===post.username && (<div><i className="fa-solid fa-pen-to-square" onClick={()=>setupdate(true)}></i> 
                <i class="fa-solid fa-trash" onClick={handledelete}></i>
             </div> )}
              
                </div>
                </h1>)}
                <span className='author'>author:<Link className='link' to={`/?user=${post.username}`}>{post.username}</Link></span>
                <span className='date'>date:{new Date(post.createdAt).toDateString()}</span>
                {update ? <textarea className='descriptionupdate' onChange={e=>{setdesc(e.target.value)}} placeholder={post.desc}></textarea> :
                ( <p className='singledescription'> {post.desc}
                </p>)}  
                {update && <button className='buttonupdate' onClick={handleupdate}>update</button>}
            </div>
 
        </div>
    )
}
