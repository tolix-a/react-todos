import React, { useEffect, useState } from 'react'
import store from '../state/store'

const Sort = () => {
   let {data, sortData, sortCtrl} = store();
   let [type, setType] = useState('All');

   useEffect(()=>{
      sortCtrl({type});
   },[data,type])
   
   return (
      <div className='header'>
         <div>{sortData.length} items</div>
         <div>
            <button onClick={()=>setType('All')} className={type === 'All' ? 'active' : ''}>All</button>
            <button onClick={()=>setType('Active')} className={type === 'Active' ? 'active' : ''}>Active</button>
            <button onClick={()=>setType('Completed')} className={type === 'Completed' ? 'active' : ''}>Completed</button>
         </div>
      </div>
   )
}

export default Sort