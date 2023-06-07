import './header.css'

function Header(){
    return (
    <div className='header'>
        <div className='header-title'>
            <span className='title1'>Welcome</span>
            <span className='title2'>Blog</span>
        </div>
        <img
        className='headerimage' 
        src='https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?cs=srgb&dl=pexels-pixabay-257360.jpg&fm=jpg' alt=''/>
    </div>
)}

export default Header