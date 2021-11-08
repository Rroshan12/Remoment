import React,{useEffect,useState} from 'react'
import {useDispatch} from 'react-redux';
import {getActivities} from '../../actions/activities'
import Activities from '../activities/Activities';

function Home() {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(getActivities());
    }, [currentId,dispatch])
     return (
         <div>
             <Activities currentId={currentId} setCurrentId={setCurrentId}/>
         </div>
     )
}

export default Home
