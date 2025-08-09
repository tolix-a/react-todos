import { useEffect, useState } from 'react'
import Item from './Item'
import store from '../state/store';

const List = () => {
   const {sortData, dataCtrl} = store();
   const [isLoading, setIsLoading] = useState(true);

   const fetchData = async ()=>{
      setIsLoading(true);
      await dataCtrl({type:'get'});
      setIsLoading(false);
   }

   useEffect(()=>{
      fetchData();
   },[]);
   
   if(isLoading) return <>loading ... </>
   if(!sortData.length) return <>데이터가 없습니다. </>

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