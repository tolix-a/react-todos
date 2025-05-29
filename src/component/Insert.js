import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import store from '../state/store';

const Insert = () => {
   let {dataCtrl} = store();

   let insert = (e)=>{
      e.preventDefault();
      let value = e.target.todo.value;
      let data = {
         id:uuidv4(), 
         todo:value, 
         status:false
      }
      if(value !== ''){
         dataCtrl({type:'post',data});
      }else{
         alert('내용을 입력하세요!')
      }
      e.target.todo.value='';
      e.target.todo.focus();
   }

   return (
      <div className='insert'>
         <form onSubmit={insert}>
            <input type='text' name='todo' placeholder='오늘 할 일 : 예) 붕어빵 사먹기'/>
            <button> + </button>
         </form>
      </div>
   )
}

export default Insert