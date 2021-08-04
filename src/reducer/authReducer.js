export const authReducer = (state=false,action)=>{
    if(action.type === 'LOGIN'){
        return{
            state:true
        }
   }
   else if(action.type === 'LOGOUT'){
       return{
           state:false
       }
   }
    return state;
}
