import './home.css'
import { useEffect,useState} from 'react'
import Header from "../../components/header/header"
import Slidebar from "../../components/slidebar/slidebar"
import Posts from '../../components/posts/posts'
import axios from 'axios';
import { useLocation } from 'react-router'



function Home(){
    const {search}=useLocation()
    console.log(search)
    const [posts,setposts]=useState([]);
    useEffect(()=>{
        const fetchpost=async()=>{
            
            const res=await axios.get('https://blog-app-api-lv3i.onrender.com/api/post'+search)
            setposts(res.data)
        }
        fetchpost();
    },[search])
    return (
        <div>
            <Header/>
            <div className="home">
                <Posts posts={posts}/>
                <Slidebar/>
            </div>
        </div>
    )

}

export default Home
