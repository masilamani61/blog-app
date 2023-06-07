import { useContext } from 'react';
import './top.css';
import { Link } from "react-router-dom";
import { Context } from '../../context/context';
const pf="http://localhost:5000/images/"

export default function Topbar(){
    const {user,dispatch}=useContext(Context)
  
    const handlelogout=()=>{
        dispatch({type:'log out'})
    }
    return(
        <div className='top'>
            <div className='topleft'>
                <i className="topicons fa-brands fa-square-facebook"></i>
                <i className="topicons fa-brands fa-twitter"></i>
                <i className="topicons fa-brands fa-instagram"></i>
            </div>
            <div className='topcenter'>
                <ul className='toplist'>
                    <li className='toplistitems'><Link className='link' to='/'>HOME</Link></li>
                    <li className='toplistitems'><Link className='link' to="/about">ABOUT</Link></li>
                    <li className='toplistitems'><Link className='link' to='/contact'>CONTACT</Link></li>
                    <li className='toplistitems'><Link className='link' to="/write">WRITE</Link></li>
                    <li className='toplistitems' onClick={handlelogout}>{ user &&<Link className='link' to='/login'>LOG OUT</Link>}</li>
              
              
                </ul>
            </div>
            <div className='topright'>
                {user? (<Link to='/setting' className='link'>
                     <img className='topimage' src={pf+user.profilepic} alt=''/>
                     </Link>
                     ):
                     
                   (<>
                   <ul className='toplist'>
                    <li className='toplistitems'>
                     <Link className='link' to='/login'>Login</Link>
                     </li>
                     <li className='toplistitems'>
                    <Link className='link' to='/register'>Register</Link>
                    </li>
                    </ul>
                    </>
                   )
                
                }
                
                <i class="topsearchicon fa-solid fa-magnifying-glass"></i>
             
            </div>
      
        </div>
    )
}