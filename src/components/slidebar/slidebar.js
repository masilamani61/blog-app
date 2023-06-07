import './slidebar.css'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Slidebar(){
    const [cats,setcat]=useState([])

    useEffect(()=>{
        const categories= async()=>{
            const res=await axios.get('http://localhost:5000/api/categories')
            
            setcat(res.data)
        }
        categories()
    },[])
    return(
    <div className="slidebar">
        <div className="slidebaritems">
            <span className='slidebar-title'>
                About Me
            </span>
            <img className='slidebarimage' src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80" alt=""/>
            <p>
               BLOG is good for health,post reminds your past,content make you feel good
            </p>
        </div>
        <div className='slidebaritems'>
            <span className="slidebar-title">
                CATEGORIES
            </span>
            <ul className='sliderbarlist'>
             
             {
                cats.map((c)=>(
                    <Link className='link' to={`/?cat=${c.name}`}>
                    <li className='slidebaritems'>
                        {c.name}</li>
                        </Link>
                      
                ))
             }
              
                </ul>
        </div>
        <div className='slidebaritems'>
            <span className='slidebar-title'>
                Connect with us
            </span>
            <div className="socialmedia">
                
            <i className="slideicons fa-brands fa-square-facebook"></i>
                <i className="slideicons fa-brands fa-twitter"></i>
                <i className="slideicons fa-brands fa-instagram"></i>
            </div>
        </div>

    </div>)
}