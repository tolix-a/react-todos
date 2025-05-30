import axios from 'axios';
import {create} from 'zustand';

const instance = axios.create({
   baseURL: process.env.REACT_APP_SERVER_URL
});

const store = create((set)=>({
   data: [],
   sortData: [],
   dataCtrl: async function(action){
      let res;
      switch(action.type){
         case 'get' : 
         res = await instance.get("/"); 
         set({data:res.data});
         break;

         case 'post' : 
         await instance.post("/",action.data);
         set( (state)=> {
            return {data:[...state.data, action.data]};
         });
         break;
         
         case 'put' : 
         await instance.put("/",action.data);
         set( (state)=> {
            let update = [...state.data].map((obj)=>{
                        if(action.data.id == obj.id){
                           obj.status = action.data.status
                        }
                        return obj;
                     })
            return {data:update};
         }); 
         break;
         
         case 'delete' : 
         res = await instance.delete(`/?id=${action.data}`);
         set( (state)=> {
            let del = [...state.data].filter((obj)=>{
                           return obj.id !== action.data                          
                        })
            return {data:del};
         }); 
         break;

         default:
         console.log("No");
      }

   },
   sortCtrl: function(sort){
      set((state)=>{
         // true = 일을 끝냄
         // false = 해야할 일

         switch(sort.type){
            case 'Active': return {sortData: state.data.filter(obj=> obj.status === false)};
            case 'Completed': return {sortData: state.data.filter(obj=> obj.status === true)};
            default: return {sortData: state.data};
         }
      });
   }
}))

export default store;