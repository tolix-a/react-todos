import { useEffect } from 'react'
import Item from './Item'
import store from '../state/store';

const List = () => {
   const {sortData, dataCtrl} = store();

   useEffect(()=>{
      dataCtrl({type:'get'});
   },[]);
   
   if(!sortData.length) return <>loading ... </>

   return (
      <ul>
         {
            sortData.map((obj)=>
            <Item obj={obj} key={obj.id}/>
            )
         }
      </ul>
   )
}

export default List