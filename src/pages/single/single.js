import Singlepost from '../../components/singlepost/singlepost';
import Slidebar from '../../components/slidebar/slidebar';
import './single.css';
 export default function Single(){
    return(
        <div className='single'>
            <Singlepost/>
            <Slidebar/>
        </div>
    )
 }