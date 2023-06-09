import { useContext, useState } from 'react'
import axios from 'axios'
import './write.css'
import { Context } from '../../context/context'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../../firebas';
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
            const storageRef = ref(storage, title);

const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
        newpost.photo=downloadURL
        console.log(newpost)
        try{
          const res=await  axios.post('https://blog-app-api1.onrender.com/api/post',newpost)
          window.location.replace('https://blog-jqq6.onrender.com')
       }
       catch{
           
       }
      
    });
  }
);
          
        }
        else{
            try{
               const res= await axios.post('http://blog-app-api1.onrender.com/api/post',newpost)
               window.location.replace('https://blog-jqq6.onrender.com/post/'+res.data._id)
            }
            catch{

            }}
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
